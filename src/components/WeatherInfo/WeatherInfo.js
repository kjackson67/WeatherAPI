import React from "react";
import "./WeatherInfo.css";
import ForecastDetail from "../ForecastDetail/ForecastDetail";

function WeatherInfo(props) {
const weatherUpdate = props.ipWeather.map((item, index) => {
  return (
    <div className="currentConditionsContainer">
      <h1 className="currentConditions">Current Conditions</h1>
      <div>
        Latitude: {props.lat}
        Longitude: {props.lon}
        <div>
          {props.ipWeather.map((item, index) => {
           return (
             <div key={index} >
               <h2 className="currentconditionsLocation">
                  {item.city_name}, {item.state_code} 
                </h2>
            <div className="currentForecastWrapper">
            <div className="currentForecastContainer">
              <img className="conditionsIcon" src={`./icons/${item.weather.icon}.png`}
                alt="icon" />
                <div>{item.weather.description}</div>
                </div>
              <div className="tempContainer">
                <div className="currentTempWrapper">
                  <div className="curentTemp">{Math.round(item.temp)}</div>
                  <div className="currentTempUnits"> °F</div>
                </div>
                  <div className="feelsLike">
                    <span>Feels Like</span> {Math.round(item.app_temp)}
                  </div>
                </div>
                <div className="conditionsDataWrapper">
                  <div className="conditionsDataContainer">
                    <img className="conditionsIcon" src={`./icons/${item.weather.icon}.png`}
                      alt="icon"
                    />
                    <div>{item.weather.description}</div>
                    <div className="windConditionsWrapper">
                    <div>Wind Speed: {Math.round(item.wind_spd)} mph </div>
                    <div>Wind Direction: {item.wind_cdir} </div>
                    <div>Wind Direction: {item.wind_dir}° </div>
                  </div>
                </div>
              </div>
              </div>
              </div>
              );
           })};
            </div>
          </div>
      <ForecastDetail
        ipForecast={props.ipForecast}
        getForecastByIp={props.getForecastByIp}
      />
      <div>
      </div>
     </div>
  );
});
return <div className="weatherContainer">{weatherUpdate}</div>
}

export default WeatherInfo;