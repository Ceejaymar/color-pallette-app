import React, { Component } from 'react';
import Routes from './routes';
import seedColors from './seed-colors';

class App extends Component {
  constructor(props) {
    super(props);

    const savedPalettes = JSON.parse(window.sessionStorage.getItem('palettes'));

    this.state = {
      palettes: savedPalettes || seedColors
    };
  }

  findPalette = (id) => {
    return this.state.palettes.find(palette => {
      return palette.id === id;
    });
  }

  savePalette = (newPalette) => {
    this.setState({ palettes: [...this.state.palettes, newPalette] }, this.syncSessionStorage);
  }

  deletePalette = (paletteId) => {
    this.setState(
      st => ({palettes: st.palettes.filter(palette => palette.id !== paletteId) }),
      this.syncSessionStorage
    )
  }

  syncSessionStorage = () => {
    window.sessionStorage.setItem('palettes', JSON.stringify(this.state.palettes));
  }

  render() {
    return (
      <Routes
        savePalette={this.savePalette}
        findPalette={this.findPalette}
        palettes={this.state.palettes}
        deletePalette={this.deletePalette}
      />
    );
  }
}

export default App;
