import { useRef } from "react"
import { useCarritoContext } from "../../context/CartContext"
import { Link, useNavigate } from "react-router-dom"
import { crearOrdenCompra, getProducto, updateProducto } from "../../firebase/firebase"
import Swal from "sweetalert2"


export const Checkout = () => {
    
    const datForm = useRef ()
    const { carrito, clearCart, totalPrice } = useCarritoContext()
    
    //useNavigate: devuelve la localizacion actual
    let navigate = useNavigate()
    const consultarForm = (e) => {
        e.preventDefault()

        //FormData: se utiliza para pasar de un html a un objeto iterable
        const datosFormulario = new FormData(datForm.current)
        //Object.fromEntries: se utiliza para pasar de un objeto iterable a un objeto simple
        const cliente = Object.fromEntries(datosFormulario)
        
        //Validacion de igual de cada campo de email
        if (cliente.email !== cliente.emailRepetido) {
            Swal.fire({
                icon: 'error',
                title: 'Los emails deben ser iguales',
                text: 'Por favor modificar y volve a finalizar la compra',
            })
        } else{
            const aux = [...carrito]
            
            //Recorro el carrito y descuento stock
            aux.forEach(prodCarrito => {
                getProducto(prodCarrito.id).then(productoDB => {
                    if(productoDB.stock >= prodCarrito.quantity) { //Si el stock del prod en la base datos es mayor o igual a la cantidad que el cliente quiere comprar, descuento de stock.
                        productoDB.stock -= prodCarrito.quantity
                        updateProducto(productoDB.id, productoDB) //Actualizo el databese con la nueva cantidad (stock previo - cantidad)
                    } else {
                        Swal.fire({
                            icon: 'error',
                            text: 'El stock es insuficiente para la cantidad que desea comprar',
                        })
                    }
                })
            })
            const aux2 = aux.map(prod => ({id: prod.id, quantity: prod.quantity, precio: prod.precio}));
            
            crearOrdenCompra(cliente, aux2, totalPrice(), new Date().toLocaleString('es-AR', {timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone}))
                .then(ordenCompra => {
                    console.log(`Muchas gracias por su compra!! Su codigo de compra es ${ordenCompra.id} por un total de ${totalPrice()}`)
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `Muchas gracias por su compra!! Su codigo de compra es ${ordenCompra.id} por un total de $${totalPrice()}`,
                        showConfirmButton: false,
                        timer: 3500
                    });
                    clearCart()
                    e.target.reset() //Reseteo el formulario una vez presiono submit.
                    navigate("/") //Define la ruta donde quiero redirigir. En este caso el Home.
                })
                .catch(error => {
                    console.log(error)
                })
        }

    }

    return (
        <>
            {
                carrito.lenght === 0 ?
                <>
                    <h2>Debe tener productos en el carrito para poder finalizar la compra</h2>
                    <Link className="nav-link" to={"/"}><button className="btn btn-primary">Continuar comprando</button></Link>
                </>
                :
                <div className="container divForm">
                    <form onSubmit={consultarForm} ref={datForm}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                            <input type="text" className="form-control" name="nombre" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Repetir Email</label>
                            <input type="email" className="form-control" name="emailRepetido" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dni" className="form-label">DNI</label>
                            <input type="number" className="form-control" name="dni" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="celular" className="form-label">Numero de Telefono</label>
                            <input type="number" className="form-control" name="celular" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="direccion" className="form-label">Direccion</label>
                            <input type="text" className="form-control" name="direccion" required/>
                        </div>
                        <button type="submit" className="btn btn-primary">Finalizar Compra</button>
                    </form>
                </div>
            }
        </>
    )
}
