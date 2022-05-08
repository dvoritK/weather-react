import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="city">{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />{" "}
          <span className="current-date"></span>
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix"></div>
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="icon"
          />

          <span className="current-temperature">{props.data.temperature}</span>
          <span className="celsius">°C</span>
        </div>

        <div className="col-6">
          <ul>
            <li>
              Humidity: <span className="humidity">{props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span className="wind">{props.data.wind}</span> km/h
            </li>
          </ul>
        </div>
      </div>
      <div className="weather-forecast"></div>
    </div>
  );
}
