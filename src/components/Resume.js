import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { styles } from "../styles/ResumeStyles";
const resumeSections = [
  {
    title: "Education",
    image:
      "https://images.unsplash.com/photo-1509869175650-a1d97972541a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    desc: [
      { text: "University of California, San Diego", important: true },
      { text: "Graduated June 2019", important: true },
      { text: "B.S. Nanoengineering , 3.62 GPA", important: true },
    ],
  },
  {
    title: "Experience",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    desc: [
      {
        text: "Software Engineer at Asgard System",
        important: true,
        children: "Taipei,Taiwan / Oct, 2020 - Current",
      },
      {
        text: "Designed a new and robust front end structure with Vueand Vuex and developed reusable UI components for future use",
        important: false,
      },
      {
        text: "Led frontend projects of internal web applications for banks and insurance companies",
        important: false,
      },
      {
        text: "Added new API endpoints to improve UI experience and overall app functionality",
        important: false,
      },
      {
        text: "Developed reusable functions and integrated them with existing Javascript libraries to streamline the frontend development process",
        important: false,
      },
      {
        text: "Software Engineer Intern at Asgard System",
        important: true,
        children: "Taipei,Taiwan / Oct, 2020 - Current",
      },
      {
        text: "Main focus was to create a robust front end structure with React and Redux that fits well with existing Spring Boot projects and create reusable components for future use",
        important: false,
      },
      {
        text: "Designed and implemented new project structure and architecture",
        important: false,
      },
    ],
  },
  {
    title: "Skills",
    image:
      "https://images.unsplash.com/photo-1509770293056-483fcbd13e30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    desc: [
      {
        text: "Languages:",
        important: true,
        children: "Javascript, HTML, CSS, Python, Java, SQL",
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
function Resume(props) {
  const { classes } = props;
  const gridItems = resumeSections.map((section) => {
    return (
      <Grid item xs={10} sm={8} md={3} className={classes.grid}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={section.image}
              title={section.title}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {section.title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.cardTypo}
              >
                <ul>
                  {section.desc.map((desc) => (
                    <>
                      <li
                        style={
                          desc.important
                            ? {
                                fontWeight: 900,
                                marginTop: "0.5rem",
                              }
                            : { fontWeight: 400 }
                        }
                      >
                        {desc.text}
                        {desc.children ? (
                          <p style={{ marginTop: 0, marginBottom: "0.5rem", fontWeight: 500 }}>
                            {desc.children}
                          </p>
                        ) : (
                          <></>
                        )}
                      </li>
                    </>
                  ))}
                </ul>
              </Typography>
            </CardContent>
          </CardActionArea>
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

export default withStyles(styles)(Resume);
