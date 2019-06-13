import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import uuid from 'uuid';
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
        <Slider
          defaultValue={colorLevel}
          min={100}
          max={900}
          onAfterChange={this.handleLevelChange}
          step={100}
        />
        <div className="palette__colors">
          {colorBoxes}
        </div>
      </div>
    );
  }
}

export default Palette;
