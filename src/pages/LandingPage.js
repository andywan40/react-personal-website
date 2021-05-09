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
                            <h1 className={classes.title}>Hi, I'm Andrew Wan</h1>
                            <p className={classes.desc}>Full Stack Developer</p>
                        </Grid>
                    </Grid>
                    
            </div>
            <Footer/>
        </div>
    )
}

export default withStyles(styles)(LandingPage);