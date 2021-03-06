import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import PaletteMetaForm from './PaletteMetaForm';

import styles from '../styles/PaletteFormNavStyles';

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPaletteName: '',
      formShowing: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleShowForm = this.handleShowForm.bind(this);
    this.handleHideForm = this.handleHideForm.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleShowForm() {
    this.setState({ formShowing: true });
  }

  handleHideForm() {
    this.setState({ formShowing: false });
  }

  render() {
    const { classes, open, submit, handleDrawerOpen, palettes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="default"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <AddToPhotosIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Create a Palette
            </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
            <Link to="/">
              <Button className={classes.button} variant="contained" color="secondary">Back</Button>
            </Link>
            <Button className={classes.button} variant="contained" color="primary" onClick={this.handleShowForm}>
              Save
            </Button>
          </div>
        </AppBar>
        {
          this.state.formShowing && (
            <PaletteMetaForm
              submit={submit}
              palettes={palettes}
              hideForm={this.handleHideForm}
            />
          )
        }
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);
