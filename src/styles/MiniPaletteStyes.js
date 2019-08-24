export default {
  root: {
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: "0.5rem",
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover $deleteIcon': {
      opacity: 1
    }
  },
  colorList: {
    height: '150px',
    width: '100%',
    backgroundColor: '#dae1e4',
    borderRadius: '5px',
    overflow: 'hidden'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    paddingTop: '0.5rem',
    fontSize: '1rem',
    position: 'relative'
  },
  emojiIcon: {
    marginRight: '0.5rem',
    fontSize: '1.5rem'
  },
  miniColor: {
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-3px'
  },
  delete: {

  },
  deleteIcon: {
    color: 'white',
    backgroundColor: '#eb3d30',
    width: '20px',
    height: '20px',
    position: 'absolute',
    right: '0',
    top: '0',
    padding: '10px',
    zIndex: 2,
    borderRadius: '4px',
    opacity: '0',
    transition: '.2s ease-in-out'
  }
}
