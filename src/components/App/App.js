import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import ForecastDetail from "../ForecastDetail/ForecastDetail";
import Nav from "../Nav/Nav";
import { Route, Switch, Link, Redirect } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      lat: "",
      lon: "",
      ipWeather: [],
    };
  }

  componentDidMount = async () => {
    let response = await navigator.geolocation.getCurrentPosition(
      (position) => {
        // let lat = position.coords.latitude;
        // let lon = position.coords.longitude;
        // console.log("this is position", position);
        // console.log("this is your current LAT", lat);
        // console.log("this is your current LONG", lon);
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        console.log(this.state.lat);
        console.log(this.state.lon);
        this.getWeatherByIP();
      }
    );
  };

  getWeatherByIP = async () => {
    // event.preventDefault();
    let response = await axios
      .get(
        `https://api.weatherbit.io/v2.0/current?key=367fe182e3524d8fa57fc76ede94121e&units=I&lat=41.8781136&lon=-87.6297982`
      )
      .then((response) => {
        console.log(response.data.data);
        this.setState({
          ipWeather: response.data.data,
        });
        console.log(this.state.ipWeather[0].city_name);
      });
  };
  render() {
    let weatherByIp = this.state.ipWeather.map((item, index) => {
      // console.log(image.url);
      return item;
    });

    // let weatherByIp = this.state.ipWeather[0];
    console.log(weatherByIp);
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <Nav />
          </nav>
        </header>
        <main>
          <div>
            Latitude: {this.state.lat}
            Longitude: {this.state.lon}
            local weather: {weatherByIp.city_name}
          </div>
          <Switch>
            <Link to="/weatherinfo">Weather Details</Link>

            <Route
              path="/weatherinfo"
              render={(routerProps) => (
                <WeatherInfo {...this.state} {...routerProps} />
              )}
            />
          </Switch>
        </main>
        {/* <ForecastDetail /> */}
      </div>
    );
  }
}

export default App;
