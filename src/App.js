import './App.css';
import React, {useState, createContext} from 'react'
import Autocomplete from "react-google-autocomplete";
import { Input} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import Geocode from "react-geocode";
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import WeatherForecastContainer from './WeatherForeCastContainer';

const LocationContext = createContext()
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY)

function App() {
  const [currentLocation, setLocation] = useState({
    lat:40.7128,
    lng: -74.0060,
    name: 'New York City'
  })

  const handleClick=()=>{
    let currentInput = document.getElementById('currentLocation')
    Geocode.fromAddress(currentInput.value).then((res)=>{
      const {lat, lng } = res.results[0].geometry.location
      setLocation({
        lat: lat,
        lng: lng,
        name: currentInput.value
      })
    })
  }

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });
  
  return(
    <div>
       <ThemeProvider theme={darkTheme}>
        
        <AppBar position='static' sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Typography variant="h6" component="div">
            Simple Weather App
          </Typography>
          <div className='App'>
            <Input 
              id = 'currentLocation'
              fullWidth
              color="secondary"
              sx={{width: 400}}
              inputComponent={({ onfocus, onblur, ...props }) => (
                <Autocomplete
                  apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                  {...props}
                />
              )}
            />
            <IconButton color="primary" aria-label="upload picture" component="span">
                <SearchIcon onClick={handleClick}/>
            </IconButton>
          </div>
        </AppBar>
       </ThemeProvider>
      {
        currentLocation.lat && 
        <LocationContext.Provider value={currentLocation}>
          <WeatherForecastContainer currentLocation={currentLocation}/>
        </LocationContext.Provider>
      }
    </div>
    
  )}

export default App;
