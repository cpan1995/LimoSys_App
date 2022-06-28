import React from 'react'
import {Box} from '@mui/material';
import IndiviualDayCard from './IndiviualDayCard';
import { v4 as uuidv4 } from 'uuid';

export default function FiveDaysContainer({fiveDayArray}){

    const fiveDayCards = fiveDayArray.map(eachDay => {
        return <IndiviualDayCard key={uuidv4()} dt={eachDay.dt} temp = {eachDay.temp.day} weather={eachDay.weather[0]}/>
    })
    
    return(
        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
        >
            {fiveDayCards}
        </Box>
    )
}