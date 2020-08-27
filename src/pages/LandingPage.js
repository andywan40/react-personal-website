import React from 'react';
import Grid from '@material-ui/core/Grid';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../styles/LandingPageStyles';

function LandingPage(props) {
    const { classes } = props;
    return (
        <div className={classes.all}>
            <div className={classes.root}>
                
                    <Navbar />
                    <Grid container direction="row" justify="center" className={classes.grid}>
                        <Grid item xs={3} md={4} lg={6} className={classes.item}>
                            <h5>Welcome to my website !</h5>
                            <p>I'm Andrew Wan and I'm a full stack web developer</p>
                        </Grid>
                    </Grid>
                    
            </div>
            <Footer/>
        </div>
    )
}

export default withStyles(styles)(LandingPage);