import React, { Component } from 'react';
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
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { colorLevel, format } = this.state;

    const colorBoxes = colors[colorLevel].map(color => (
      <ColorBox 
        background={color[format]}
        name={color.name}
        key={color.id}
        colorId={color.id}
        paletteId={id}
        showLink
      />
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
        <footer className="palette__footer">
          {paletteName} 
          <span className="palette__emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}

export default Palette;
