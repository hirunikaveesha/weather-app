import React from 'react';
import WeatherToday from './components/WeatherToday';
import WeatherForecast from './components/WeatherForecast';

const WeatherApp = () => {
  return (
    <div>
      <h1>Weather Application</h1>
      <WeatherToday />
      <WeatherForecast />
    </div>
  );
};

export default WeatherApp;
