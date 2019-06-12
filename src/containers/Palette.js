import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './palette.css';

class Palette extends Component {
  constructor(props) {
    super(props);
    
    this.state = {

    };
  }
  
  render() {
    const colorBoxes = this.props.colors.map(color => (
      <ColorBox background={color.color} name={color.name}/>
    ))

    return (
      <div className="palette">
        <div className="palette__colors">
          { colorBoxes }
        </div>
      </div>
    );
  }
}

export default Palette;
