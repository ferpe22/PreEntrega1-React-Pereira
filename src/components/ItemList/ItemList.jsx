
//Recibe un array de productos y a cada uno de ellos los tranformara en componenentes dada una plantilla (Item)
import { Item } from "../Item/Item"
export const ItemList = ({ productos }) => {
    return (
        <>
            {productos.map(producto => <Item key={producto.id} item={producto}/>)}
        </>
    )
}