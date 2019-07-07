import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PaletteBoard from './containers/PaletteBoard';
import Palette from './containers/Palette';
import seedColors from './seed-colors';
import { generatePalette } from './colorHelper';

class Routes extends Component {
  findPalette = (id) => {
    return seedColors.find(palette => {
      return palette.id === id;
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path='/'
            render={routeProps => (
              <PaletteBoard palettes={seedColors} {...routeProps} />
            )}
          />
          <Route
            exact
            path='/palette/:paletteId'
            render={routeProps => (
              <Palette palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))} />
            )}
          />
          <Route
            exact
            path='/palette/:paletteId/:colorId'
            render={() => <h1>Single color page!</h1>}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes;