import { useState, createContext, useContext } from "react";

const DarkModeContext = createContext()

export const useDarkModeContext = () => useContext(DarkModeContext)

export const DarkModeProvider = (props) => {

    const [darkMode, setDarkMode] = useState(false)

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