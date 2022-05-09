import React, { useState } from "react";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function displayForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col-6">
            <ForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "bea4f3a13d9c626697f2497a1cfb384d";
    let latitude = props.coord.lat;
    let longitude = props.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);
    return null;
  }
}
