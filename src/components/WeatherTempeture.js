import React from 'react';
import WeatherIcons from 'react-weathericons';

const icons = {
    sunny: "day-sunny",
    fog: "day-fog",
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];

    if(icon)
        return <WeatherIcons name={icon} size="2x"/>
    else
        return <WeatherIcons name = {"day-sunny"} size="2x" />

};
const WeatherTempeture = ( { tempeture, weatherState} ) => (

    <div>
       {
           getWeatherIcon(weatherState)
       }
        <span>{`${tempeture} C°` }</span>

    </div>

);

export default WeatherTempeture;