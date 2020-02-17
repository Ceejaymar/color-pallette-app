import sizes from './sizes';

export default {
  main: {
    height: '98vh',
    display: 'flex',
    flexDirection: 'column',
  },
  paletteColors: {
    height: '90%',
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
      border: 'none',
    },
    [sizes.down('lg')]: {
      width: '75%',
      height: '33.5%',
    },
    [sizes.down('md')]: {
      width: '100%',
      height: '20%',
    },
    [sizes.down('sm')]: {
      width: '50%',
      height: '20%',
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: '10%',
    },
  },
};
