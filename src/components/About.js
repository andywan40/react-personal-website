import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Navbar from './Navbar';
import Footer from './Footer';
import { styles } from '../styles/AboutStyles';

function About(props) {
    const {classes} = props;
    return (
        <div className={classes.all}>
            <div className={classes.root}>
                <Navbar />
                <div className={classes.desc}>
                    <h3>about me</h3>
                    <h4>
                        I am a full stack web developer based in Taipei,Taiwan and plan on moving to the Bay Area 
                        in the US. 
                        I am passionate about creating products that help improve the lives of many people. 
                        I also enjoy playing basketball, working out and drinking with friends. My favorite artists 
                        right now are Rod Wave, Polo G, and the Kid Laroi.
                    </h4>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default withStyles(styles)(About);