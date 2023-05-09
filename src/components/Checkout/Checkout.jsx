import { useRef } from "react"
import { useCarritoContext } from "../../context/CartContext"
import { Link, useNavigate } from "react-router-dom"
import { crearOrdenCompra, getProducto, updateProducto } from "../../firebase/firebase"
import Swal from "sweetalert2"

export const Checkout = () => {
    
    const datForm = useRef ()
    const { carrito, clearCart, totalPrice } = useCarritoContext()
    
    let navigate = useNavigate() //devuelve la localizacion actual
    const consultarForm = (e) => {
        e.preventDefault()
        const datosFormulario = new FormData(datForm.current) //Pasar de un html a un objeto iterable
        const cliente = Object.fromEntries(datosFormulario) //Pasar de un objeto iterable a un objeto simple
        console.log(cliente)
        const aux = [...carrito]
        //recorrer carrito y descontar stock
        aux.forEach(prodCarrito => {
            getProducto(prodCarrito.id).then(productoDB => {
                if(productoDB.stock >= prodCarrito.quantity) { //si el stock de mi prod en la base datos es mayor o igual a la cantidad que el cliente quiere comprar, descuento de stock
                    productoDB.stock -= prodCarrito.quantity
                    updateProducto(productoDB.id, productoDB) //envio a la base datos el producto descontando su stock
                } else {
                    console.log("El stock no es mayor o igual a la cantidad que se requiere comprar")
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
                e.target.reset() //para resetear el formulario una vez presiono submit
                navigate("/") //defino la ruta donde quiero redirigir
            })
            .catch(error => {
                console.log(error)
            })
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
                            <input type="email" className="form-control" name="email"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Repetir Email</label>
                            <input type="email" className="form-control" name="emailRepetido"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dni" className="form-label">DNI</label>
                            <input type="number" className="form-control" name="dni"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="celular" className="form-label">Numero de Telefono</label>
                            <input type="number" className="form-control" name="celular|"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="direccion" className="form-label">Direccion</label>
                            <input type="text" className="form-control" name="direccion"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Finalizar Compra</button>
                    </form>
                </div>
            }
        </>
    )
}
