import React from 'react';
import { Link  } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../styles/AboutStyles';
import Navbar from './Navbar';
import Footer from './Footer';

function About({classes}){
    return (
        <div className={classes.all}>
            <div className={classes.root}>
                <Navbar />
                <h3 className={classes.title}>About Me</h3>
                <div className={classes.container}>
                    <h4 className={classes.text}>
                        I currently am working as a Software Engineer at Asgard System, Inc.<br></br>
                        I am passionate about creating products that help improve the lives of many people.<br></br>
                        Outside of work, I enjoy playing basketball, working out and travelling. Tokyo is by far my favorite city, and I hope
                        to visit it again once the pandemic ends. I am also working on a few side projects 
                        including <a href="https://react-foodpicker-app.herokuapp.com/" target="_blank" rel="noopener noreferrer" className={classes.link}>FoodPicker </a>(a web app 
                        to generate random meals and provide recipes for people).
                    </h4>
                </div>
                <h6 className={classes.text}>Got any questions? <Link className={classes.link} to="/react-personal-website/contact">Contact me <span role="img" aria-label="contact">👋 </span></Link></h6>
                
            </div>
            <Footer/>
        </div>
    )
}

export default withStyles(styles)(About);