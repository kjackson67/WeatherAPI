import React from "react";
import ForecastDetail from "../ForecastDetail/ForecastDetail";

const WeatherInfo = (props) => {
  return (
    <div>
      <div>Weather Info</div>
      <ForecastDetail
        ipForecast={props.ipForecast}
        getForecastByIp={props.getForecastByIp}
      />
      
    </div>
  );
};

export default WeatherInfo;
