import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { styles } from '../styles/LandingPageStyles';

function LandingPage(props) {
    const { classes } = props;
    return (
        <div>
            <div className={classes.root}>
                <Navbar />
            </div>
            <Footer/>
        </div>
    )
}

export default withStyles(styles)(LandingPage);