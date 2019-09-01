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
      currentColor: 'purple'
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  handleColorUpdate = (color) => {
    const currentColor = color.hex;

    this.setState({ currentColor });
  }

  handleSubmit = () => {
    const { newColorName, currentColor } = this.state;
    const { addColor } = this.props;

    const newColor = {
      color: currentColor,
      name: newColorName
    }

    addColor(newColor);
    this.setState({ newColorName: '' })
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', value => (
      this.props.colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    ));

    ValidatorForm.addValidationRule('isColorUnique', () => (
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    ));
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
        <ValidatorForm onSubmit={this.handleSubmit} ref='form'>
          <TextValidator
            value={newColorName}
            label='color name'
            variant='filled'
            margin='normal'
            name='newColorName'
            onChange={this.handleChange}
            validators={['required', 'isColorNameUnique', 'isColorUnique']}
            errorMessages={['this field is required', 'Name must be unique', 'Color must be unique']}
            className={classes.colorName}
          />
          <Button
            variant='contained'
            color='primary'
            style={{ backgroundColor: paletteIsFull ? '#e0e0e0' : currentColor }}
            type='submit'
            disabled={paletteIsFull}
            className={classes.addColor}
          >{paletteIsFull ? 'Palette Is Full' : 'Add Color'}</Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);