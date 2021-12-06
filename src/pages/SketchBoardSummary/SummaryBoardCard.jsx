import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CardSketches from "./CardSketches";
import { useGetData } from "../../hooks/useGetData";



const useStyles = makeStyles({
  root: {
    minWidth: 350,
    minHeight: 350,
    display: "inherit",
    alignItems: "center",  
  },
  media: {
    height: 280,
  },
});


export default function SummaryBoardCard() {
  const classes = useStyles();
  const [userSketchData] = useGetData();
  for (var i = 0; i < userSketchData.length; i++) {
    if (userSketchData[i].id === "") {
      return userSketchData[i];
    }
  }
  // const userData =  userSketchData[Object.keys(userSketchData)[0]];
  // console.log(userData);
  //  const match = useRouteMatch("/:sketch");
  //  const { sketch } = match.params;

  // useEffect(() => {
  //   const fetchUsersData = async () => {
  //     const usersCollections = await db.collection("Sketching").get();
  //       setUsersData(
  //         usersCollections.docs.map((doc) => {
  //           // console.log(doc.data())
  //           return doc.data();
  //         })
  //       );
  //   };
  //   fetchUsersData();
   
  // }, [usersData]);
  // useEffect(() => {
  //   const fetchUsersData = async () => {
  //     db.collection("Sketching")
  //       .doc()
  //       .onSnapshot((doc) => {
  //         setImagesUrl(doc.data().imagesUrl || []);
  //         setUsersData(doc.data().username);
  //       });
  //   };
  //   // console.log(usersData[0]);
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
        { userSketchData[i] && userSketchData[i].map(({ id, value }) => (
            <CardActionArea component={Link} to="/sketchboard-saving" key={id}>
              <CardMedia
                component="img"
                className={classes.media}
                image={value.urlSketch || "http://via.placeholder.com/280x200"}
                title="sketch"
                height="280"
                width="200"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {value.sketchName}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Erstellt vom {value.username} am{" "}
                  {/* {value.sketchesTime.toDate().toDateString()} */}
                </Typography>
              </CardContent>
            </CardActionArea>
          ))}
      </Card>
    </Container>
  );
}
