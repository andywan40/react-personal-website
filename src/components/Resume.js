import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { styles } from "../styles/ResumeStyles";
import ResumeItems from "./ResumeItems";
import {resumeSections} from "../helpers/content";

function Resume({classes}) {
  return (
    <div className={classes.all}>
      <div className={classes.root}>
        <Navbar />
        <Grid container className={classes.container}>
          {resumeSections.map( section => (
            <ResumeItems section={section} key={section.title}/>
          ))}
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default withStyles(styles)(Resume);
