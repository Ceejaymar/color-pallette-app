import React, { Component } from 'react';
import uuid from 'uuid';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import './palette.css';

class Palette extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorLevel: 500,
      format: 'hex'
    };
  }

  handleLevelChange = (colorLevel) => {
    this.setState({ colorLevel });
  }

  handleFormatChange = (format) => {
    this.setState({ format })
  }

  render() {
    const { colors } = this.props.palette;
    const { colorLevel, format } = this.state;

    const colorBoxes = colors[colorLevel].map(color => (
      <ColorBox background={color[format]} name={color.name} key={uuid()} />
    ))

    return (
      <div className='palette'>
        <Navbar colorLevel={colorLevel} 
          handleLevelChange={this.handleLevelChange} 
          handleFormatChange={this.handleFormatChange} 
        />
        <div className='palette__colors'>
          {colorBoxes}
        </div>
      </div>
    );
  }
}

export default Palette;
