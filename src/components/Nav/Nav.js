import React, { Component } from "react";
import './Nav.css'

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      state: "",
      country: "",
    }
  }
  
handleSubmit = (event) =>{
  event.preventDefault()
  this.props.forecastIP()
  this.props.weatherIP()
}

  render(){
    return (
      <form onSubmit={this.handleSubmit} >
        <input onChange={this.props.handleChange} value={this.props.city} type="text" name="city" placeholder="City..."/>
        <input onChange={this.props.handleChange} value={this.props.state} type="text" name="state" placeholder="State..."/>
        <input onChange={this.props.handleChange} value={this.props.country} type="text" name="country" placeholder="Country..."/>
       <strong>    <button className="getweather"    >Get Weather</button></strong>
      </form>
      
    ) 
  }
};

export default Nav;
