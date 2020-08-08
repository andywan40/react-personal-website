import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Navbar from './Navbar';
import Footer from './Footer';
import { styles } from '../styles/ResumeStyles';

function Resume(props) {
    const {classes} = props;
    return (
        <div>
        <div className={classes.root}>
            <Navbar />
            <h1>This is the resume page</h1>
        </div>
        <Footer/>
        </div>
    )
}


export default withStyles(styles)(Resume);