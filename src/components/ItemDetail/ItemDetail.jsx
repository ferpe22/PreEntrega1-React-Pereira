import { ItemCount } from "../ItemCount/ItemCount"
import { useCarritoContext } from "../../context/CartContext"

//Plantilla (card) para ver el detalle del producto + componente contador
export const ItemDetail = ({ item }) => {
    const { addItem } = useCarritoContext()
    const onAdd = (contador) => { //Agregar al carrito
        addItem(item, contador)
    }

    return (
        <div className="row g-0 align-items-center">
            <div className="col-md-4">
                <img src={item.imagen} alt={`Imagen de ${item.nombre}`} className="img-fluid rounded" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{item.nombre} {item.modelo}</h5>
                    <p className="card-text">Marca: {item.marca}</p>
                    <p className="card-text">Precio: ${item.precio}</p>
                    <p className="card-text">Stock: {item.stock}</p>
                    <ItemCount ValInicial={1} min={1} max={item.stock} onAdd={onAdd}/>  
                </div>
            </div>
        </div>
    )
}

