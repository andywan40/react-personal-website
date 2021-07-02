import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { styles } from "../styles/ProjectsStyles";
import foodpicker from "../images/foodpicker.jpg";
import ProjectItems from "./ProjectItems";

const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    title: "WANNABUY",
    desc: [
      "Designed for online shoppers to better keep track of interested items",
      "Front end built with HTML, CSS, JavaSCript, JQUery,BootStrap",
      "Back end built with Node.js, Express, Mongoose and connected to MongoDB",
    ],
    link: "https://powerful-journey-37111.herokuapp.com/",
  },
  {
    image: foodpicker,
    title: "FOODPICKER",
    desc: [
      "Designed and built for people who have trouble deciding what to eat. Showcases images and provides recipes of different dishes with the help of the Unsplash and Edamam API",
      "Front end built with React and Material UI",
      "Back end built with Node.js, Express",
    ],
    link: "https://react-foodpicker-app.herokuapp.com/",
  },
];

function Projects({classes}){
  return (
    <div className={classes.all}>
      <div className={classes.root}>
        <Navbar />
        <Grid container className={classes.container}>
          {projects.map( project => (
            <ProjectItems project={project} key={project.title}/>
          ))}
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default withStyles(styles)(Projects);
