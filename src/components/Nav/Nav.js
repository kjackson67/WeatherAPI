import React, { Component} from "react";
import './Nav.css'

class Nav extends Component {
  render(){
    return (
      <form>
        <input type="text" name="city" placeholder="City..."/>
        <input type="text" name="state" placeholder="State..."/>
        <input type="text" name="country" placeholder="Country..."/>

        <button>Get Weather</button>
      </form>
      
    ) 
  }
  

};

export default Nav;
