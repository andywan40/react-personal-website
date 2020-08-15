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
import { styles } from '../styles/ProjectsStyles';

function Projects(props) {
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
                        image="https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        title="Wannabuy"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            WANNABUY
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <ul>
                                <li> Designed for online shoppers to better keep track of interested items</li>
                                <li> Front end built with HTML, CSS, JavaSCript, JQUery, BootStrap</li>
                                <li>Back end built with Node.js, Express, Mongoose and connected to MongoDB</li>
                            </ul>
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            <a className={classes.link} href="https://powerful-journey-37111.herokuapp.com/" target="_blank">Go to Site</a>
                        </Button>
                    </CardActions>
                </Card>
                </Grid>
            </Grid>
        </div>
        <Footer/>
        </div>
    )
}


export default withStyles(styles)(Projects);