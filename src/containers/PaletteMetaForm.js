import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

class PaletteMetaForm extends Component {
  state = {
    open: false,
    newPaletteName: ''
  };

  componentDidMount() {
    ValidatorForm.addValidationRule('isPaletteNameUnique', value => (
      this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
    ));
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { newPaletteName } = this.state;
    const { submit } = this.props;

    return (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Submit a new palette</DialogTitle>
        <ValidatorForm onSubmit={() => submit(newPaletteName)} >
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new palette. Make sure the name is unique!
          </DialogContentText>
            <TextValidator
              label='palette name'
              name='newPaletteName'
              fullWidth
              margin='normal'
              value={newPaletteName}
              onChange={this.handleChange}
              validators={['required', 'isPaletteNameUnique']}
              errorMessages={['Enter palette name', 'palette name must be unique']}
            />
          </DialogContent>
          <DialogActions>
            <Button
              variant='contained'
              color='primary'
              type='submit'
            >
              Save Palette
            </Button>
            <Button
              onClick={this.handleClose}
              variant='contained'
              color="secondary"
            >
              Cancel
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    );
  }
}

export default PaletteMetaForm;
