import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from '../components/MiniPalette';

class PaletteBoard extends Component {
  render() {
    const { palettes } = this.props;

    return (
      <div>
        <h1>Color Picker</h1>

        { palettes.map(palette => (
          <Link to={`/palette/${palette.id}`}><MiniPalette /></Link>
        ))}
      </div>
    );
  }
}

export default PaletteBoard;