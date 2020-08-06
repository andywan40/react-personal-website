import React from 'react';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { styles } from '../styles/NavbarStyles';

function Navbar(props) {
    const {classes} = props;
    return (
            <div className={classes.top}>
                <Button className={classes.titleBtn}><Link to="/react-personal-website" className={classes.link}>Andrew Wan</Link></Button>
                <Button className={classes.button}><Link to="/react-personal-website/about" className={classes.link}>About</Link></Button>
                <Button className={classes.button}><Link to="/react-personal-website/projects" className={classes.link}>Projects</Link></Button>
                <Button className={classes.button}><Link to="/react-personal-website/resume" className={classes.link}>Resume</Link></Button>
                <Button className={classes.button}><Link to="/react-personal-website/contact" className={classes.link}>Contact</Link></Button>
            </div>
    )
}


export default withStyles(styles)(Navbar);