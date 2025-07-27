
const city_input = document.getElementById('city-input');
const submit_button = document.getElementById('submit');
const weather_display = document.getElementById('weather-display');
const city_name = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const conditions = document.getElementById('conditions');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');

async function getWeather() {
  const city_coords = 'http://api.openweathermap.org/geo/1.0/direct?q=${city_input}&limit=1&appid=b9cc3850d3b46d3f8e234aad51965a91'
  const weather_URL =  'https://api.openweathermap.org/data/3.0/onecall?lat=${city_coords.lat}&lon=${city_coords.lon}&exclude=minutely,hourly,daily,alerts&units=imperial&appid={32934f0db87fa09bf77e3cbd6258432b}'
  const weather_request = await fetch(weather_URL)

  const data = await weather_request.json()
  const current_data = data.current

  return {

      weather_info : {
        city_name: city_input,
        temperature: current_data.temp,
        conditions: current_data.weather.description,
        humidity: current_data.humidity
      }



  }

  return

}