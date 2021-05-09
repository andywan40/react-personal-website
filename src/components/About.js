import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Navbar from './Navbar';
import Footer from './Footer';
import { styles } from '../styles/AboutStyles';
import aboutMe from '../images/aboutMe.jpg';

function About(props) {
    const {classes} = props;
    return (
        <div className={classes.all}>
            <div className={classes.root}>
                <Navbar />
                <div className={classes.desc}>
                    <Grid container >
                        <Grid item lg={6} >
                            <h3 className={classes.title}>About Me</h3>
                            <h4 className={classes.text}>
                                I am a full stack web developer based in Taipei, Taiwan.<br></br>
                                I am passionate about creating products that help improve the lives of many people. 
                                I also enjoy playing basketball, working out, and travelling.
                            </h4>
                        </Grid>
                        <Grid item lg={6} >
                            <img src={aboutMe} className={classes.img} alt="my pic"/>
                        </Grid>
                        
                            
                    </Grid>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default withStyles(styles)(About);