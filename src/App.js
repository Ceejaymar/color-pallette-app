import React from 'react';
import Palette from './containers/Palette';
import seedColors from './seed-colors';

import { generatePalette } from './colorHelper';

function App() {
  return (
    <div className="App">
      <Palette palette={generatePalette(seedColors[3])} />;
    </div>
  );
}

export default App;
