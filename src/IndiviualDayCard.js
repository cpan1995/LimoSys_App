import iconSelector from "./IconSelectorHelper"
import {Box} from '@mui/material';

const convertUnixDt = (dt)=> {
    let newDate = new Date(dt*1000)
    return newDate.toDateString().substring(0,3)
}

export default function IndiviualDayCard({dt, temp, weather}){

    let currentDate = convertUnixDt(dt)
    
    return(
        <Box
            display='flex'
            flexDirection='column'
            paddingLeft='25px'
            paddingRight='25px'
            alignItems='center'
            sx={{
                fontFamily: 'Monospace',
                fontSize: 'h6.fontSize'
            }}
        >
            <>{currentDate}</>
            <>{iconSelector(weather.main, 75)}</>
            <>{Math.floor(temp)}°F</>
        </Box>
    )
}