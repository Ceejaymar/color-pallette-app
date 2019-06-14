import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  main: {
    backgroundColor: 'purple',
    border: '3px solid teal'
  }
}

const MiniPalette = ({ classes }) => {
  const { main } = classes;

  return (
    <div className={main}>
      <h1>Mini palette</h1>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);