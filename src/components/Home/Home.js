import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Button from "react-bootstrap/Button";

class Home extends Component {
  render() {
    const currentConditions = this.props.ipWeather.map((item, index) => {
      return (
        <div className="homecurrentConditionsContainer">
          <h1 className="homecurrentConditions">Current Conditions</h1>
          <div>
            <div>
              <div key={index}>
                <h2 className="homecurrentconditionsLocation">
                  {item.city_name}, {item.state_code}
                </h2>
                <div className="homeconditionsDetailsWrapper">
                  <div className="homeconditionsIconContainer">
                    <img
                      className="homeconditionsIcon"
                      src={`./icons/${item.weather.icon}.png`}
                      alt="icon"
                    />
                    <div className="homeconditionsText">
                      {item.weather.description}
                    </div>
                  </div>
                  <div className="hometempContainer">
                    <div className="homecurrentTempWrapper">
                      <div
                        className={`${this.props.tempColor(
                          item.temp
                        )} homecurrentTemp`}
                      >
                        {Math.round(item.temp)}
                      </div>
                      <div
                        className={`homecurrentTempUnits ${this.props.tempColor(
                          item.temp
                        )}`}
                      >
                        °F
                      </div>
                    </div>
                    <div className="homefeelsLike">
                      <span>Feels Like</span> {Math.round(item.app_temp)}
                    </div>
                  </div>
                  <div className="homewindConditionsWrapper">
                    <div className="compass">
                      <div className="direction">
                        <p>
                          <span className="degrees">{item.wind_dir}°</span>
                          <span className="cdir">{item.wind_cdir}</span>
                          <span className="speed">{item.wind_spd} mph</span>
                        </p>
                      </div>
                      <div
                        className={`arrow ${this.props.windDir(
                          item.wind_cdir
                        )}`}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="homefooterBuffer"></div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        {currentConditions}
        <Button
          onClick={() => {
            this.props.history.push("/weatherinfo");
          }}
          className="button"
          size="lg"
          variant="primary"
        >
          Weather Details
          {/* <Link to="/weatherinfo">Weather Details</Link> */}
        </Button>
      </div>
    );
  }
}

export default Home;
