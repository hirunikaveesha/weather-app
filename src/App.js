import React from 'react';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WeatherApp from './WeatherApp';
import WeatherDetails from './components/WeatherDetails';
import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
  return (
    <div>
      <h1>Weather Application</h1>
      <Login />
    </div>
  );

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={WeatherApp} />
        <Route path="/weather-details" component={WeatherDetails} />
      </Switch>
    </Router>
  );
};



export default App;
