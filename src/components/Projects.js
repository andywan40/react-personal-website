import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { styles } from "../styles/ProjectsStyles";
import foodpicker from "../images/foodpicker.jpg";

const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    title: "WannaBuy",
    desc: [
      "Designed for online shoppers to better keep track of interested items",
      "Front end built with HTML, CSS, JavaSCript, JQUery,BootStrap",
      "Back end built with Node.js, Express, Mongoose and connected to MongoDB",
    ],
    link: "https://powerful-journey-37111.herokuapp.com/",
  },
  {
    image: foodpicker,
    title: "FoodPicker",
    desc: [
      "An app for people who have trouble deciding what to eat for every meal",
      "Front end built with React and Material UI",
      "Back end built with Node.js, Express",
    ],
    link: "https://react-foodpicker-app.herokuapp.com/",
  },
];

function Projects(props) {
  const { classes } = props;
  const gridItems = projects.map((project) => {
    return (
      <Grid item sm={10} md={6} lg={4} className={classes.grid}>
        <Card className={classes.card}>
          <CardActionArea className={classes.content}>
            <CardMedia
              className={classes.media}
              image={project.image}
              title={project.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {project.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <ul>
                  {project.desc.map((desc) => (
                    <li>{desc}</li>
                  ))}
                </ul>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.cardActions}>
            <Button size="small" color="primary">
              <a
                className={classes.link}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to Site
              </a>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  });

  return (
    <div className={classes.all}>
      <div className={classes.root}>
        <Navbar />
        <Grid container className={classes.container}>
          {gridItems}
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default withStyles(styles)(Projects);
