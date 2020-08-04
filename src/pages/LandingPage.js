import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar';
import { styles } from '../styles/LandingPageStyles';

function LandingPage(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Navbar />
        </div>
    )
}

export default withStyles(styles)(LandingPage);