import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Navbar from './Navbar';
import Footer from './Footer';
import { styles } from '../styles/ProjectsStyles';

function Projects(props) {
    const {classes} = props;
    return (
        <div className={classes.all}>
        <div className={classes.root}>
            <Navbar />
            <h1>This is the projects page</h1>
        </div>
        <Footer/>
        </div>
    )
}


export default withStyles(styles)(Projects);