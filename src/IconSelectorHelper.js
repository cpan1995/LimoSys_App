import {WiDayCloudyHigh,WiRainWind, WiThunderstorm, WiSnowWind,WiDaySunny, WiFog} from "weather-icons-react"

const iconSelector = (currentMainWeather,size) => {
    switch(currentMainWeather) {
        case 'Rain':
            return <WiRainWind size={size} color='#000' />;
            break;
        case 'Snow':
            return <WiSnowWind size={size} color='#000'/>;
            break;
        case 'Drizzle':
            return <WiRainWind size={size} color='#000' />;
            break;
        case 'Clear':
            return <WiDaySunny size={size} color='#000' />;
            break;
        case 'Thunderstorm':
            return <WiThunderstorm size={size} color='#000' />;
            break;
        case 'Clouds':
            return <WiDayCloudyHigh size={size} color='#000' />;
            break;
        default:
            return <WiFog size={size} color='#000' />;
            break;
    }
}

export default iconSelector
