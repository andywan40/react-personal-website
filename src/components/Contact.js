import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Navbar from './Navbar';
import { styles } from '../styles/ContactStyles';

function Contact(props) {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <Navbar />
            <h1>This is the Contact page</h1>
            
        </div>
    )
}


export default withStyles(styles)(Contact);