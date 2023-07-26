import React from 'react';

const WeatherDetails = ({ forecastData }) => {
  return (
    <div>
      <h2 className="text-center">Weather Details for the Week</h2>
      {forecastData && (
        <ul className="list-group">
          {forecastData.map((forecast) => (
            <li className="list-group-item" key={forecast.dt}>
              {forecast.main.temp}°C
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WeatherDetails;
