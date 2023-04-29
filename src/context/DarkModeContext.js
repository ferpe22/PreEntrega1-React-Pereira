import { useState, createContext, useContext } from "react";

const DarkModeContext = createContext() //creo mi contexto

export const useDarkModeContext = () => useContext(DarkModeContext) // Creo una funcion para poder crear mi contexto

export const DarkModeProvider = (props) => { //Forma de proveer mi contexto dentro de mi app, puede recibir props si es necesario

    const [darkMode, setDarkMode] = useState(false) //Defino el valor por default

    //Funciones para modificar mi state

    const toggleDarkMode = () => {
        setDarkMode(!darkMode) //si estaba en verdadero, lo pasa a falso o viceversa

        //Agregado de clase de CSS por temas de Bootswatch
        if(!darkMode) { //!darkMode por consulta de la modificacion
            document.body.classList.add('darkMode')
        }else {
            document.body.classList.remove('darkMode')
        }

    }
    return ( //Agrego que funciones y valores seran exportados junto con el provider
        <DarkModeContext.Provider value={{ darkMode , toggleDarkMode }}> 
            {props.children}
        </DarkModeContext.Provider>
    )
}