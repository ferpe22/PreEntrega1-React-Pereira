import { useState } from "react"

export const useCount = (valInicial = 1, min, max) => { //Si no me ingresan el valor incial, el minimo es 1

        if(valInicial < min || valInicial > max) { //Si el valor incial es menor que mi minimo o mayor que mi maximo, lo igualo al minimo para que no haya errores
            valInicial = min
        }

        const[count, setCount] = useState (valInicial)

        const sum = () => count < max && setCount(count + 1)
        
        const minus = () => count > min && setCount(count - 1)

        const reset = () => setCount(valInicial) //Reseteo a 1 o a lo que haya ingresado el usuario

        return {count, sum, minus, reset}

}