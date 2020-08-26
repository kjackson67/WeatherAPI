import React, { Component } from "react";
import "./ForecastDetail.css";

class ForecastDetail extends Component {
  render() {
    const forecastDetails = this.props.ipForecast.map((item, index) => {
      let today = item.valid_date;
      const getDayName = (today) => {
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let day = new Date(today).getUTCDay();
        return days[day];
      };
      const formatDate = (today) => {
        let date = new Date(today).getUTCDate();
        let month = new Date(today).getMonth() + 1;
        let datevalue = ` ${month}/${date}`;
        return datevalue;
      };
      return (
        <div className="forecastWrapper" key={index}>
          <div className="dailyForecastContainer">
            <div className="date">
              <div>{getDayName(today) + formatDate(today)}</div>
            </div>
            <span className="tempRange">
              <span style={{ color: "red" }}>{Math.round(item.max_temp)}</span>
              <span> | </span>
              <span style={{ color: "blue" }}>{Math.round(item.min_temp)}</span>
              <span> °F</span>
            </span>
            <div className="conditionsIcon">
              <img
                className="icon"
                src={`./icons/${item.weather.icon}.png`}
                alt="icon"
              />
              <div className="skyConditions">{item.weather.description}</div>
            </div>
            <div className="fcompass">
              <div className="direction">
                <p>
                  <span className="degrees">{item.wind_dir}°</span>
                  <span className="cdir">{item.wind_cdir}</span>
                  <span className="speed">{item.wind_spd} mph</span>
                </p>
              </div>
              <div
                className={`arrow ${this.props.windDir(item.wind_cdir)}`}
              ></div>
            </div>
            <div className="pop">
              <div>
                {item.pop > 0 ? (
                  <img
                    className="popicon"
                    src={`./icons/tear.png`}
                    alt="rain"
                  />
                ) : (
                  <img className="popicon" src={`./icons/blur.png`} alt="dry" />
                )}
              </div>
              <div>{item.precip.toFixed(2)}"</div>
            </div>
            <div> {(item.pres / 33.864).toFixed(2)} in</div>
          </div>
        </div>
      );
    });
    return <div className="forecastContainer">{forecastDetails}</div>;
  }
}

export default ForecastDetail;
