import { useState, createContext, useContext } from "react";

const CarritoContext = createContext()

export const useCarritoContext = () => useContext(CarritoContext)

export const CarritoProvider = (props) => { 

    const [carrito, setCarrito] = useState([])
    
    //Usar metodo find(devuelve un objeto) o el metodo some(devuelve un booleano)
    const isInCart = (id) => { 
        return carrito.some(prod => prod.id === id) //se usa el some() ya que solo queremos saber si existe o no el producto en el carrito, no traernos el objeto completo. Devuelve V o F
    }
    
    const addItem = (item, quantity) => {
        if (isInCart(item.id)) { //consulto si el producto existe o no en el carrito
            const indice = carrito.findIndex(prod => prod.id === item.id) // busco en mi db el prod cuyo id sea igual al id que me pasaron 
            const aux = [...carrito] //creo un aux para crear un array igual del carrito
            aux[indice].quantity = quantity //consulto y seteo la qty en el carrito
            setCarrito(aux)

        } else { //si no existe creo un nuevo objeto con los datos ingresados
            const newItem = {
                ...item,
                quantity: quantity //si agrego directamente el parametro, se queda con el mismo nombre
            }
            //genero una copia del carrito con el operador spread y agrego el nuevo producto
            setCarrito([...carrito, newItem])
        }
    }
    
    const removeItem = (id) => {
        //con filter (filtra todos los elementos y devulve una copia), traigo todos los productos que no tengan el id ingresado, es decir, me traigo todo el array carrito filtrado sin el producto
        setCarrito(carrito.filter(prod => prod.id !== id))
    }

    const clearCart = () => {
        setCarrito([])
    }

    const getItemQuantity = () => {
        return carrito.reduce((acum, prod) => acum += prod.quantity, 0)
    }
    
    const totalPrice = () => {
        return carrito.reduce((acum, prod) => acum += (prod.quantity * prod.precio), 0)
    }

    console.log(carrito)
    return (
        <CarritoContext.Provider value={{carrito, addItem, removeItem, clearCart, getItemQuantity, totalPrice }}>
            {props.children}
        </CarritoContext.Provider>
    )
}