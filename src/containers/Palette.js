import React, { Component } from 'react';
import uuid from 'uuid';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import './palette.css';

class Palette extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorLevel: 500
    };
  }

  handleLevelChange = (colorLevel) => {
    this.setState({ colorLevel });
  }

  render() {
    const { colors } = this.props.palette;
    const { colorLevel } = this.state;

    const colorBoxes = colors[colorLevel].map(color => (
      <ColorBox background={color.hex} name={color.name} key={uuid()} />
    ))

    return (
      <div className="palette">
        <Navbar colorLevel={colorLevel} handleLevelChange={this.handleLevelChange}/>
        <div className="palette__colors">
          {colorBoxes}
        </div>
      </div>
    );
  }
}

export default Palette;
