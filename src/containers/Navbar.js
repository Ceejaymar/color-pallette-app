import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import SnackBar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import 'rc-slider/assets/index.css';
import './navbar.css';

class Navbar extends Component {
  state = {
    format: 'hex',
    isOpen: false
  }

  handleFormatChange = async (e) => {
    await this.setState({ format: e.target.value, isOpen: true});
    await this.props.handleFormatChange(this.state.format);
  }

  handleButton = () => {
    this.state.isOpen && this.setState({ isOpen: false });
  }
  
  render() {
    const { colorLevel, handleLevelChange } = this.props;
    const { format, isOpen } = this.state;

    return (
      <nav className='navbar'>
        <div className='navbar__logo'>
          <Link to='/' className='navbar__brand'>Color picker</Link>
        </div>
        <div className='navbar__slider-container'>
        <span className='navbar__slider-level'>Level: {colorLevel}</span>
          <div className='navbar__slider'>
            <Slider
              defaultValue={colorLevel}
              min={100}
              max={900}
              onAfterChange={handleLevelChange}
              step={100}
            />
          </div>
        </div>
        <div className='navbar__select'>
          <Select onChange={this.handleFormatChange} value={format}>
            <MenuItem value='hex'>Hex - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value='rgba'>RGBa rgba(255, 255, 255, 1.0)</MenuItem>
            <MenuItem value='hsl'>HSL - hsl(0, 0%, 100%)</MenuItem>
          </Select>
        </div>
        <SnackBar 
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left'}}
          open={isOpen}
          autoHideDuration={3000}
          message={<span id='message-id'>Format changed to {format.toUpperCase()}!</span>}
          ContentProps={{ 'aria-describedby': 'message-id'}}
          onClose={this.handleButton}
          action={[
            <IconButton 
              key='close'
              aria-label='close'
              color='inherit'
              onClick={this.handleButton}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </nav>
    );
  }
};

export default Navbar;