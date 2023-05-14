
import { useState, useEffect } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProductsDB } from "../../firebase/firebase"


//Consulta los productos al db, si tienen stock lo muetras, sino los filtra. Despues se los envia a. ItemList.
export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const { category } = useParams()

    useEffect(() => {

        if(category) {
            getProductsDB()
                .then(productos => {
                    const productosFiltrados = productos.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === category) 
                    setProductos(productosFiltrados)
            })
        } else {
            getProductsDB()
                .then(productos => {
                    const productosFiltrados = productos.filter(prod => prod.stock > 0)
                    setProductos(productosFiltrados)
                })
        }

        
    }, [category])

    return (
        <div className="container p-4">
            <div className="row g-4 justify-content-between">
                {<ItemList productos={productos} plantilla={"Item"} />}
            </div>
        </div>

    )
}