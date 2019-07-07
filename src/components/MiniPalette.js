import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: "0.5rem",
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  colorList: {
    height: '150px',
    width: '100%',
    backgroundColor: '#dae1e4',
    borderRadius: '5px',
    overflow: 'hidden'
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
  },
  miniColor: {
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-3px'
  }
}

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