import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Navbar from './Navbar';
import { styles } from '../styles/ProjectsStyles';

function Projects(props) {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <Navbar className={classes.darkNav}/>
            <h1>This is the Projects page</h1>
            
        </div>
    )
}


export default withStyles(styles)(Projects);