import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/PaletteFooterStyles';

const PaletteFooter = ({ paletteName, emoji, classes: { footer, footerEmoji } }) => {
  return (
    <div>
      <footer className={`${footer}`}>
          {paletteName}
          <span className={`${footerEmoji}`}>{emoji}</span>
        </footer>
    </div>
  );
};

export default withStyles(styles)(PaletteFooter);
