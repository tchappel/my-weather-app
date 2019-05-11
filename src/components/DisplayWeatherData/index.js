import React from 'react'
import { Spin, Icon } from 'antd';
import GetWeatherData from "../GetWeatherData"

function kelvinToCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
}

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />

const DisplayWeatherData = ({city, country, latitude, longitude}) => {

    const weatherData = GetWeatherData(city, latitude, longitude)
    const hasLoaded = Object.keys(weatherData).length > 0

    return (
        <>
            {!hasLoaded && <Spin indicator={antIcon}/>}
            {hasLoaded &&
            <div>
                <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt=""/>
                <ul>
                    <li>Weather: {weatherData.weather[0].main}</li>

                    <li>Temperature: {kelvinToCelsius(weatherData.main.temp)} C</li>
                </ul>
            </div>
            }
        </>
    )
}

export default DisplayWeatherData