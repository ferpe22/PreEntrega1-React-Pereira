import { useState, useEffect } from 'react';
const API_KEY = "bfd1b980aa5416c251b43fb2f1ba6c22"

export const Clima = () => {
    const [clima, setCLima] = useState([])
    
    useEffect(() => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${"Oporto"},${"Oporto"},${"PT"}&limit=${1}&appid=${API_KEY}`)
            .then(response => response.json())
            .then(datos => {
                const {lat, lon, country, name} = datos[0]
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=sp`)
                    .then(response => response.json())
                    .then(({main, weather}) => { //Aca elijo lo que quiero que me traiga. Ambos son
                        const {feels_like, temp, humidity} = main //Desetructuro "main"(objeto) con los datos que me interesan
                        const {description} = weather[0]//Desestructuro "weather"(array) y solo traigo lo que me interesa. El weather[0] tiene que ver con la info que traigo de la api
                        const divClima = 
                            <>
                                <p>Ciudad: {name}</p>
                                <p>Pais: {country}</p>
                                <p>Temperatura: {temp}°C</p>
                                <p>Humedad: {humidity}%</p>
                                <p>Sensacion Térmica: {feels_like}°C</p>
                                <p>Descripcion: {description}</p>
                            </>
                            setCLima(divClima)
                    })
            })
    }, [])

    return (
        <div>
            {clima}
        </div>
    )
}

