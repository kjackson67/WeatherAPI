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
              <div key={index}>
                <button
                  className="homebutton"
                  onClick={() => props.history.goBack()}
                >
                  Home
                </button>
                <h2 className="currentconditionsLocation">
                  {item.city_name}, {item.state_code}
                </h2>
                <div className="conditionUpdate">
                  <div className="tempContainer">
                    <div className="currentTempWrapper">
                      <div
                        className={`${props.tempColor(item.temp)} currentTemp`}
                      >
                        {Math.round(item.temp)}
                        <div
                          className={`${props.tempColor(
                            item.temp
                          )} currentTempUnits`}
                        >
                          {" "}
                          °F
                        </div>
                      </div>

                      <div className="feelsLike">
                        <span>Feels Like</span> {Math.round(item.app_temp)}
                      </div>
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
                    
                  </div>
                  {/* <div className="windConditionsWrapper"> */}
                    <div className="compass">
                      <div className="direction">
                        <p>
                          <span className="degrees">{item.wind_dir}°</span>
                          <span className="cdir">{item.wind_cdir}</span>
                          <span className="speed">{item.wind_spd} mph</span>
                        </p>
                      </div>
                    </div>
                      <div
                        className={`arrow ${props.windDir(item.wind_cdir)}`}
                    ></div>
                  </div>
                  {/* </div> */}
                  <div className="additionalConditionsContainer">
                    <div className="additionalConditionsWrapper">
                      <div>Pressure: {(item.slp / 33.864).toFixed(2)} in</div>
                      <div>Visibility: {item.vis} miles</div>
                      <div>Clouds: {item.clouds} %</div>
                      <div>Dew Point: {item.dewpt} °F</div>
                      <div>Humidity: {item.rh} %</div>
                      <div>Rainfall: {item.precip.toFixed(2)} %</div>
                      <div>Snow Depth: {item.snow} inches</div>
                    </div>
                  </div>
                  <div className="Astronomy">
                    <div>Sun Rise: {item.sunrise} </div>
                    <div>Sun Set: {item.sunset} </div>
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
        windDir={props.windDir}
      />
    </div>
  );
  // return <div className="weatherContainer">{weatherUpdate}</div>
}

export default WeatherInfo;
