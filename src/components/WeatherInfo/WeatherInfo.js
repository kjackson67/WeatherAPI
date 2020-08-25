import React from "react";
import "./WeatherInfo.css";
import ForecastDetail from "../ForecastDetail/ForecastDetail";

function WeatherInfo(props) {
  // const weatherUpdate = props.ipWeather.map((item, index) => {
  return (
    <div className="currentConditionsWrapper">
      <div className="currentConditionsContainer">
        <h1 className="currentConditions">Current Conditions</h1>
        <div>
          {props.ipWeather.map((item, index) => {
            return (
<<<<<<< HEAD
              <div key={index}>
                <button className="button" onClick={() => props.history.goBack()}>Home</button>
                <h2 className="currentconditionsLocation">
                  {item.city_name}, {item.state_code}
=======
             <div key={index}>
               <button onClick={() => props.history.goBack()}>Home</button> 
               <h2 className="currentconditionsLocation">
                  {item.city_name}, {item.state_code} 
>>>>>>> 6fa0cb15c027eaad20e5cb5b7f49ff4333850f84
                </h2>
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
                    <img
                      className="conditionsIcon"
                      src={`./icons/${item.weather.icon}.png`}
                      alt="icon"
                    />
                    <div>{item.weather.description}</div>
                    <div className="windConditionsWrapper">
                      <div>Wind Speed: {Math.round(item.wind_spd)} mph </div>
                      <div>Wind Direction: {item.wind_cdir} </div>
                      <div>Wind Direction: {item.wind_dir}° </div>
                    </div>
                    <div className="additionalConditionsContainer">
                      <div className="additionalConditionsWrapper">
                        <div>
                          Pressure: {(item.pres / 33.864).toFixed(2)} in
                        </div>
                        <div>Visibility: {item.vis} miles</div>
                        <div>Clouds: {item.clouds} %</div>
                        <div>Dew Point: {item.dewpt} °F</div>
                        <div>Humidity: {item.rh} %</div>
                        <div>Rainfall: {item.precip.toFixed(2)} %</div>
                        <div>Snow Depth: {item.snow} inches</div>
                      </div>
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
  // return <div className="weatherContainer">{weatherUpdate}</div>
}

export default WeatherInfo;
