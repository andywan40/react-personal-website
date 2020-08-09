import React, { Component }from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Slide from '@material-ui/core/Slide';
import {styles} from '../styles/PopupStyles.js';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Popup extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button onClick={this.handleClickOpen} className={classes.navbtn}>
          <MenuIcon/>
        </Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
            <DialogActions className={classes.dialogActions} >
                <Button onClick={this.handleClose} className={classes.btn}>
                    <Link to="/react-personal-website/about" className={classes.link}>About</Link>
                </Button>
                <Button onClick={this.handleClose} className={classes.btn}>
                    <Link to="/react-personal-website/projects" className={classes.link}>Projects</Link>
                </Button>
                <Button onClick={this.handleClose} className={classes.btn}>
                    <Link to="/react-personal-website/resume" className={classes.link}>Resume</Link>
                </Button>
                <Button onClick={this.handleClose} className={classes.btn}>
                    <Link to="/react-personal-website/contact" className={classes.link}>Contact</Link>
                </Button>
            </DialogActions>
         
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(Popup);