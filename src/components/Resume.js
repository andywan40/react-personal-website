import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { styles } from "../styles/ResumeStyles";
import ResumeItems from "./ResumeItems";

const resumeSections = [
  {
    title: "EDUCATION",
    image:
      "https://images.unsplash.com/photo-1509869175650-a1d97972541a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    desc: [
      { text: "University of California, San Diego", important: true },
      { text: "Graduated June 2019", important: true },
      { text: "B.S. Nanoengineering , 3.62 GPA", important: true },
    ],
  },
  {
    title: "EXPERIENCE",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    desc: [
      {
        text: "Software Engineer at Asgard System",
        important: true,
        children: "Taipei,Taiwan / Oct, 2020 - Current",
      },
      {
        text: "Learned Vue.js within a month and designed and implemented various front-end components.",
        important: false,
      },
      {
        text: "Contributed to an in-house UI library by creating reusable UI components that increased development efficiency by 30%",
        important: false,
      },
      {
        text: "Served as a bridge between frontend, ui/ux designers and backend developers",
        important: false,
      },
      {
        text: "Led the frontend aspect of a project for a client with over 200 users spanning multiple applications",
        important: false,
      },
       {
        text: "Added new API endpoints to improve UI experience and overall app functionality",
        important: false,
      },
      {
        text: "Software Engineer Intern at Asgard System",
        important: true,
        children: "Taipei,Taiwan / Oct, 2020 - Current",
      },
      {
        text: "Designed and implemented a feature-rich user interface using React and Redux to handle and display data",
        important: false,
      },
      {
        text: "Developed reusable functions and integrated them with existing Javascript libraries to streamline the frontend development process and decrease development time by over 40%",
        important: false,
      },
    ],
  },
  {
    title: "SKILLS",
    image:
      "https://images.unsplash.com/photo-1509770293056-483fcbd13e30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    desc: [
      {
        text: "Languages:",
        important: true,
        children: "Javascript, HTML, CSS, Python, SQL",
      },
      {
        text: "Technologies:",
        important: true,
        children:
          "React, Vue, jQuery, Node.js, Express.js, Redux, Vuex, MySQL, MongoDB, BootStrap, Material UI, Git",
      },
      {
        text: "Spoken Languages:",
        important: true,
        children: "English, Mandarin",
      },
    ],
  },
];

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
