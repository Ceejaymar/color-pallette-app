import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';

import styles from '../styles/ColorPickerFormStyles';

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newColorName: '',
      currentColor: 'purple',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleColorUpdate = this.handleColorUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', (value) => (
      this.props.colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    ));

    ValidatorForm.addValidationRule('isColorUnique', () => (
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    ));
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleColorUpdate(color) {
    const currentColor = color.hex;

    this.setState({ currentColor });
  }

  handleSubmit() {
    const { newColorName, currentColor } = this.state;
    const { addColor } = this.props;

    const newColor = {
      color: currentColor,
      name: newColorName,
    };

    addColor(newColor);
    this.setState({ newColorName: '' });
  }

  render() {
    const { paletteIsFull, classes } = this.props;
    const { newColorName, currentColor } = this.state;

    return (
      <div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.handleColorUpdate}
          className={classes.picker}
        />
        {/* ? Make sure this ref still works, ref='form' */}
        <ValidatorForm
          onSubmit={this.handleSubmit}
          ref={(c) => { this.form = c; }}
          instantValidate={false}
        >
          <TextValidator
            value={newColorName}
            label="color name"
            variant="filled"
            margin="normal"
            name="newColorName"
            onChange={this.handleChange}
            validators={['required', 'isColorNameUnique', 'isColorUnique']}
            errorMessages={['this field is required', 'Name must be unique', 'Color must be unique']}
            className={classes.colorName}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: paletteIsFull ? '#e0e0e0' : currentColor }}
            type="submit"
            disabled={paletteIsFull}
            className={classes.addColor}
          >
            {paletteIsFull ? 'Palette Is Full' : 'Add Color'}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
