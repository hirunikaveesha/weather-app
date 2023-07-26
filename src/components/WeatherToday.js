import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

const WeatherToday = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Fetch weather data for Colombo
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather?q=Colombo&appid=45ec2b6b61a4b2131913056b0bb331db'
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="container">
      <h2>Today's Weather</h2>
      {weatherData ? (
        <div>
          <p className="mb-0">City: {weatherData.name}</p>
          <p className="mb-0">Temperature: {weatherData.main.temp}°C</p>
          <p className="mb-0">Description: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherToday;
