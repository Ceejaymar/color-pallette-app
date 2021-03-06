import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from '../components/PaletteFooter';
import styles from '../styles/PaletteStyles';

class Palette extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorLevel: 500,
      format: 'hex',
    };

    this.handleLevelChange = this.handleLevelChange.bind(this);
    this.handleFormatChange = this.handleFormatChange.bind(this);
  }

  handleLevelChange(colorLevel) {
    this.setState({ colorLevel });
  }

  handleFormatChange(format) {
    this.setState({ format });
  }

  render() {
    const {
      palette: { colors, paletteName, emoji, id },
      classes: { main, paletteColors },
    } = this.props;
    const { colorLevel, format } = this.state;

    const colorBoxes = colors[colorLevel].map((color) => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        colorId={color.id}
        paletteId={id}
        showFullPalette
      />
    ));

    return (
      <div className={`${main}`}>
        <Navbar
          colorLevel={colorLevel}
          handleLevelChange={this.handleLevelChange}
          handleFormatChange={this.handleFormatChange}
          showingColorLevel
        />
        <div className={`${paletteColors}`}>
          {colorBoxes}
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
