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
import { styles } from "../styles/ProjectItemsStyles";

function ProjectItems({classes, project}) {
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
              <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                {project.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="div">
                <ul className={classes.ul}>
                  {project.desc.map((desc) => (
                    <li key={desc}>{desc}</li>
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
    )
}

export default withStyles(styles)(ProjectItems);