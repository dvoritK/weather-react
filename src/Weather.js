import React, { useState } from "react";
import SearchEngine from "./SearchEngine";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  let [weatherData, setWeatherData] = useState({ ready: false });
  function displayWeather(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Tuesday, 12:00",
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <SearchEngine />
        <h1 className="city">{weatherData.city}</h1>
        <ul>
          <li>
            Last updated at: {weatherData.date}{" "}
            <span className="current-date"></span>
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix"></div>
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="icon"
            />

            <span className="current-temperature">
              {weatherData.temperature}
            </span>
            <span className="celsius">°C</span>
          </div>

          <div className="col-6">
            <ul>
              <li>
                Humidity:{" "}
                <span className="humidity">{weatherData.humidity}</span>%
              </li>
              <li>
                Wind: <span className="wind">{weatherData.wind}</span> km/h
              </li>
            </ul>
          </div>
        </div>
        <div className="weather-forecast"></div>
      </div>
    );
  } else {
    let unit = "metric";
    let apiKey = "bea4f3a13d9c626697f2497a1cfb384d";
    let city = "Tel Aviv";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(displayWeather);
    return "Loading";
  }
}
