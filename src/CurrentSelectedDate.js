import {WiHumidity,WiStrongWind} from "weather-icons-react"
import {Box, Container} from '@mui/material';
import iconSelector from "./IconSelectorHelper";

export default function CurrentSelectedDate({weatherInfo, name}){

    const {temp, weather, humidity, wind_speed} = weatherInfo

    return(
        <Container
            maxWidth='sm'
            sx={{
                borderBottom: '1px solid'
            }}
        >
            <Box
                maxWidth="sm"
                display='flex'
                justifyContent="center"
                alignItems='center'
                flexDirection="column"
                sx={{
                    fontFamily: 'Monospace',
                    fontSize: 'h6.fontSize'
                }}
            >
                {name}
                <div>
                    {iconSelector(weather[0].main,250)}
                </div>
                <div>
                    {weather[0].description.toUpperCase()}
                </div>
                <Box
                    paddingTop='25px'
                    paddingBottom='25px'
                    sx={{
                        fontWeight: 'bold',
                        fontSize: 'h4.fontSize'
                    }}
                >
                    {Math.floor(temp).toString()}°F
                </Box>

                <Container
                    display='flex'
                    justifyContent="center"
                    alignItems='center'
                    flexDirection="row"
                >
                    <Box
                        display='flex'
                        justifyContent="space-between"
                        alignItems='center'
                        flexDirection="row"
                    >
                        <Box
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            flexDirection='row'
                        >
                            <WiHumidity size={30} color='#000' />
                            <div>{humidity}%</div>
                        </Box>
                        <Box
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            flexDirection='row'
                        >
                            <WiStrongWind size={30} color='#000' />
                            <div>{Math.floor(wind_speed).toString()} m/s</div>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Monospace',
                    fontSize: 'h6.fontSize'
                }}
            >Next 5 Days</Box>
        </Container>
        
    )
}