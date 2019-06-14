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
          <Route exact path='/' render={() => <PaletteBoard palettes={seedColors} />} />
          <Route
            exact path='/palette/:id'
            render={routeProps => (
              <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
            )}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes;