import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { styles } from "../styles/ResumeItemsStyles";

function ResumeItems({classes, section}) {
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
              <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                {section.title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="div"
                className={classes.cardTypo}
              >
                <ul className={classes.ul}>
                  {section.desc.map((desc) => (
                    <li
                      style={
                          desc.important
                            ? {
                                fontWeight: 900,
                                marginTop: "0.5rem",
                              }
                            : { fontWeight: 400 }
                        }
                        key={desc.text}
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
                    
                  ))}
                </ul>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    )
}

export default withStyles(styles)(ResumeItems);