import React from 'react';

const PaletteFooter = ({ paletteName, emoji }) => {
  return (
    <div>
      <footer className="palette__footer">
          {paletteName} 
          <span className="palette__emoji">{emoji}</span>
        </footer>
    </div>
  );
};

export default PaletteFooter;