import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MiniPalette from '../components/MiniPalette';
import styles from '../styles/PaletteBoardStyles';

class PaletteBoard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      openDialogDelete: false,
      idToDelete: ''
    };
  }

  openDialog = (id) => {
    this.setState({ openDeleteDialog: true, idToDelete: id });
  }

  closeDialog = () => {
    this.setState({ openDeleteDialog: false, idToDelete: '' });
  }

  handleDelete = () => {
    const { deletePalette } = this.props;
    const { idToDelete } = this.state;

    deletePalette(idToDelete);
    this.closeDialog();
  }

  handleGoToPalette = (id) => {
    this.props.history.push(`/palette/${id}`)
  }

  render() {
    const { palettes, classes: { root, container, nav, palette } } = this.props;
    const { openDeleteDialog } = this.state;

    return (
      <div className={root}>
        <div className={container}>
          <nav className={nav}>
            <h1>Color picker</h1>
            <Link to='/palette/new'>Create new palette</Link>
          </nav>
          <TransitionGroup className={palette}>
            {
              palettes.map(palette => (
                <CSSTransition key={palette.id} classNames='fade' timeout={500}>
                  <MiniPalette
                    key={palette.id}
                    {...palette}
                    handleGoToPalette={() => this.handleGoToPalette(palette.id)}
                    openDialog={this.openDialog}
                    id={palette.id}
                  />
                </CSSTransition>
              ))
            }
          </TransitionGroup>
        </div>
        <Dialog
          open={openDeleteDialog}
          aria-labelledBy='delete-dialog-title'
          onClose={this.closeDialog}
        >
          <DialogTitle id='delete-dialog-title'>Delete this palette?</DialogTitle>
          <List>
            <ListItem button onClick={this.handleDelete}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: blue[200], color: blue[600] }}>
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Delete</ListItemText>
            </ListItem>
            <ListItem button onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[200], color: red[600] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Cancel</ListItemText>
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteBoard);
