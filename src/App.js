import React from 'react';
import Palette from './containers/Palette';
import seedColors from './seed-colors';

function App() {
  return (
    <div className="App">
      <Palette {...seedColors[3]} />
    </div>
  );
}

export default App;
