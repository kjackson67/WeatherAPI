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
        console.log(this.state.lat);
        console.log(this.state.lon);
        console.log(this.state.city);
        console.log(this.state.state);
        console.log(this.state.country);
        console.log(this.state.zipCode);
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
    // event.preventDefault();
    let response = await axios
      // .get(
      //   `https://api.weatherbit.io/v2.0/current?key=367fe182e3524d8fa57fc76ede94121e&units=I&lat=${this.state.lat}&lon=${this.state.lon}`
      // )
      .get(
        `https://api.weatherbit.io/v2.0/current?key=367fe182e3524d8fa57fc76ede94121e&units=I&&city=${this.state.city}&state=${this.state.state}&country=${this.state.country}&postal_code=${this.state.zipCode}&lat=${this.state.lat}&lon=${this.state.lon}`
      )
      .then((response) => {
        console.log(response.data.data);
        this.setState({
          ipWeather: response.data.data,
        });
        console.log(this.state.ipWeather[0].city_name);
        console.log(this.state.ipWeather[0].weather.icon);
      });
  };

  getForecastByIp = async (event) => {
    // event.preventDefault();
    let response = await axios
      .get(
        `https://api.weatherbit.io/v2.0/forecast/daily?key=367fe182e3524d8fa57fc76ede94121e&units=I&days=7&lat=${this.state.lat}&lon=${this.state.lon}`
      )
      .then((response) => {
        console.log(response.data);
        this.setState({
          ipForecast: response.data.data,
        });
        console.log(this.state.ipForecast[0].high_temp);
        console.log(this.state.ipForecast[0].weather.icon);
      });
  };
  // let weatherByIp = this.state.ipWeather[0];
  // console.log(this.weatherByIp);

handleSearch = (event, city, state, country) =>{
     event.preventDefault();
     this.setState({
       city: city,
       state: state,
       country: country,
     })
     this.getForecastByIp()
     this.getWeatherByIP()
 console.log("this is city state country", this.state)
}


  render() {
    return (
     
      <div className="App">
        <header className="App-header">
          <nav>
            <Nav handleSearch={this.handleSearch} />
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
