import React from 'react';
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
    const {classes} = props;
    return (
        <div className={classes.all}>
        <div className={classes.root}>
            <Navbar />
            <Grid container direction="row" justify="center">
                <Grid item xs={10} md={8} lg={6} xl={5} >
                    <div className={classes.bg}>
                    <form className={classes.form}>
                        <h1 className={classes.title}>Get In Touch</h1>
                        <div className={classes.formDiv}>
                        <FormControl className={classes.formControl}>
                            <InputLabel className={classes.label} htmlFor="nameInput">Name</InputLabel>
                            <Input
                                required
                                id="nameInput"
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
                            defaultValue="Contact me...."
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