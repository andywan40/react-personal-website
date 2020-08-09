import React from 'react';
import Grid from '@material-ui/core/Grid';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../styles/LandingPageStyles';

function LandingPage(props) {
    const { classes } = props;
    return (
        <div>
            <div className={classes.root}>
                
                    <Navbar />
                    <Grid container className={classes.gridContainer1}>
                        <Grid item xs={2} md={3} lg={4} xl={6}className={classes.gridItem1}>
                            <h1 className={classes.desc1}>Hi, I'm Andrew Wan!</h1>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justify="flex-end" className={classes.gridContainer2}>   
                        <Grid item xs={2} md={3} lg={4} xl={6} className={classes.gridItem2}>
                            <h1 className={classes.desc2}>I'm a Full Stack Web Developer</h1>
                        </Grid>  
                    </Grid>
                    <Grid container className={classes.gridContainer3}>
                        <Grid item xs={2} md={3} lg={4} xl={6}className={classes.gridItem3}>
                            <h1 className={classes.desc3}>Welcome!</h1>
                        </Grid>
                    </Grid>
                    
            </div>
            <Footer/>
        </div>
    )
}

export default withStyles(styles)(LandingPage);