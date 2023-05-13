import { useCarritoContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList';


export const Cart = () => {
    const {carrito, totalPrice, clearCart} = useCarritoContext()
    return (
        <>
            {
                carrito.length === 0 ?
                    <div className='row m-3'>
                        <h2 className='emptyCartTitle'>Su carrito se encuentra vacío</h2>
                        <Link  className="nav-link" to={"/"}><button className="btn btn-primary buttons">Continuar comprando</button></Link>
                    </div>
                    :
                    <div className="container p-3 cartContainer">
                        {<ItemList productos={carrito} plantilla={"ItemCart"}/>}
                        <div>
                            <p>Resumen de la compra: ${totalPrice()}</p>
                            <div className="cartButtons">
                                <button className="btn btn-danger buttons" onClick={()=> clearCart()}>Vaciar carrito</button>
                                <Link className="nav-link" to={"/"}><button className="btn btn-primary buttons">Continuar comprando</button></Link>
                                <Link className="nav-link" to={"/checkout"}><button className="btn btn-primary buttons">Finalizar compra</button></Link>
                            </div>
                        </div>
                    </div>
                    
            }
        
        
        </>
    )
}

