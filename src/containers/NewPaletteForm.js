import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';
import DraggableColorList from '../components/DraggableColorList';
import arrayMove from 'array-move';

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

class PersistentDrawerLeft extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      currentColor: 'purple',
      colors: [{ color: 'blue', name: 'blue'}, { color: 'purple', name: 'purple'}],
      newPaletteName: '',
      newColorName: ''
    }
  }

  componentDidMount() {
      ValidatorForm.addValidationRule('isColorNameUnique', value => (
        this.state.colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
      ));

      ValidatorForm.addValidationRule('isColorUnique', () => (
        this.state.colors.every(({ color }) => color !== this.state.currentColor)
      ));

      ValidatorForm.addValidationRule('isPaletteNameUnique', value => (
        this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
      ));
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  }

  handleDrawerClose = () => {
    this.setState({ open: false });
  }

  handleColorUpdate = (color) => {
    const currentColor = color.hex;

    this.setState({ currentColor });
  }

  handleAddColor = () => {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    }
    this.setState({ colors: [...this.state.colors, newColor], newColorName: ''});
  }

  handleRemoveColor = (colorName) => {
    this.setState({ colors: this.state.colors.filter(color => color.name !== colorName)})
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({colors}) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  }

  handlePaletteSubmit = () => {
    const newName = this.state.newPaletteName;
    const newPalette = {
      paletteName: newName,
      id: newName.replace(/ /g, '-'),
      colors: this.state.colors
    }

    this.props.savePalette(newPalette);
    this.props.history.push('/');
  }

  render() {
    const { classes, theme } = this.props;
    const { open, newPaletteName, newColorName, colors } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position='fixed'
          color='default'
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' color='inherit' noWrap>
              Persistent drawer
            </Typography>
            <ValidatorForm onSubmit={this.handlePaletteSubmit} >
              <TextValidator
                label='palette name'
                name='newPaletteName'
                value={newPaletteName}
                onChange={this.handleChange}
                validators={['required', 'isPaletteNameUnique']}
                errorMessages={['Enter palette name', 'palette name must be unique']}
              />
              <Button
                variant='contained'
                color='primary'
                type='submit'
              >Save Palette</Button>
            </ValidatorForm>
          </Toolbar>
        </AppBar>
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
            <Button variant='contained' color='secondary'>Clear palette</Button>
            <Button variant='contained' color='primary'>random color</Button>
          </div>
          <ChromePicker
            color={this.state.currentColor}
            onChangeComplete={this.handleColorUpdate}
          />
          <ValidatorForm onSubmit={this.handleAddColor} ref='form'>
            <TextValidator
              value={newColorName}
              label='color name'
              name='newColorName'
              onChange={this.handleChange}
              validators={['required', 'isColorNameUnique', 'isColorUnique']}
              errorMessages={['this field is required', 'Name must be unique', 'Color must be unique']}
            />
            <Button
              variant='contained'
              color='primary'
              style={{ backgroundColor: this.state.currentColor }}
              type='submit'
            >add color</Button>
          </ValidatorForm>
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
          />
        </main>
      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);
