import React from "react";
import "./ForecastDetail.css";
function ForecastDetail(props) {
  const forecastDetails = props.ipForecast.map((item, index) => {
    return (
      <div className="forecastWrapper">
        <div className="dailyForecastContainer">
          <div className="date">
            <div>{item.valid_date}</div>
          </div>
          <div className="tempRange">
            {item.min_temp} °F / {item.max_temp} °F
          </div>
          <div className="conditionsIcon">
            <img
              className="icon"
              src={`./icons/${item.weather.icon}.png`}
              alt="icon"
            />
            <div className="skyConditions">{item.weather.description}</div>
          </div>
          <div className="windInformation">
            <div>Wind Speed: {item.wind_spd} mph </div>
            <div>Wind Direction: {item.wind_cdir} </div>
            <div>Wind Direction: {item.wind_dir}° </div>
          </div>
          <div>Probablity of Precipitation: {item.pop}%</div>
        </div>
      </div>
    );
  });
  return <div className="forecastContainer">{forecastDetails}</div>;
}

export default ForecastDetail;
