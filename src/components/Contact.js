import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import Navbar from './Navbar';
import Footer from './Footer';
import { styles } from '../styles/ContactStyles';

function Contact(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const {classes} = props;
    const handleSubmit = (e) => {
        e.preventDefault();
        const infoData = {
            name,
            email,
            message
        }
        setName("");
        setEmail("");
        setMessage("");
        const url = "https://immense-fortress-49913.herokuapp.com/submitMessage"
        axios.post(url, infoData).then(res => {
            if(res.data.message){
                alert("I will get back to you soon. Thank you !")
            }else{
                alert("Please try again!")
            }
        })
    }
    const handleChange = (e, setFunc) => {
        setFunc(e.target.value);
    }
    return (
        <div className={classes.all}>
        <div className={classes.root}>
            <Navbar />
            <Grid container direction="row" justify="center">
                <Grid item xs={10} md={8} lg={6} xl={5} >
                    <div className={classes.bg}>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <h1 className={classes.title}>Get In Touch</h1>
                        <div className={classes.formDiv}>
                        <FormControl className={classes.formControl}>
                            <InputLabel className={classes.label} htmlFor="nameInput">Name</InputLabel>
                            <Input
                                required
                                id="nameInput"
                                value={name}
                                onChange={ e => handleChange(e, setName)}
                                startAdornment={
                                    <InputAdornment position="start">
                                    <AccountCircle />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel className={classes.label} htmlFor="emailInput">Email</InputLabel>
                            <Input
                                required
                                id="emailInput"
                                value={email}
                                onChange={e => handleChange(e,setEmail)}
                                startAdornment={
                                    <InputAdornment position="start">
                                    <EmailIcon/>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <TextField 
                            className={classes.message}
                            id="message"
                            label="Message"
                            multiline
                            rows={10}
                            value={message}
                            onChange={e => handleChange(e, setMessage)}
                            placeholder="Contact me...."
                            variant="outlined"
                        />
                        <Button type="submit" className={classes.button} color="primary" variant="contained" size="large">Submit</Button>
                        </div>
                    </form>
                    </div>
                    <div className={classes.iconDiv}>
                        <a href="https://www.linkedin.com/in/andrew-wan-537870172/" target="_blank" rel="noopener noreferrer"><LinkedInIcon className={classes.icon}/></a>
                        <a href="https://github.com/andywan40" target="_blank" rel="noopener noreferrer"><GitHubIcon className={classes.icon}/></a>
                        <a href="https://www.instagram.com/and__wan/" target="_blank" rel="noopener noreferrer"><InstagramIcon className={classes.icon}/></a>
                    </div>
                </Grid>
            </Grid>
        </div>
        <Footer/>
        </div>
    )
}


export default withStyles(styles)(Contact);