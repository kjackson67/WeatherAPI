import React, { Component } from "react";
import "./App.css";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import ForecastDetail from "../ForecastDetail/ForecastDetail";
import Nav from "../Nav/Nav";
import { Route, Switch, Link, Redirect } from "react-router-dom";
class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
        <main>
          <Switch>
            <Link
              to="/weatherinfo"
              style={{ textDecoration: "none", color: "white" }}
            >
              Weather Details
            </Link>

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
