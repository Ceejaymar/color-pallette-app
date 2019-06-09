import React, { Component } from 'react';
import './colorBox.css';

class ColorBox extends Component {
  render() {  
    const { background, name } = this.props;

    return (
      <div className="color-box" style={{ backgroundColor: background }}>
        <span>{name}</span>
        {/* <span>More</span> */}
      </div>
    );
  }
}

export default ColorBox;  