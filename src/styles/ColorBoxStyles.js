import chroma from 'chroma-js';
import sizes from './sizes';

export default {
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
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: props => props.showFullPalette ? '20%' : '33.5%',
    },
    [sizes.down('md')]: {
      width: '33.33%',
      height: props => props.showFullPalette ? '14.3%' : '27%',
    },
    [sizes.down('sm')]: {
      width: '50%',
      height: props => props.showFullPalette ? '10.05%' : '20%',
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: props => props.showFullPalette ? '5.05%' : '10%',
    },
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
    boxSizing: 'border-box',
    position: 'absolute',
    width: '100%',
    left: '0',
    bottom: '0',
    padding: '0 0 10px 10px',
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
      textTransform: 'uppercase',
      [sizes.down('xs')]: {
        fontSize: '5rem'
      }
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
