import React from 'react';
import Palette from './containers/Palette';
import Routes from './routes';
import seedColors from './seed-colors';

import { generatePalette } from './colorHelper';

function App() {
  return (
    <Routes />
  );
}

export default App;
