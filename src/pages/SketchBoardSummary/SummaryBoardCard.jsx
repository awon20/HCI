import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
// import airplane from "../../images/air_plane.png"; // Tell webpack this JS file uses this image
import hci from "../../images/hci.png"; // Tell webpack this JS file uses this image
import { Link } from "react-router-dom";

const username = "Max Muster"
const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
  media: {
    height: 280,
  },
});


export default function SummaryBoardCard() {
  const classes = useStyles();
    // const history = useHistory();

    // const routeChange = () => {
    //   let path = `/sketchboard-saving`;
    //   history.push(path);
    // };

  return (
    <div>
      <Card sx={{ maxWidth: 345 }} elevation={5}>
        <CardActionArea component={Link} to="/sketchboard-saving">
          <CardMedia
            component="img"
            height="140"
            className={classes.media}
            image={hci}
            title="sketch"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              HCI Logo
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Bearbeitet vom {username} am 29.11.2021 um 15:30
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
