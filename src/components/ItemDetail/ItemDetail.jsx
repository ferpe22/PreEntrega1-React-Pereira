import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ({item}) => {
    return (
        <div className="row g-0">
            <div className="col-md-4">
                <img src={`img/${item.imagen}`} alt={`Imagen de ${item.nombre}`} className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{item.nombre} {item.modelo}</h5>
                    <p className="card-text">Marca: {item.marca}</p>
                    <p className="card-text">Precio: ${item.precio}</p>
                    <p className="card-text">Stock: {item.stock}</p>
                    <ItemCount ValInicial={1} min={1} max={item.stock}/>                    
                    
                </div>
            </div>
        </div>
    )
}

