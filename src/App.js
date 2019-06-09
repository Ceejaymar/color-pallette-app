import React from 'react';
import Palette from './containers/Palette';
import seedColors from './seed-colors';

function App() {
  return (
    <div className="App">
      <Palette {...seedColors[4]} />
    </div>
  );
}

export default App;
