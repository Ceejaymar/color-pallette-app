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
import DraggableColorList from '../components/DraggableColorList';
import arrayMove from 'array-move';

import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';

const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    height: 'calc(100vh - 64px)',
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class NewPaletteForm extends React.Component {
  static defaultProps = {
    maxColors: 20
  }
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      colors: this.props.palettes[0].colors,
      newPaletteName: ''
    }
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  }

  handleDrawerClose = () => {
    this.setState({ open: false });
  }

  handleAddColor = (newColor) => {
    this.setState({ colors: [...this.state.colors, newColor] });
  }

  handleRemoveColor = (colorName) => {
    this.setState({ colors: this.state.colors.filter(color => color.name !== colorName) });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  }

  handlePaletteSubmit = (newPaletteName) => {
    const newName = newPaletteName;
    const newPalette = {
      paletteName: newName,
      id: newName.replace(/ /g, '-'),
      colors: this.state.colors
    }

    this.props.savePalette(newPalette);
    this.props.history.push('/');
  }

  handleClearPalette = () => {
    this.setState({ colors: [] });
  }

  handleAddRandom = () => {
    const allColors = this.props.palettes.map(palette => palette.colors).flat();
    const random = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[random];

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
          classes={classes}
          palettes={palettes}
          submit={this.handlePaletteSubmit}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
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
          <Typography variant='h4'>Design your palette</Typography>
          <div>
            <Button onClick={this.handleClearPalette} variant='contained' color='secondary'>Clear palette</Button>
            <Button
              onClick={this.handleAddRandom}
              variant='contained'
              color='primary'
              disabled={paletteIsFull}
            >
              random color
            </Button>
          </div>
          <ColorPickerForm
            paletteIsfull={paletteIsFull}
            addColor={this.handleAddColor}
            colors={ colors }
          />
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
            axis='xy'
            onSortEnd={this.onSortEnd}
            pressDelay={100}
          />
        </main>
      </div>
    );
  }
}

NewPaletteForm.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
