import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/MiniPaletteStyes';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

class MiniPalette extends Component {

  handlePaletteDelete = (e) => {
    const { openDialog, id } = this.props;
    e.stopPropagation();

    openDialog(id);
  }

  render() {
    const { classes, colors, emoji, paletteName, handleGoToPalette } = this.props;
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
        <DeleteForeverIcon
          className={classes.deleteIcon}
          onClick={this.handlePaletteDelete}
        />
        <div className={colorList}>
          { miniColorBoxes }
        </div>
        <h5 className={title}>
          {paletteName}<span className={emojiIcon}>{emoji}</span>
        </h5>
      </div>
    )
  }
};

export default withStyles(styles)(MiniPalette);
