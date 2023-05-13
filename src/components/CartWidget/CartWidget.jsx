import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CartContext";


export const CartWidget = () => {
    const { getItemQuantity } = useCarritoContext()
    return ( 
        <>
            <button className="btn btn-success">
                <Link className="nav-link" to={"/cart"}>
                <i className="fas fa-shopping-cart fa-lg"></i>
                {getItemQuantity() > 0 && <span className="qtyCarrito">{getItemQuantity()}</span>}
                </Link>
            </button>
            
        </>
    )
}