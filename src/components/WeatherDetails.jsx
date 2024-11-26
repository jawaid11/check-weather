import React from 'react';

const WeatherDetails = ({
  sunrise,
  sunset,
  wind,
  pressure,
  visibility,
  rainChance,
}) => {
  const details = [
    { label: 'Sunrise', value: sunrise },
    { label: 'Sunset', value: sunset },
    { label: 'Chance of rain', value: rainChance || 'N/A' },
    { label: 'Pressure', value: `${pressure} mb` },
    { label: 'Wind', value: `${wind} km/h` },
    { label: 'Visibility', value: `${visibility / 1000} km` }, // Visibility is usually in meters
  ];

  return (
    <div className="weather-details">
      {details.map((detail, index) => (
        <div key={index} className="weather-detail">
          <p className="detail-label">{detail.label}</p>
          <p className="detail-value">{detail.value}</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherDetails;
