import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PaletteBoard from './containers/PaletteBoard';
import Palette from './containers/Palette';
import SingleColorPalette from './containers/SingleColorPalette';
import NewPaletteForm from './containers/NewPaletteForm';
import Page from './components/Page';
import { generatePalette } from './colorHelper';


class Routes extends Component {
  render() {
    const { palettes, findPalette, savePalette, deletePalette } = this.props;

    return (
      <BrowserRouter>
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames='page' timeout={500}>
              <Switch location={location}>
                <Route
                  exact
                  path='/palette/new/'
                  render={routeProps => (
                    <Page>
                      <NewPaletteForm
                        {...routeProps}
                        palettes={palettes}
                        savePalette={savePalette}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path='/'
                  render={routeProps => (
                    <Page>
                      <PaletteBoard
                        palettes={palettes}
                        {...routeProps}
                        deletePalette={deletePalette}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path='/palette/:paletteId'
                  render={routeProps => (
                    <Page>
                      <Palette
                        palette={generatePalette(findPalette(routeProps.match.params.paletteId))}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path='/palette/:paletteId/:colorId'
                  render={routeProps => (
                    <Page>
                      <SingleColorPalette
                        colorId={routeProps.match.params.colorId}
                        palette={generatePalette(findPalette(routeProps.match.params.paletteId))}
                      />
                    </Page>
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
