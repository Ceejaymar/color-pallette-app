import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from '../components/PaletteFooter';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props)

    this._shades = this.handleGetShades(this.props.palette, this.props.colorId);

    this.state = {
      format: 'hex'
    }
  }

  handleGetShades = (palette, filterColor) => {
    let shades = [];
    const allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(allColors[key].filter(color => color.id === filterColor));
    }

    return shades.slice(1);
  }

  handleFormatChange = (format) => {
    this.setState({ format })
  }

  render() {
    const { format } = this.state;
    const { paletteName, emoji, id } = this.props.palette;
    
    const colorBoxes = this._shades.map(color => {
      const { name } = color;

      return (
        <ColorBox
          key={name}
          name={name}
          background={color[format]}
          showLink={false}
        />
      )
    })

    return (
      <div className='palette palette--single'>
        <Navbar handleFormatChange={this.handleFormatChange} showColorLevel={false} />
        <div className='palette__colors'>
          {colorBoxes}
          <div className='palette__go-back color-box'>
            <Link to={`/palette/${id}`} className="back-button">Go Back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;