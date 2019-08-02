import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.3)'
    }
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0',
    bottom: '0',
    padding: '10px',
    color: 'rgba(0, 0, 0, .5)',
    letterSpacing: '1px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  deleteIcon: {
    transition: '.3s ease-in'
  }
}

const DraggableColorBox = ({
  color,
  name,
  removeColor,
  classes: { root, boxContent, deleteIcon }
}) => {
  return (
    <div className={root} style={{ backgroundColor: `${color}`}} onClick={() => removeColor(name)}>
      <div className={boxContent}>
        <span>{name}</span>
        <DeleteForeverIcon className={deleteIcon}/>
      </div>
    </div>
  );
};

export default withStyles(styles)(DraggableColorBox);
