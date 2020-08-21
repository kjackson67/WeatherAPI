import React from "react";
import "./App.css";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import ForecastDetail from "../ForecastDetail/ForecastDetail";
import Nav from "../Nav/Nav";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <WeatherInfo />
        <ForecastDetail />
      </header>
    </div>
  );
}

export default App;
