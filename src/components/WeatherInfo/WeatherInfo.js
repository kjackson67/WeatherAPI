import React from "react";
import "./WeatherInfo.css";
import ForecastDetail from "../ForecastDetail/ForecastDetail";


const WeatherInfo = (props) => {
  return (
    <div>
    <div>Weather Details</div> 
    <br></br>
    <button onClick={() => props.history.goBack()}>Home</button>
      <h1 className="currentConditions">Current Conditions</h1>
      <div>
        Latitude: {props.lat}
        Longitude: {props.lon}
        <div>""
          {props.ipWeather.map((item, index) => {
            return (
              <div key={index} >
                <h2 className="currentconditionsLocation">
                  {item.city_name}, {item.state_code} 
                </h2>
                <div className="conditionsDetailsWrapper">
                  <div className="conditionsIconContainer">
                    <img
                      className="conditionsIcon"
                      src={`./icons/${item.weather.icon}.png`}
                      alt="icon"
                    />
                    <div>{item.weather.description}</div>
                    <br></br>
                  </div>
                  <div className="tempContainer">
                    <div className="currentTempWrapper">
                      <div className="currentTemp">{Math.round(item.temp)}</div>
                      <div className="currentTempUnits"> °F</div>
                    </div>
                    <div className="feelsLike">
                      <span>Feels Like</span> {Math.round(item.app_temp)}
                    </div>
                  </div>
                  <div className="windConditionsWrapper">
                    <div>Wind Speed: {Math.round(item.wind_spd)} mph </div>
                    <div>Wind Direction: {item.wind_cdir} </div>
                    <div>Wind Direction: {item.wind_dir}° </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ForecastDetail
        ipForecast={props.ipForecast}
        getForecastByIp={props.getForecastByIp}
      />
      </div>
  );
};

export default WeatherInfo;
