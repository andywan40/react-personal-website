import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { styles } from "../styles/ProjectsStyles";
import ProjectItems from "./ProjectItems";
import {projects} from "../helpers/content.js";

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
