import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './navbar.css';

class Navbar extends Component {
  render() {
    const { colorLevel, handleLevelChange } = this.props;

    return (
      <nav className="navbar">
        <div className="navbar__logo">
          <a href="/" className="navbar__brand">Color picker</a>
        </div>
        <div className="navbar__slider-container">
        <span className="navbar__slider-level">Level: {colorLevel}</span>
          <div className="navbar__slider">
            <Slider
              defaultValue={colorLevel}
              min={100}
              max={900}
              onAfterChange={handleLevelChange}
              step={100}
            />
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;