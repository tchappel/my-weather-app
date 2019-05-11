import {useEffect, useState} from 'react'
import axios from 'axios'

const apiKey = '99bfcf38e9e10de02cb4cf26499dcc97'
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'

const GetWeatherData = (city, latitude, longitude) => {

    const [weatherData, setWeatherdata] = useState({})

    useEffect(() => {
        (async function () {
            if (latitude && longitude) {
                const response = await axios.get(`${baseUrl}lat=${latitude}&lon=${longitude}&APPID=${apiKey}`)
                console.log(response.data)
                setWeatherdata(response.data)
            }
        })()
    }, [city, latitude, longitude])

    return weatherData
}

export default GetWeatherData