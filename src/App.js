import React from 'react';
import Palette from './containers/Palette';
import seedColors from './seed-colors';

import { generatePalette } from './colorHelper';

function App() {
  console.log(generatePalette(seedColors[4]));
  return (
    <div className="App">
      <Palette {...seedColors[3]} />
    </div>
  );
}

export default App;
