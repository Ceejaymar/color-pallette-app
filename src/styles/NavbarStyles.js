export default {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '6vh'
  },
  navLogo: {
    marginRight: '15px',
    padding: '0 15px',
    fontSize: '22px',
    backgroundColor: '#eceff1',
    fontFamily: 'Roboto',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& a': {
      textDecoration: 'none',
      color:' black'
    }
  },
  navSlider: {
    width: '340px',
    margin: '0px 10px',
    display: 'inline-block',
    '& .rc-slider-rail': {
      height: '10px'
    },
    '& .rc-slider-track': {
      backgroundColor: 'transparent'
    },
    '& .rc-slider-handle, .rc-slider-handle:active,.rc-slider-handle:focus,.rc-slider-handle:hover': {
      backgroundColor: 'mediumseagreen',
      outline: 'none',
      border: '2px solid mediumseagreen',
      boxShadow: 'none',
      height: '15px',
      width: '15px',
      marginTop: '-2.75px'
    }
  },
  navSelect: {
    marginLeft: 'auto',
    marginRight: '15px'
  }
}