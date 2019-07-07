import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import MiniPalette from '../components/MiniPalette';

const styles = {
  root: {
    backgroundColor: 'blue',
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: 'white'
  },
  palette: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%'
  }
}

class PaletteBoard extends Component {
  
  handleGoToPalette = (id) => {
    this.props.history.push(`/palette/${id}`)
  }

  render() {
    const { palettes, classes: { root, container, nav, palette } } = this.props;

    return (
      <div className={root}>
        <div className={container}>
          <nav className={nav}>
            <h1>Color picker</h1>
          </nav>
          <div className={palette}>
            {
              palettes.map(palette => (
                <MiniPalette key={palette.id} {...palette} handleGoToPalette={() => this.handleGoToPalette(palette.id)} />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteBoard);