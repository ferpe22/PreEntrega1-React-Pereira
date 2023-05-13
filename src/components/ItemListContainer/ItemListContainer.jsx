//Consulta a mis productos (al json o db).Consulta a un array de productos (objetos). Y se los envia a ItemList
import { useState, useEffect } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { useDarkModeContext } from "../../context/DarkModeContext"
import { getProductsDB } from "../../firebase/firebase"

export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const { category } = useParams()
    const { darkMode } = useDarkModeContext()

    // useEffect(() => {
    //     const promesa = (condicional) => new Promise((resolve,reject) => {
    //         if(condicional) {
    //             resolve(BDD)
    //         }
    //         reject("No posee los permisos necesarios")
    //     })
    //     promesa(true)
    //         .then(productos => {
    //             const productosFiltrados = productos.filter(prod => prod.stock > 0) //Paso primero por un filtro de stock 0
    //             const items = <ItemList productos={productosFiltrados}/> //Envio los productos consultados
    //             setProductos(items)
    //         })
    //         .catch(error => console.error(error))

    // }, [])

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