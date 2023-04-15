
//Recibe un objeto y lo devuelve en forma de componente con esta plantilla
export const Item = ({ item }) => {
    console.log(item)
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={`img/${item.imagen}`} className="card-img-top" alt={`Imagen de ${item.nombre}`} />
            <div className="card-body">
                <h5 className="card-title">{item.nombre} {item.modelo}</h5>
                <p className="card-text">Marca: {item.marca}</p>
                <p className="card-text">Precio: ${item.precio}</p>
                <p className="card-text">Stock: {item.stock}</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>

    )
}
