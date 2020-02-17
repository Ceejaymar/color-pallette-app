import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import arrayMove from 'array-move';
import DraggableColorList from '../components/DraggableColorList';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import seedColors from '../seed-colors';
import styles from '../styles/NewPaletteFormStyles';

class NewPaletteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      colors: seedColors[0].colors,
    };

    this.onSortEnd = this.onSortEnd.bind(this);
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.handleAddColor = this.handleAddColor.bind(this);
    this.handleRemoveColor = this.handleRemoveColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePaletteSubmit = this.handlePaletteSubmit.bind(this);
    this.handleClearPalette = this.handleClearPalette.bind(this);
    this.handleAddRandom = this.handleAddRandom.bind(this);
  }

  onSortEnd({ oldIndex, newIndex }) {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  }

  handleDrawerOpen() {
    this.setState({ open: true });
  }

  handleDrawerClose() {
    this.setState({ open: false });
  }

  handleAddColor(newColor) {
    this.setState({ colors: [...this.state.colors, newColor] });
  }

  handleRemoveColor(colorName) {
    this.setState({ colors: this.state.colors.filter((color) => color.name !== colorName) });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handlePaletteSubmit(newPalette) {
    const newName = newPalette.paletteName.toLowerCase();

    newPalette.id = newName.replace(/ /g, '-');
    newPalette.colors = this.state.colors;

    this.props.savePalette(newPalette);
    this.props.history.push('/');
  }

  handleClearPalette() {
    this.setState({ colors: [] });
  }

  handleAddRandom() {
    const allColors = this.props.palettes.map((palette) => palette.colors).flat();
    let random;
    let randomColor;
    let isDuplicateColor = true;

    while (isDuplicateColor) {
      random = Math.floor(Math.random() * allColors.length);
      randomColor = allColors[random];
      isDuplicateColor = this.state.colors.some((color) => color.name === randomColor.name);
    }

    this.setState({ colors: [...this.state.colors, randomColor] });
  }

  render() {
    const { classes, maxColors, palettes } = this.props;
    const { open, colors } = this.state;
    const paletteIsFull = colors.length >= maxColors;

    return (
      <div className={classes.root}>
        <PaletteFormNav
          open={open}
          palettes={palettes}
          submit={this.handlePaletteSubmit}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.drawerContainer}>
            <Typography variant="h4" gutterBottom>Design your palette</Typography>
            <div className={classes.buttons}>
              <Button
                onClick={this.handleClearPalette}
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Clear palette
              </Button>
              <Button
                onClick={this.handleAddRandom}
                variant="contained"
                color="primary"
                className={classes.button}
                disabled={paletteIsFull}
              >
                random color
              </Button>
            </div>
            <ColorPickerForm
              paletteIsfull={paletteIsFull}
              addColor={this.handleAddColor}
              colors={colors}
            />
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            colors={colors}
            removeColor={this.handleRemoveColor}
            axis="xy"
            onSortEnd={this.onSortEnd}
            distance={20}
          />
        </main>
      </div>
    );
  }
}

NewPaletteForm.defaultProps = {
  maxColors: 20,
};

NewPaletteForm.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  theme: PropTypes.shape({}).isRequired,
  maxColors: PropTypes.number,
};

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
