import React, { Component } from "react";
import './Nav.css'

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      state: "",
      country: "",
    };
  }

  handleChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value,
    }) 
    
    
    console.log(this.state)
  }
  render(){
    return (
      <form onSubmit={(event)=>this.props.handleSearch(event, this.state.city, this.state.state, this.state.country)} >
        <input onChange={this.handleChange} value={this.state.city} type="text" name="city" placeholder="City..."/>
        <input onChange={this.handleChange} value={this.state.state}type="text" name="state" placeholder="State..."/>
        <input onChange={this.handleChange} value={this.state.country}type="text" name="country" placeholder="Country..."/>

        <button>Get Weather</button>
      </form>
      
    ) 
  }
  

};

export default Nav;
