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
      <form className="searchForm" onSubmit={this.handleSubmit}>
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
        <strong>
          <Button className="getweather" variant="secondary">
            Get Weather
          </Button>
        </strong>
      </form>
    );
  }
}

export default Nav;
