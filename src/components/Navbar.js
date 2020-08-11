import React from 'react';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { styles } from '../styles/NavbarStyles';
import Logo from '../images/logo.png';
import Popup from '../components/Popup';


function Navbar(props){

        const {classes} = props;
        return (
            <div className={classes.top}>
                <Grid container direction="row" alignItems="center" spacing={3}>
                    <Grid item lg={6} xs={4} > <Button className={classes.titleBtn}><Link to="/react-personal-website" className={classes.link}><img alt="logo" src={Logo} className={classes.logo}/></Link></Button> </Grid>
                    <Grid container lg={6} xs={8}  justify="flex-end" >
                        <Grid item sm={2} > <Button className={classes.button}><Link to="/react-personal-website/about" className={classes.link}>About</Link></Button> </Grid>
                        <Grid item sm={2} > <Button className={classes.button}><Link to="/react-personal-website/projects" className={classes.link}>Projects</Link></Button> </Grid>
                        <Grid item sm={2} > <Button className={classes.button}><Link to="/react-personal-website/resume" className={classes.link}>Resume</Link></Button> </Grid>
                        <Grid item sm={2} > <Button className={classes.button}><Link to="/react-personal-website/contact" className={classes.link}>Contact</Link></Button> </Grid>
                        <Grid item xs={3} className={classes.hamburger}><Popup/></Grid>
                    </Grid>
                </Grid>

            </div>
        )
    }


export default withStyles(styles)(Navbar);