import React, { Component } from 'react';
import './colorBox.css';

class ColorBox extends Component {
  render() {  
    const { background, name } = this.props;

    return (
      <div className="color-box" style={{ backgroundColor: background }}>
        <div className="color-box__copy-box">
          <div className="color-box__content">
            <span className="color-box__name">{ name }</span>
          </div>
          <button className="color-box__copy-btn">Copy</button>
        </div>
        <span className="color-box__see-more">More colors</span>
      </div>
    );
  }
}

export default ColorBox;  