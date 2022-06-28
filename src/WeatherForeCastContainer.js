import React, {useState, useEffect} from 'react'
import CurrentSelectedDate from './CurrentSelectedDate'
import {Box} from '@mui/material';
import FiveDaysContainer from './FiveDaysContainer';

export default function WeatherForecastContainer({currentLocation}){

    const [currentWeatherData, setCurrentWeatherData] = useState({})

    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${currentLocation.lat}&lon=${currentLocation.lng}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
        .then(res => res.json())
        .then(data => setCurrentWeatherData(data))
        .catch((err)=>{console.log('error',err)})
    },[currentLocation])
    return(
        <Box
            sx={{
                height: 800
            }}
        >
            {
            currentWeatherData.current && 
                <CurrentSelectedDate weatherInfo= {currentWeatherData.current} name={currentLocation.name}/>
            }
            <Box
            >
                {currentWeatherData.daily && <FiveDaysContainer fiveDayArray={currentWeatherData.daily.slice(1, 6)}/>}
            </Box>
        </Box>
    )
}