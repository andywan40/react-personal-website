import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../styles/NavbarStyles';
import Logo from '../images/logo.png';
import Popup from '../components/Popup';

function Navbar({classes}){
    const activeStyle = {
        fontWeight: 800,
        color: "#fff",
    }
    return (
        <div className={classes.top}>
            <Link to="/react-personal-website" className={classes.link}><img alt="logo" src={Logo}/></Link>
            <div></div>
            <div className={classes.navlinkdiv}>
                <NavLink to="/react-personal-website/about" className={classes.navlink} activeStyle={activeStyle}>About</NavLink>
                <NavLink to="/react-personal-website/projects" className={classes.navlink} activeStyle={activeStyle}>Projects</NavLink>
                <NavLink to="/react-personal-website/resume" className={classes.navlink} activeStyle={activeStyle}>Resume</NavLink>
                <NavLink to="/react-personal-website/contact" className={classes.navlink} activeStyle={activeStyle}>Contact</NavLink>
                <div className={classes.hamburger}><Popup/></div>
            </div>
        </div>
    )
}

export default withStyles(styles)(Navbar);