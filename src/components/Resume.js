import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Navbar from './Navbar';
import Footer from './Footer';
import { styles } from '../styles/ResumeStyles';

function Resume(props) {
    const {classes} = props;
    return (
        <div className={classes.all}>
        <div className={classes.root}>
            <Navbar />
            <Grid container className={classes.container}>
                <Grid item sm={10} md={6} lg={4} className={classes.grid}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="https://images.unsplash.com/photo-1509869175650-a1d97972541a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        title="Education"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Education
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <ul>
                                <li> University of California, San Diego</li>
                                <li> Graduated June 2019</li>
                                <li>B.S. Nanoengineering , 3.62 GPA</li>
                            </ul>
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Grid>
                <Grid item sm={10} md={6} lg={4} className={classes.grid}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        title="Experience"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Experience
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <ul>
                                <li> Software Engineer Intern at Asgard System <br></br> Taipei, Taiwan / June, 2020 - Sep, 2020</li>
                                <li> Main focus was to create a robust front end structure with React and Redux that fits well with existing Spring Boot projects and create reusable components for future use</li>
                                <li> Designed and implemented new project structure and architecture</li>
                                <li> Developed internal web applications in Spring Boot for banks and insurance companies</li>
                                <li> Added new API endpoints to improve UI experience and overall app functionality</li>
                            </ul>
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    
                </Card>
                </Grid>
                <Grid item sm={10} md={6} lg={4} className={classes.grid}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="https://images.unsplash.com/photo-1509770293056-483fcbd13e30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        title="Skills"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Skills
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <ul>
                                <li> <strong>Languages: </strong><br></br>HTML, CSS, Javascript, Python, Java, English, Mandarin</li>
                                <li> <strong>Technologies:</strong> <br></br>React, Node.js, JQuery, Redux, MongoDB, Git, Express.js, BootStrap, Material UI, Visual Studio Code, Eclipse</li>
                                
                            </ul>
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Grid>
            </Grid>
            
        </div>
        <Footer/>
        </div>
    )
}


export default withStyles(styles)(Resume);



