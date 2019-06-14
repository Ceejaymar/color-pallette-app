import React, { Component } from 'react';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';
import './navbar.css';

class Navbar extends Component {
  state = {
    format: 'hex'
  }

  handleFormatChange = async (e) => {
    await this.setState({ format: e.target.value});
    await this.props.handleFormatChange(this.state.format);
  }
  
  render() {
    const { colorLevel, handleLevelChange } = this.props;
    const { format } = this.state;

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
        <div className="navbar__select">
          <Select onChange={this.handleFormatChange} value={format}>
            <MenuItem value="hex">Hex - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBa rgba(255, 255, 255, 1.0)</MenuItem>
            <MenuItem value="hsl">HSL - hsl(0, 0%, 100%)</MenuItem>
          </Select>
        </div>
      </nav>
    );
  }
};

export default Navbar;