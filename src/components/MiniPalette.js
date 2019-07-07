import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    // backgroundColor: 'purple',
    borderRadius: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'hover'
    }
  },
  colorList: {
    backgroundColor: 'white'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    paddingTop: '0.5rem',
    fontSize: '1rem',
    position: 'relative'
  },
  emojiIcon: {
    marginRight: '0.5rem',
    fontSize: '1.5rem'
  }
}

const MiniPalette = ({ classes, colors, id, emoji, paletteName }) => {
  const { root, colorList, title, emojiIcon } = classes;
  
  return (
    <div className={root}>
      <div className={colorList}>
      <h5 className={title}>{paletteName}<span className={emojiIcon}>{emoji}</span></h5>
      </div>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);