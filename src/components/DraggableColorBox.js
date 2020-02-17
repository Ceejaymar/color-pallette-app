import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/DraggableColorBoxStyles';

const DraggableColorBox = SortableElement(({
  color,
  name,
  removeColor,
  classes: { root, boxContent, deleteIcon },
}) => (
  <div
    // role="button"
    // tabIndex={0}
    className={root}
    style={{ backgroundColor: `${color}` }}
    onClick={() => removeColor(name)}
    // onKeyPress={() => removeColor(name)}
  >
    <div className={boxContent}>
      <span>{name}</span>
      <DeleteForeverIcon className={deleteIcon} />
    </div>
  </div>
));

export default withStyles(styles)(DraggableColorBox);
