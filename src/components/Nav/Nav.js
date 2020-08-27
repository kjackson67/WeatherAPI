import React, { Component } from "react";
import "./Nav.css";
import Button from "react-bootstrap/Button";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      state: "",
      country: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.forecastIP();
    this.props.weatherIP();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="inputCity"
          onChange={this.props.handleChange}
          value={this.props.city}
          type="text"
          name="city"
          placeholder="City..."
        />
        <input
          className="inputState"
          onChange={this.props.handleChange}
          value={this.props.state}
          type="text"
          name="state"
          placeholder="State..."
        />
        <input
          className="inputCountry"
          onChange={this.props.handleChange}
          value={this.props.country}
          type="text"
          name="country"
          placeholder="Country..."
        />
<<<<<<< HEAD
        <strong>
          <button className="getweather" variant="secondary">
            Get Weather
          </button>
        </strong>
=======

        <Button
          className="getweather"
          onClick={this.handleSubmit}
          variant="secondary"
        >
          Get Weather
        </Button>
>>>>>>> 9106b3903504e293488ccd1e3e4131ffcd152d90
      </form>
    );
  }
}

export default Nav;
