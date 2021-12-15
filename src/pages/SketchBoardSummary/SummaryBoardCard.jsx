import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { Divider } from "@material-ui/core/";


import { useGetData } from "../../hooks/useGetData";



const useStyles = makeStyles({
  root: {
    minWidth: 350,
    minHeight: 350,
    display: "inherit",
    alignItems: "center",
  },
  media: {
    width:  350,
    height: 250,
  },
});


export default function SummaryBoardCard() {
  const classes = useStyles();
  const [userSketchData] = useGetData();
  const SketchData = userSketchData.slice(-1);
  const sortedSketchData = SketchData.slice().sort(
    (a, b) => b.value.createdAt - a.value.createdAt
  );
  
 
  // console.time("array length property");
  // let lastElement = userSketchData[userSketchData.length - 1];
  // console.log(lastElement);
  // console.timeEnd("array length property");

  // console.time("array slice method");
  // let lastElement1 = userSketchData.slice(-1);
  // console.log(lastElement1);
  // console.timeEnd("array slice method");

  // console.time("array pop method");
  // let lastElement2 = userSketchData.pop();
  // console.log(lastElement2);
  // console.timeEnd("array pop method");

  //   fetchUsersData();  
  // }, [usersData]);
  // useEffect(() => {
  //   fetch("http://localhost:8000/Sketching")
  //     .then((res) => res.json())
  //     .then((data) => setUsersData(data));
  // }, []);
  
  return (
    <Container>
      <Card className={classes.root} elevation={5}>
        {sortedSketchData &&
          sortedSketchData.map(({ id, value }) => (
            <CardActionArea component={Link} to="/sketchboard-saving" key={id}>
              <CardMedia
                component="img"
                className={classes.media}
                image={value.urlSketch || "http://via.placeholder.com/350x350"}
                title="sketch-summary"
                height="350"
                width="350"
              />
              <Divider />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {value.sketchName}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Erstellt vom {value.username} am{" "}
                  {value.createdAt.toDate().toLocaleString("de-DE")}
                </Typography>
              </CardContent>
            </CardActionArea>
          ))}
      </Card>
    </Container>
  );
};
