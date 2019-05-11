import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchUserData} from "./store/userData/actions"
import DisplayWeatherData from './components/DisplayWeatherData'
import { Spin, Icon } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />

const App = ({userData, fetchUserData}) => {

    useEffect(() => {
        fetchUserData()
    }, [fetchUserData])

    const hasLoadedUserData = Object.keys(userData).length > 0

    return (
        <>
            <h1>My Weather App</h1>
            {!hasLoadedUserData && <Spin indicator={antIcon}/>}
            {hasLoadedUserData &&
            <>
                <h2>Weather data for your location</h2>
                <h3>{userData.city}, {userData.country_name}</h3>
                <DisplayWeatherData
                    city={userData.city}
                    country={userData.country_name}
                    latitude={userData.latitude}
                    longitude={userData.longitude}
                />
            </>
            }
        </>
    )
}

const mapStateToProps = ({userData}) => ({
    userData
})

const mapActionsToProps = {
    fetchUserData
}

export default connect(mapStateToProps, mapActionsToProps)(App)