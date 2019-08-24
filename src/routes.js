import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route
            exact
            path='/palette/new/'
            render={routeProps => <NewPaletteForm {...routeProps} palettes={palettes} savePalette={savePalette} /> }
          />
          <Route
            exact
            path='/'
            render={routeProps => (
              <PaletteBoard palettes={palettes} {...routeProps} deletePalette={deletePalette} />
            )}
          />
          <Route
            exact
            path='/palette/:paletteId'
            render={routeProps => (
              <Palette palette={generatePalette(findPalette(routeProps.match.params.paletteId))} />
            )}
          />
          <Route
            exact
            path='/palette/:paletteId/:colorId'
            render={routeProps => (
              <SingleColorPalette
                colorId={routeProps.match.params.colorId}
                palette={generatePalette(findPalette(routeProps.match.params.paletteId))} />
            )}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes;
