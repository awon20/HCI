import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import airplane from "../../images/air_plane.png"; // Tell webpack this JS file uses this image


const useStyles = makeStyles({
  root: {
    maxWidth: 270,
  },
  media: {
    height: 280,
  },
});

export default function SummaryBoardCard() {
  const classes = useStyles();

  return (
    <Card elevation={5}>
      <CardActionArea>
        <CardMedia className={classes.media} image={airplane} title="sketch" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Portrait
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Bearbeitet am 13.10.2021 um 11:30
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
