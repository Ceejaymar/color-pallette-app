import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MiniPalette from '../components/MiniPalette';
import styles from '../styles/PaletteBoardStyles';

class PaletteBoard extends Component {
  handleGoToPalette = (id) => {
    this.props.history.push(`/palette/${id}`)
  }

  render() {
    const { palettes, deletePalette, classes: { root, container, nav, palette } } = this.props;

    return (
      <div className={root}>
        <div className={container}>
          <nav className={nav}>
            <h1>Color picker</h1>
            <Link to='/palette/new'>Create new palette</Link>
          </nav>
          <TransitionGroup className={palette}>
            {
              palettes.map(palette => (
                <CSSTransition key={palette.id} classNames='fade' timeout={500}>
                  <MiniPalette
                    key={palette.id}
                    {...palette}
                    handleGoToPalette={() => this.handleGoToPalette(palette.id)}
                    id={palette.id}
                    handleDelete={deletePalette}
                  />
                </CSSTransition>
              ))
            }
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteBoard);
