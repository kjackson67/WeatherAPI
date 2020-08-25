import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Button from "react-bootstrap/Button";

let tempColor = "";

class Home extends Component {
  render() {
    const currentConditions = this.props.ipWeather.map((item, index) => {
      let temp = item.temp;
      console.log(temp);
      const tempColor = (temp) => {
        let tempRange;
        if (temp > 90) {
          tempRange = "t90plus";
          console.log(tempRange);
        } else if (temp >= 80) {
          tempRange = "t8090";
          console.log(tempRange);
        } else if (temp >= 70) {
          tempRange = "t7080";
          console.log(tempRange);
        } else if (temp >= 60) {
          tempRange = "t6070";
          console.log(tempRange);
        } else if (temp >= 50) {
          tempRange = "t5060";
          console.log(tempRange);
        } else if (temp >= 40) {
          tempRange = "t4050";
        } else if (temp >= 30) {
          tempRange = "t3040";
        }
        return tempRange;
      };
      return (
        <div className="currentConditionsContainer">
          <h1 className="currentConditions">Current Conditions</h1>
          <div>
            <div>
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
                      <div className={`${tempColor(temp)} currentTemp`}>
                        {Math.round(item.temp)}
                      </div>
                      <div className={`currentTempUnits ${tempColor(temp)}`}>
                        {" "}
                        °F
                      </div>
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
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        {currentConditions}
        <Button className="button" size="lg" variant="primary">
          <Link to="/weatherinfo">Weather Details</Link>
        </Button>
      </div>
    );
  }
}

export default Home;
