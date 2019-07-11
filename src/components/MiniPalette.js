import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/MiniPaletteStyes';

const MiniPalette = ({ classes, colors, id, emoji, paletteName, handleGoToPalette }) => {
  const { root, colorList, title, emojiIcon, miniColor } = classes;
  const miniColorBoxes = colors.map(color => (
    <div
      className={miniColor}
      style={{ backgroundColor: color.color }}
      key={color.name}
    />
  ))

  return (
    <div className={root} onClick={handleGoToPalette}>
      <div className={colorList}>
        { miniColorBoxes }
      </div>
      <h5 className={title}>
        {paletteName}<span className={emojiIcon}>{emoji}</span>
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
