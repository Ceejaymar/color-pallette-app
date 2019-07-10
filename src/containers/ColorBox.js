import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/styles';
import chroma from 'chroma-js';
import './colorBox.css';

const style = {
  colorBox: {
    width: '20%',
    height: props => props.showFullPalette ? '25%' : '50%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    '&:hover button': {
      opacity: '1'
    }
  },
  copyText: {
    color: props => chroma(props.background).luminance() > 0.08 ? 'black' : 'white'
  },
  colorName: {
    color: props => chroma(props.background).luminance() > 0.08 ? 'black' : 'white'
  },
  seeMore: {
    color: props => chroma(props.background).luminance() > 0.08 ? 'rgba(0, 0, 0, 0.8)' : 'white',
    backgroundColor: 'rgba(255, 255, 255, .3)',
    position: 'absolute',
    bottom: '0',
    right: '0',
    height: '30px',
    width: '100px',
    textAlign: 'center',
    lineHeight: '30px',
    textTransform: 'capitalize'
  },
  copyButton: {
    color: props => chroma(props.background).luminance() > 0.08 ? 'rgba(0, 0, 0, 0.8)' : 'white',
    width: '100px',
    height: '30px',
    display: 'inline-block',
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
    textTransform: 'uppercase',
    textDecoration: 'none',
    border: 'none',
    opacity: '0'
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0',
    bottom: '0',
    padding: '10px',
    color: 'black',
    letterSpacing: '1px'
  },
  copyOverlay: {
    opacity: '0',
    transform: 'scale(0.1)',
    zIndex: '0',
    width: '100%',
    height: '100%',
    transition: 'transform .6s ease-in-out'
  },
  showOverlay: {
    opacity: '1',
    transform: 'scale(50)',
    zIndex: '10',
    position: 'absolute'
  },
  copyMessage: {
    position: 'fixed',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '4rem',
    transform: 'scale(0.1)',
    opacity: '0',
    color: 'white',
    zIndex: '-1',
    '& h2': {
      fontWeight: '400',
      textShadow: '1px 2px rgba(0, 0, 0, 0.3)',
      background: 'rgba(255, 255, 255, 0.2)',
      width: '100%',
      textAlign: 'center',
      marginBottom: '0',
      padding: '1rem',
      textTransform: 'uppercase'
    },
    '& p': {
      fontSize: '2rem',
      fontWeight: '300'
    }
  },
  showMessage: {
    transform: 'scale(1)',
    opacity: '1',
    zIndex: '20',
    transition: 'all .2s ease-in-out',
    transitionDelay: '.1s'
  }
}

class ColorBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      copyOverlay: false
    };
  }

  changeCopyState = () => {
    this.setState({ copyOverlay: true }, () => {
      setTimeout(() => this.setState({ copyOverlay: false }), 800);
    });
  }

  render() {
    const { copyOverlay: copied  } = this.state; 
    const {
      background,
      name,
      paletteId,
      colorId,
      showFullPalette,
      classes: {
        copyText,
        colorName,
        seeMore,
        copyButton,
        colorBox,
        boxContent,
        copyOverlay,
        showOverlay,
        copyMessage,
        showMessage
      }
    } = this.props;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className={colorBox} style={{ background }}>
          <div className={`${copyOverlay} ${copied && showOverlay}`} style={{ background }} />
          <div className={`${copyMessage} ${copied && showMessage}`}>
            <h2>copied!</h2>
            <p className={`${copyText}`}>{background}</p>
          </div>
          <div className='color-box__copy-box'>
            <div className={`${boxContent}`}>
              <span className={`color-box__name ${colorName}`}>{name}</span>
            </div>
            <button className={`${copyButton}`}>Copy</button>
          </div>
          {
            showFullPalette && (
              <Link to={`/palette/${paletteId}/${colorId}`} onClick={e => e.stopPropagation()}>
                <span className={`${seeMore}`}>More colors</span>
              </Link>
            )
          }
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(style)(ColorBox);