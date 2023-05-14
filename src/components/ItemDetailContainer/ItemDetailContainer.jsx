import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getProducto } from "../../firebase/firebase"

//Obtiene la informacion de los prodcutos desde Firebase.
export const ItemDetailContainer = () => {
    
    const [item, setItem] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getProducto(id)
            .then(prod => setItem(prod))
            .catch(error => console.error(error))
    }, [id])
    
    return (
        <div className="card md-3 container m-3 itemDetail">
            <ItemDetail item={item} />
        </div>
    )
}
