import React from "react";
import SearchEngine from "./SearchEngine";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <SearchEngine />
      <h1 className="city">Tel Aviv</h1>
      <ul>
        <li>
          Last updated at: Tuesday 12:00 <span className="current-date"></span>
        </li>
        <li className="weather-description">Partly clowdy</li>
      </ul>
      <div className="row">
        <div class="col-6">
          <div className="clearfix"></div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
            alt="sunny"
            className="icon"
          />

          <span className="current-temperature">30</span>
          <span className="celsius">°C</span>
        </div>

        <div class="col-6">
          <ul>
            <li>
              Humidity: <span className="humidity">15</span>%
            </li>
            <li>
              Wind: <span className="wind">15</span> km/h
            </li>
          </ul>
        </div>
      </div>
      <div className="weather-forecast"></div>
    </div>
  );
}
