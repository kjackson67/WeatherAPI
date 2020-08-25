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
        if (temp > 90) tempRange = "t90plus";
        else if (temp >= 80) tempRange = "t8090";
        else if (temp >= 70) tempRange = "t7080";
        else if (temp >= 60) tempRange = "t6070";
        else if (temp >= 50) tempRange = "t5060";
        else if (temp >= 40) tempRange = "t4050";
        else if (temp >= 30) tempRange = "t3040";
        return tempRange;
      };
      let dir = item.wind_cdir;
      const windDir = (dir) => {
        console.log(dir);
        let direction = "";
        switch (dir) {
          case "NNE":
            direction = "nne";
            break;
          case "NE":
            direction = "ne";
            break;
          case "ENE":
            direction = "ene";
            break;
          case "E":
            direction = "e";
            break;
          case "ESE":
            direction = "ese";
            break;
          case "SE":
            direction = "se";
            break;
          case "SSE":
            direction = "sse";
            break;
          case "S":
            direction = "s";
            break;
          case "SSW":
            direction = "ssw";
            break;
          case "SW":
            direction = "sw";
            break;
          case "WSW":
            direction = "wsw";
            break;
          case "W":
            direction = "w";
            break;
          case "WNW":
            direction = "wnw";
            break;
          case "NW":
            direction = "nw";
            break;
          case "NNW":
            direction = "nnw";
            break;
          case "N":
            direction = "n";
            break;
        }
        return direction;
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
                    <div className="compass">
                      <div className="direction">
                        <p>
                          <span className="degrees">{item.wind_dir}°</span>
                          <span className="cdir">{item.wind_cdir}</span>
                          <span className="speed">{item.wind_spd} mph</span>
                        </p>
                      </div>
                      <div className={`arrow ${windDir(dir)}`}></div>
                    </div>
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
