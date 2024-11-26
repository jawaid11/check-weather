const getWeatherIcon = (condition) => {
  switch (condition.toLowerCase()) {
    case 'smoke':
      return '🌫️'; // Smoke
    case 'haze':
      return '🌁'; // Haze
    case 'sunny':
      return '☀️'; // Sunny
    case 'rain':
      return '🌧️'; // Rain
    case 'clouds':
      return '☁️'; // Clouds
    default:
      return '❓'; // Default (Unknown Condition)
  }
};

const MainTemperature = ({
  cityName,
  temperature,
  minTemperature,
  maxTemperature,
  weatherIcon,
}) => {
  return (
    <div className="main-temperature">
      <h2 className="city-name">{cityName}</h2>
      <div className="temperature-info">
        <div className="temperature-icon">
          <h1 className="temperature">{temperature}°</h1>
          <span className="weather-icon">{getWeatherIcon(weatherIcon)}</span>
        </div>
        <div className="min-max-temperature">
          <span>Min: {minTemperature}°</span> |{' '}
          <span>Max: {maxTemperature}°</span>
        </div>
      </div>
    </div>
  );
};

export default MainTemperature;
