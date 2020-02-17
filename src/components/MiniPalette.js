// import React, { PureComponent } from 'react';
// import { withStyles } from '@material-ui/styles';
// import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
// import styles from '../styles/MiniPaletteStyes';

// class MiniPalette extends PureComponent {
//   constructor() {
//     super();

//     this.handlePaletteDelete = this.handlePaletteDelete.bind(this);
//   }

//   handlePaletteDelete(e) {
//     const { openDialog, id } = this.props;
//     e.stopPropagation();

//     openDialog(id);
//   }

//   render() {
//     const { classes, colors, emoji, paletteName, handleGoToPalette, id } = this.props;
//     const { root, colorList, title, emojiIcon, miniColor } = classes;

//     const miniColorBoxes = colors.map((color) => (
//       <div
//         className={miniColor}
//         style={{ backgroundColor: color.color }}
//         key={color.name}
//       />
//     ));

//     return (
//       <div className={root} role="link" tabIndex={0} onClick={() => handleGoToPalette(id)}>
//         <DeleteForeverIcon
//           className={classes.deleteIcon}
//           onClick={this.handlePaletteDelete}
//         />
//         <div className={colorList}>
//           { miniColorBoxes }
//         </div>
//         <h5 className={title}>
//           {paletteName}
//           <span className={emojiIcon}>{emoji}</span>
//         </h5>
//       </div>
//     );
//   }
// }

// export default withStyles(styles)(MiniPalette);

import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/MiniPaletteStyes';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

class MiniPalette extends PureComponent {

  handlePaletteDelete = (e) => {
    const { openDialog, id } = this.props;
    e.stopPropagation();

    openDialog(id);
  }

  render() {
    const { classes, colors, emoji, paletteName, handleGoToPalette, id } = this.props;
    const { root, colorList, title, emojiIcon, miniColor } = classes;

    const miniColorBoxes = colors.map(color => (
      <div
        className={miniColor}
        style={{ backgroundColor: color.color }}
        key={color.name}
      />
    ))

    return (
      <div className={root} onClick={() => handleGoToPalette(id)}>
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
