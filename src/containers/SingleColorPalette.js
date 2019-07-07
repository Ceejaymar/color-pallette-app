import React, { Component } from 'react';
import ColorBox from './ColorBox';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props)

    this._shades = this.handleGetShades(this.props.palette, this.props.colorId);
  }

  handleGetShades = (palette, filterColor) => {
    let shades = [];
    const allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(allColors[key].filter(color => color.id === filterColor));
    }

    return shades.slice(1);
  }

  render() {
    const colorBoxes = this._shades.map(color => {
      const { name, hex } = color;

      return (
        <ColorBox
          key={name}
          name={name}
          background={hex}
          showLink={false}
        />
      )
    })

    return (
      <div className='palette'>
        single color palette
        <div className='palette__colors'>{colorBoxes}</div>
      </div>
    );
  }
}

export default SingleColorPalette;