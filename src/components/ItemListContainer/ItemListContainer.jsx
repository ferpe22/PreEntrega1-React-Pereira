//Consulta a mis productos (al json o db).Consulta a un array de productos (objetos). Y se los envia a ItemList
import { useState, useEffect } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const { category } = useParams()
    
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
            fetch('../json/productos.json')
                .then(response => response.json())
                .then(productos => {
                    const productosFiltrados = productos.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === parseInt(category)) 
                    setProductos(productosFiltrados)
            })
        } else {
            fetch('./json/productos.json')
                .then(response => response.json())
                .then(productos => {
                    const productosFiltrados = productos.filter(prod => prod.stock > 0)
                    setProductos(productosFiltrados)
                })
        }

        
    }, [category])

    return (
        <div className="container">
            <div className="row g-4 justify-content-between">
                {<ItemList productos={productos} />}
            </div>
        </div>

    )
}