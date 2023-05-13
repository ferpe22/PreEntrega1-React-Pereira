import { useCount } from "../../hooks/useCount"

export const ItemCount = ({ ValInicial, min, max, onAdd }) => {
    
    const {count, minus, sum, reset} = useCount(ValInicial, min, max)

    return (
        <>
            <button className="btn btn-dark buttons" onClick={minus}>-</button>
                {count}
            <button className="btn btn-dark buttons" onClick={sum}>+</button>
            <button className="btn btn-dark buttons" onClick={reset}>Reset</button>
            <button className="btn btn-primary buttons" onClick={() => onAdd(count)}>Agregar al Carrito</button>
        </>
    )
}
