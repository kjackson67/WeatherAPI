import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Button from "react-bootstrap/Button";

const Home = (props) => {
  return (
    <div className="currentConditionsContainer">
      <h1 className="currentConditions">Current Conditions</h1>
      <div>
        {/* Latitude: {props.lat}
        Longitude: {props.lon} */}
        <div>
          {props.ipWeather.map((item, index) => {
            return (
              <div>
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
                  </div>
                  <div className="tempContainer">
                    <div className="currentTempWrapper">
                      <div className="currentTemp">{item.temp}</div>
                      <div className="currentTempUnits"> °F</div>
                    </div>
                    <div className="feelsLike">
                      <span>Feels Like</span> {item.app_temp}
                    </div>
                  </div>
                  <div className="windConditionsWrapper">
                    <div>Wind Speed: {item.wind_spd} mph </div>
                    <div>Wind Direction: {item.wind_cdir} </div>
                    <div>Wind Direction: {item.wind_dir}° </div>
                  </div>
                </div>
                <div className="footerBuffer"></div>
              </div>
            );
          })}
        </div>
      </div>
      <Button className="button" size="lg" variant="primary">
        <Link to="/weatherinfo">Weather Details</Link>
      </Button>
    </div>
  );
};
export default Home;