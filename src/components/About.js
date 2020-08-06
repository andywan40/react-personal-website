import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Navbar from './Navbar';
import { styles } from '../styles/AboutStyles';

function About(props) {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <Navbar />
            <h1>This is the about page</h1>
            
        </div>
    )
}

export default withStyles(styles)(About);