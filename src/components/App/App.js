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
      ipWeather: [],
      ipForecast: [],
    };
  }

  componentDidMount = async () => {
    let response = await navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        console.log(this.state.lat);
        console.log(this.state.lon);
        this.getWeatherByIP();
        this.getForecastByIp();
      }
    );
  };

  getWeatherByIP = async (event) => {
<<<<<<< HEAD
    // event.preventDefault();
    let response = await axios
      .get(
        `https://api.weatherbit.io/v2.0/current?key=367fe182e3524d8fa57fc76ede94121e&units=I&lat=${this.state.lat}&lon=${this.state.lon}`
      )
      .then((response) => {
        console.log(response.data.data);
=======
    const response = await axios.get(`https://api.weatherbit.io/v2.0/current?key=367fe182e3524d8fa57fc76ede94121e&units=I&&city=${this.state.city}&state=${this.state.state}&country=${this.state.country}&postal_code=${this.state.zipCode}&lat=${this.state.lat}&lon=${this.state.lon}`)
>>>>>>> 3eebb03a425d22ea389619f2d19da4fccccd69bf
        this.setState({
          ipWeather: response.data.data,
        });
  };

  getForecastByIp = async (event) => {
<<<<<<< HEAD
    // event.preventDefault();
    let response = await axios
      .get(
        `https://api.weatherbit.io/v2.0/forecast/daily?key=367fe182e3524d8fa57fc76ede94121e&units=I&days=7&lat=${this.state.lat}&lon=${this.state.lon}`
      )
      .then((response) => {
        console.log(response.data.data);
=======
    const response = await  axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?key=367fe182e3524d8fa57fc76ede94121e&units=I&days=7&&city=${this.state.city}&state=${this.state.state}&country=${this.state.country}&postal_code=${this.state.zipCode}&lat=${this.state.lat}&lon=${this.state.lon}`)
>>>>>>> 3eebb03a425d22ea389619f2d19da4fccccd69bf
        this.setState({
          ipForecast: response.data.data,
        });
  };
<<<<<<< HEAD
  // let weatherByIp = this.state.ipWeather[0];
  // console.log(this.weatherByIp);
=======

handleChange = (event) =>{
  this.setState({
    [event.target.name]: event.target.value,
  }) 
  console.log(this.state)
}

>>>>>>> 3eebb03a425d22ea389619f2d19da4fccccd69bf
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
<<<<<<< HEAD
            <Nav />
=======
            <Nav handleChange={this.handleChange} 
            forecastIP={this.getForecastByIp} 
            weatherIP={this.getWeatherByIP}
            city={this.state.city}
            state={this.state.state}
            country={this.state.country}/>
>>>>>>> 3eebb03a425d22ea389619f2d19da4fccccd69bf
          </nav>
        </header>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={(routerProps) => (
                <Home {...this.state} {...routerProps} />
              )}
            />

            <Route
              path="/weatherinfo"
              render={(routerProps) => (
                <WeatherInfo {...this.state} {...routerProps} />
              )}
            />
            <ForecastDetail
              ipForecast={this.state.ipForecast}
              getForecastByIp={this.getForecastByIp}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
