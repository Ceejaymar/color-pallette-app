import React, { Component } from 'react';
import Routes from './routes';
import seedColors from './seed-colors';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      palettes: seedColors
    };
  }

  findPalette = (id) => {
    return this.state.palettes.find(palette => {
      return palette.id === id;
    });
  }

  savePalette = (newPalette) => {
    this.setState({ palettes: [...this.state.palettes, newPalette] });
  }

  render() {
    return (
      <Routes
        savePalette={this.savePalette}
        findPalette={this.findPalette}
        palettes={this.state.palettes} />
    );
  }
}

export default App;
