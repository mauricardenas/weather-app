import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTempeture from './WeatherTempeture';

const WeatherData = () => (

    <div>
        <WeatherTempeture 
            tempeture={20} 
            weatherState={''}
        />
        <WeatherExtraInfo humidity={80} wind={"10 m/s"}/>
    </div>

);

export default WeatherData;