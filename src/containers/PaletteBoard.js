import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import MiniPalette from '../components/MiniPalette';

const styles = {
  root: {
    backgroundColor: 'blue'
  },
  container: {

  },
  nav: {

  },
  palette: {

  }
}

class PaletteBoard extends Component {
  render() {
    const { palettes, classes: { root, container, nav, palette } } = this.props;

    return (
      <div className={root}>
      <div className={container}>
        <nav className={nav}>
          <h1>Color picker</h1>
        </nav>
        <div className={palette}></div>
      </div>
        <h1>Color Picker</h1>

        { palettes.map(palette => (
          <MiniPalette key={palette.id} {...palette}/>
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(PaletteBoard);
