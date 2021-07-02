import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import {styles} from '../styles/PopupStyles.js';

function Popup({classes}){
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div>
        <Button onClick={handleClickOpen} className={classes.navbtn}>
          <MenuIcon/>
        </Button>
        <Dialog
          open={open}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogActions className={classes.dialogActions} >
            <Button onClick={handleClose} className={classes.btn}>
              <Link to="/react-personal-website/about" className={classes.link}>About</Link>
            </Button>
            <Button onClick={handleClose} className={classes.btn}>
              <Link to="/react-personal-website/projects" className={classes.link}>Projects</Link>
            </Button>
            <Button onClick={handleClose} className={classes.btn}>
              <Link to="/react-personal-website/resume" className={classes.link}>Resume</Link>
            </Button>
            <Button onClick={handleClose} className={classes.btn}>
              <Link to="/react-personal-website/contact" className={classes.link}>Contact</Link>
            </Button>
          </DialogActions>
        </Dialog>
      </div>
  )
}

export default withStyles(styles)(Popup);