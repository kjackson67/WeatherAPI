import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Button from "react-bootstrap/Button";

let tempColor = "hot";

const Home = (props) => {
  return (
    <div className="currentConditionsContainer">
      <h1 className="currentConditions">Current Conditions</h1>
      <div>
        <div>
          {props.ipWeather.map((item, index) => {
            {
              if (item.temp > 90) {
                tempColor = "t90plus";
              } else if (item.temp <= 90) {
                tempColor = "t8090";
              } else if (item.temp <= 80) {
                tempColor = "t7080";
              } else if (item.temp <= 70) {
                tempColor = "t6070";
              } else if (item.temp <= 60) {
                tempColor = "t5060";
              } else if (item.temp <= 50) {
                tempColor = "t4050";
              } else if (item.temp <= 40) {
                tempColor = "t3040";
              }
            }
            return (
              <div key={index}>
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
                      <div className={`${tempColor} currentTemp`}>
                        {Math.round(item.temp)}
                      </div>
                      <div className={`currentTempUnits ${tempColor}`}> °F</div>
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
