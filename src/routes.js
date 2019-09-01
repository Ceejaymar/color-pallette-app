import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PaletteBoard from './containers/PaletteBoard';
import Palette from './containers/Palette';
import SingleColorPalette from './containers/SingleColorPalette';
import NewPaletteForm from './containers/NewPaletteForm';
import { generatePalette } from './colorHelper';

class Routes extends Component {
  render() {
    const { palettes, findPalette, savePalette, deletePalette } = this.props;

    return (
      <BrowserRouter>
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames='fade' timeout={500}>
              <Switch location={location}>
                <Route
                  exact
                  path='/palette/new/'
                  render={routeProps => (
                    <div className='page'>
                      <NewPaletteForm
                        {...routeProps}
                        palettes={palettes}
                        savePalette={savePalette}
                      />
                    </div>
                  )}
                />
                <Route
                  exact
                  path='/'
                  render={routeProps => (
                    <div className='page'>
                      <PaletteBoard
                        palettes={palettes}
                        {...routeProps}
                        deletePalette={deletePalette}
                      />
                    </div>
                  )}
                />
                <Route
                  exact
                  path='/palette/:paletteId'
                  render={routeProps => (
                    <div className='page'>
                      <Palette
                        palette={generatePalette(findPalette(routeProps.match.params.paletteId))}
                      />
                    </div>
                  )}
                />
                <Route
                  exact
                  path='/palette/:paletteId/:colorId'
                  render={routeProps => (
                    <div className='page'>
                      <SingleColorPalette
                        colorId={routeProps.match.params.colorId}
                        palette={generatePalette(findPalette(routeProps.match.params.paletteId))}
                      />
                    </div>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </BrowserRouter>
    )
  }
}

export default Routes;
