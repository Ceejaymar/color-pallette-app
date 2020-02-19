import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      stage: 'form',
      newPaletteName: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleStageChange = this.handleStageChange.bind(this);
    this.handleSavePalette = this.handleSavePalette.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => (
      this.props.palettes.every(({ paletteName }) => (
        paletteName.toLowerCase() !== value.toLowerCase()
      ))
    ));
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleStageChange() {
    this.setState({ stage: 'emoji' });
  }

  handleSavePalette({ native }) {
    const { newPaletteName } = this.state;
    const { submit } = this.props;

    submit({
      paletteName: newPaletteName,
      emoji: native,
    });

    this.setState({ stage: '' });
  }

  render() {
    const { newPaletteName, stage } = this.state;
    const { hideForm } = this.props;

    return (
      <>
        <Dialog open={stage === 'emoji'} onClose={hideForm}>
          <DialogTitle>Choose a palette emoji</DialogTitle>
          <Picker title="" onSelect={this.handleSavePalette} />
        </Dialog>
        <Dialog
          open={stage === 'form'}
          onClose={hideForm}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Submit a new palette</DialogTitle>
          <ValidatorForm onSubmit={this.handleStageChange}>
            <DialogContent>
              <DialogContentText>
                Please enter a name for your new palette. Make sure the name is unique!
              </DialogContentText>
              <TextValidator
                label="palette name"
                name="newPaletteName"
                fullWidth
                margin="normal"
                value={newPaletteName}
                onChange={this.handleChange}
                validators={['required', 'isPaletteNameUnique']}
                errorMessages={['Enter palette name', 'palette name must be unique']}
              />
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                color="primary"
                type="submit"
              >
                Choose emoji
              </Button>
              <Button
                onClick={hideForm}
                variant="contained"
                color="secondary"
              >
                Cancel
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </>
    );
  }
}

export default PaletteMetaForm;
