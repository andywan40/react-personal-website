import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { styles } from '../styles/LandingPageStyles';

function LandingPage(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <div className={classes.top}>
                <Button className={classes.titleBtn}>Andrew Wan</Button>
                <Button className={classes.button}>About</Button>
                <Button className={classes.button}>Projects</Button>
                <Button className={classes.button}>Resume</Button>
                <Button className={classes.button}>Contact</Button>
            </div>
        </div>
    )
}

export default withStyles(styles)(LandingPage);