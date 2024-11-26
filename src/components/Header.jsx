import React, { useState } from 'react';

const Header = ({ onWeatherUpdate }) => {
  const [search, setSearch] = useState('');

  const getWeatherData = () => {
    if (search.trim() !== '') {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=547c3ae371f8344197aafe80f1bb3fdd&units=metric`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.cod === 200) {
            onWeatherUpdate(data);
          } else {
            alert('City not found. Please try again!');
          }
        })
        .catch((error) => {
          console.error(error);
          alert('An error occurred while fetching data!');
        });
    } else {
      alert('Please enter a city name!');
    }
  };

  const changeInputHandler = (e) => {
    const value = e.target.value;
    setSearch(value);

    // If the input is cleared, reset weather data
    if (value.trim() === '') {
      onWeatherUpdate(null);
    }
  };

  return (
    <div className="header">
      <h1 className="title">Check Weather</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for cities"
          value={search}
          onChange={changeInputHandler}
        />
        <button onClick={getWeatherData}>🔍</button>
      </div>
    </div>
  );
};

export default Header;
