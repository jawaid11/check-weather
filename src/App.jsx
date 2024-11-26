import React, { useState } from 'react';
import Header from './components/Header';
import MainTemperature from './components/MainTemperature';
import WeatherDetails from './components/WeatherDetails';
import './components/App.css';

const App = () => {
  const [weather, setWeather] = useState(null);
  const handleWeatherUpdate = (data) => {
    setWeather(data);
  };
  // function for milliseconds into time
  const convertToTime = (timestamp) => {
    const date = new Date(timestamp * 1000); 
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${minutes} ${ampm}`;
  };

  return (
    <div className="app-container">
      <Header onWeatherUpdate={handleWeatherUpdate} />
      {weather ? (
        <>
          <MainTemperature
            cityName={weather.name}
            temperature={weather.main.temp}
            minTemperature={weather.main.temp_min}
            maxTemperature={weather.main.temp_max}
            weatherIcon={weather.weather[0]?.main}
          />
          <WeatherDetails
            sunrise={convertToTime(weather.sys.sunrise)}
            sunset={convertToTime(weather.sys.sunset)}
            wind={weather.wind.speed}
            pressure={weather.main.pressure}
            visibility={weather.visibility}
            rainChance={weather.rain ? `${weather.rain['1h'] || 0}%` : '0%'}
          />
        </>
      ) : (
        <p className="no-data">Search for a city to display weather details!</p>
      )}
    </div>
  );
};

export default App;
