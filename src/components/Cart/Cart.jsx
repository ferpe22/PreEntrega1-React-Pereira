import { useCarritoContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList';


export const Cart = () => {
    const {carrito, totalPrice, clearCart} = useCarritoContext()
    return (
        <>
            {
                carrito.length === 0 ?
                    <>
                        <h1>Carrito Vacio</h1>
                        <Link  className="nav-link" to={"/"}><button className="btn btn-dark">Continuar comprando</button></Link>
                    </>
                    :
                    <div className="container cartContainer">
                        {<ItemList productos={carrito} plantilla={"ItemCart"}/>}
                        <div className="cartButtons">
                            <p>Resumen de la compra: {totalPrice()}</p>
                            <button className="btn btn-danger" onClick={()=> clearCart()}>Vaciar carrito</button>
                            <Link className="nav-link" to={"/"}><button className="btn btn-dark">Continuar comprando</button></Link>
                            <Link className="nav-link" to={"/checkout"}><button className="btn btn-dark">Finalizar compra</button></Link>
                        </div>
                    </div>
                    
            }
        
        
        </>
    )
}

