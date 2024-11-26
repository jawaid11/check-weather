Just Weather

Just Weather is a simple weather application built using React. It allows users to search for a city's current weather details, including temperature, sunrise, sunset, wind speed, pressure, visibility, and the chance of rain.

Features
Search Weather: Enter the city name to fetch the current weather details.
Dynamic Weather Icons: Displays relevant icons based on weather conditions (e.g., smoke, haze, sunny, rain).
Sunrise & Sunset Time: Converts and formats timestamps into readable 12-hour AM/PM format.
Responsive Design: Optimized for all screen sizes.
Reset UI: Automatically clears the weather details when the input is cleared.
Tech Stack
Frontend: React
Styling: CSS
Weather API: OpenWeatherMap API
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-repo-name/just-weather.git
cd just-weather
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
API Key Setup
This project uses the OpenWeatherMap API. To use the app, follow these steps:

Get a free API key from OpenWeatherMap.
Replace the API key in the Header component:
javascript
Copy code
const apiKey = "your-api-key-here";
Usage
Open the app in your browser (usually at http://localhost:3000).
Enter a city name in the search bar and click the search button.
View the weather details, including:
Temperature
Minimum and maximum temperature
Weather condition with relevant icons
Sunrise and sunset time
Wind speed, pressure, visibility, and chance of rain.
To reset the UI, clear the input field.

Key Functions
convertToTime
Converts a timestamp (in seconds) into a readable 12-hour time format.
javascript
Copy code
const convertToTime = (timestamp) => {
  const date = new Date(timestamp * 1000); 
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;
  return `${formattedHours}:${minutes} ${ampm}`;
};
getWeatherIcon
Maps weather conditions to appropriate emojis/icons.

javascript
Copy code
const getWeatherIcon = (condition) => {
  switch (condition.toLowerCase()) {
    case 'smoke':
      return '🌫️'; 
    case 'haze':
      return '🌁'; 
    case 'sunny':
      return '☀️'; 
    case 'rain':
      return '🌧️'; 
    default:
      return '❓';
  }
};
Future Enhancements
Add hourly and weekly forecasts.
Implement a loading spinner while fetching data.
Enhance the UI/UX using CSS animations and transitions.
Support location-based weather using geolocation.
