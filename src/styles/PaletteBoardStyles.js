import sizes from './sizes';
import bg from './bg.svg';

export default {
  '@global': {
    '.fade-exit': {
      opacity: 1
    },
    '.fade-exit-active': {
      opacity: 0,
      transition: '500ms ease-out'
    }
  },
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#c43b3b',
    backgroundImage: `url(${bg})`,
    /* background by SVGBackgrounds.com */
    [sizes.down('md')]: {
      overflow: 'scroll',
    }
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    [sizes.down('xl')]: {
      width: '70%'
    },
    [sizes.down('lg')]: {
      width: '60%'
    }
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    '& a': {
      color: 'white',
      textDecoration: 'none',
      '&:hover': {
        color: '#dfdfdf'
      }
    }
  },
  palette: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%',
    [sizes.down('md')]: {
      gridTemplateColumns: 'repeat(2, 50%)',
      gridGap: '3%'
    },
    [sizes.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 100%)',
      gridGap: '1%'
    }
  }
}
