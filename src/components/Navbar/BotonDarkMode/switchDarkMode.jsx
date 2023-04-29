import './switchDarkMode.css'
import { useDarkModeContext } from '../../../context/DarkModeContext.js'

export const SwitchDarkMode = () => {
    
    const { toggleDarkMode } = useDarkModeContext()

    return (
        <div>
            <label className="switch">
                <input type="checkbox" onInput={() => toggleDarkMode()} id="toggleMode" />
                <span className="slider">
                    <svg className="slider-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"><path fill="none" d="m4 16.5 8 8 16-16"/></svg> 
                </span>
            </label>
        </div>
    )
}

