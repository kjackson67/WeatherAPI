import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import ForecastDetail from "../ForecastDetail/ForecastDetail";
import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import { Route, Switch, Link, Redirect } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      lat: "",
      lon: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
      ipWeather: [],
      ipForecast: [],
    };
  }
  componentDidMount = async () => {
    let position = await axios
      .get(`https://ipapi.co/json/`)
      .then((position) => {
        console.log(position.data);
        this.setState({
          lat: position.data.latitude,
          lon: position.data.longitude,
          city: position.data.city,
          state: position.data.region_code,
          country: position.data.country_code,
          zipCode: position.data.postal,
        });
        this.getWeatherByIP();
        this.getForecastByIp();
      });
  };
  // componentDidMount = async () => {
  //   let response = await navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       this.setState({
  //         lat: position.coords.latitude,
  //         lon: position.coords.longitude,
  //       });
  //       console.log(this.state.lat);
  //       console.log(this.state.lon);
  //       this.getWeatherByIP();
  //       this.getForecastByIp();
  //     }
  //   );
  // };

  getWeatherByIP = async (event) => {
    const response = await axios.get(
      `https://api.weatherbit.io/v2.0/current?key=367fe182e3524d8fa57fc76ede94121e&units=I&&city=${this.state.city}&state=${this.state.state}&country=${this.state.country}&postal_code=${this.state.zipCode}&lat=${this.state.lat}&lon=${this.state.lon}`
    );
    console.log(response);
    if (response.status !== 200) {
      alert(
        "There is an error. Please check your spelling or the format for input could also be city and country."
      );
    } else {
      this.setState({
        ipWeather: response.data.data,
      });
    }
  };

  getForecastByIp = async (event) => {
    const response = await axios.get(
      `https://api.weatherbit.io/v2.0/forecast/daily?key=367fe182e3524d8fa57fc76ede94121e&units=I&days=7&&city=${this.state.city}&state=${this.state.state}&country=${this.state.country}&postal_code=${this.state.zipCode}&lat=${this.state.lat}&lon=${this.state.lon}`
    );
    if (response.status !== 200) {
    } else {
      this.setState({
        ipForecast: response.data.data,
      });
    }
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state);
  };
  tempColor = (temp) => {
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
  windDir = (dir) => {
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
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <Nav
              handleChange={this.handleChange}
              forecastIP={this.getForecastByIp}
              weatherIP={this.getWeatherByIP}
              city={this.state.city}
              state={this.state.state}
              country={this.state.country}
            />
          </nav>
        </header>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={(routerProps) => (
                <Home
                  {...this.state}
                  {...routerProps}
                  tempColor={this.tempColor}
                  windDir={this.windDir}
                />
              )}
            />

            <Route
              path="/weatherinfo"
              render={(routerProps) => (
                <WeatherInfo
                  {...this.state}
                  {...routerProps}
                  tempColor={this.tempColor}
                  windDir={this.windDir}
                />
              )}
            />
            <ForecastDetail
              ipForecast={this.state.ipForecast}
              getForecastByIp={this.getForecastByIp}
              windDir={this.windDir}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
