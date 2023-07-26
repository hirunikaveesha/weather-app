import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

const WeatherForecast = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [forecastData, setForecastData] = useState(null);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=YOUR_API_KEY`
      );
      setForecastData(response.data.list);
    } catch (error) {
      console.error('Error fetching forecast data:', error);
    }
  };

  const handleViewMore = () => {
    history.push('/weather-details');
  };

  return (
    <div className="container">
      <h2>Weather Forecast</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="latitude" className="form-label">Latitude:</label>
          <input
            type="text"
            id="latitude"
            value={latitude}
            onChange={(event) => setLatitude(event.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="longitude" className="form-label">Longitude:</label>
          <input
            type="text"
            id="longitude"
            value={longitude}
            onChange={(event) => setLongitude(event.target.value)}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Get Forecast</button>
      </form>

      {forecastData && (
        <div className="mt-4">
          <h3>Next 3 Days Forecast</h3>
          <ul className="list-group">
            {forecastData.slice(0, 3).map((forecast) => (
              <li key={forecast.dt} className="list-group-item">
                {forecast.main.temp}°C
              </li>
            ))}
          </ul>

          <button onClick={() => setForecastData(null)} className="btn btn-secondary mt-3">Clear Forecast</button>
          <button onClick={handleViewMore} className="btn btn-primary mt-3 ms-3">View More</button>
        </div>
      )}
    </div>
  );
};

export default WeatherForecast;
