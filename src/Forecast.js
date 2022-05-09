import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-6">
          <div className="weather-forecast-date">Tue</div>
          <div className="forecastIcon">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="weatherIcon"
            />{" "}
          </div>
          <span className="forecastMaxTemp">25</span>
          <span className="forecastMinTemp">17</span>
        </div>
      </div>
    </div>
  );
}
