import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from '../components/PaletteFooter';

const styles = {
  main: {
    height: '98vh',
    display: 'flex',
    flexDirection: 'column'
  },
  colors: {
    height: '90%'
  },
  goBack: {
    width: '20%',
    height: '50%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    opacity: '1',
    backgroundColor: 'black',
    '& a': {
      width: '100px',
      height: '30px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginLeft: '-50px',
      marginTop: '-15px',
      textAlign: 'center',
      outline: 'none',
      cursor: 'pointer',
      backgroundColor: 'rgba(255, 255, 255, .3)',
      fontSize: '1rem',
      color: 'white',
      textTransform: 'uppercase',
      textDecoration: 'none',
      border: 'none'
    }
  }
}

class SingleColorPalette extends Component {
  constructor(props) {
    super(props)

    this._shades = this.handleGetShades(this.props.palette, this.props.colorId);

    this.state = {
      format: 'hex'
    }
  }

  handleGetShades = (palette, filterColor) => {
    let shades = [];
    const allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(allColors[key].filter(color => color.id === filterColor));
    }

    return shades.slice(1);
  }

  handleFormatChange = (format) => {
    this.setState({ format })
  }

  render() {
    const { format } = this.state;
    const { palette: { paletteName, emoji, id }, classes: { main, colors, goBack }} = this.props;
    
    const colorBoxes = this._shades.map(color => {
      const { name } = color;

      return (
        <ColorBox
          key={name}
          name={name}
          background={color[format]}
          showingFullPalette={false}
        />
      )
    })

    return (
      <div className={`${main} palette--single`}>
        <Navbar handleFormatChange={this.handleFormatChange} showColorLevel={false} />
        <div className={`${colors}`}>
          {colorBoxes}
          <div className={`${goBack}`}>
            <Link to={`/palette/${id}`}>Go Back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);