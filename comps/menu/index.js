// import React from "react";
import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';
import "./menu.css";
 

  class Menua extends Component {
    showSettings (event) {
      event.preventDefault();
    }
  
    render () {
      return (
        <Menu>
          <a id="home" className="menu-item" href="/1-home">Home</a>
          <a id="about" className="menu-item" href="/2-learn">Learn</a>
          <a id="contact" className="menu-item" href="/7-importance">Importance</a>
          <a id="contact" className="menu-item" href="/3-waste-options">Waste Options</a>
        </Menu>
      );
    }
  }

export default Menua;