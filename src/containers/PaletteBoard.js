import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PaletteBoard extends Component {
  render() {
    const { palettes } = this.props;

    return (
      <div>
        <h1>Color Picker</h1>

        { palettes.map(palette => (
          <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
        ))}
      </div>
    );
  }
}

export default PaletteBoard;