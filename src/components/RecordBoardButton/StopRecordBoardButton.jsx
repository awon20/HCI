import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

//-------------- get firebase-configuration --------------------
import { app } from "../../base"
import firebase from "firebase";
const db = app.firestore();
const storage = app.storage();


// set the transition properties
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


// set the button properties
export const BoardButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 24,
    padding: "6px 16px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#dd5f5f",
    borderColor: "#dd5f5f",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#D43535",
      borderColor: "#D43535",
      boxShadow: "none",
    },
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  textFieldStyle: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export function StopRecordBoardButton(props) {
  // add hook for button
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [username, setUsername] = React.useState("Max Mustermann");
  const [sketchname, setSketchname] = React.useState("Titel des Sketches");
  const [canvas, setCanvas] = React.useState({ ...props.canvas });
  const [usernameError, setUsernameError] = useState(false)
  const [sketchnameError, setSketchnameError] = useState(false)

  // const [text, setText] = React.useState("")

  // const [newSketches, setNewSketches] = useState("");

  // const [done, setDone] = useState(undefined);

  const history = useHistory();

  const routeChange = () => {
    let path = `/sketchboard-summary`;
    history.push(path);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const onChangeCanvas = () => {
    setCanvas()
  }
  // ----------------------- setusername on firestore ---------------------------
  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // ----------------------- setsketchname on firestore  ---------------------------
  const onSketchnameChange = (e) => {
    setSketchname(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setUsernameError(false)
    setSketchnameError(false)

    if (username === '') {
      setUsernameError(true)
    }
    if (sketchname === '') {
      setSketchnameError(true)
    }
    if (username && sketchname) {
      fetch('http://localhost:8000/sketches', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ username, sketchname })
      }).then(() => history.push('/sketchboard-summary'))
    } 
  }
  
  // -----------------------upload images as svg to the storage ---------------------------
  const onUploadCanvas = async (canvasRef) => {
    const image = canvas
    console.log(image);
    const blob = await (await fetch(image)).blob();
    const storageRef = storage.ref();
    const sketchesRef = storageRef.child(username);
    // Create the file metadata
    var metadata = {
      contentType: "image/jpeg",
    };
    console.log(image);
    sketchesRef.put(blob, metadata).then(() => {
      console.log("Uploaded a raw svg!");
    });
    db.collection("albums")
      .doc(image)
      .update({
        images: firebase.firestore.FieldValue.arrayUnion({
          name: username,
          sketchname: sketchname,
          url: await sketchesRef.getDownloadURL(),
        }),
      });
  };
 useEffect(() => {
      setCanvas(props.canvas);
    }, [props.canvas]);
  

  return (
    <div>
      <Box display="flex" justifyContent="center" m={4}>
        {/* stop Board recording */}
        <BoardButton
          variant="contained"
          color="primary"
          disableRipple
          onClick={() => {
            onChangeCanvas();
            handleClickOpen();
            onUploadCanvas();
          }}
        >
          <Typography
            variant="button"
            component="h2"
            align="center"
            display="block"
          >
            Board Abschliessen
          </Typography>
        </BoardButton>
      </Box>
      <Dialog
        open={open}
        onClose={routeChange}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        transitionDuration={500}
        TransitionComponent={Transition}
        keepMounted
      >
        <DialogTitle id="alert-dialog-title">
          {"Ihre Aufzeichnung wird gespeichert!"}
        </DialogTitle>
      </Dialog>
      <Box display="flex" justifyContent="center">
        <form className={classes.textFieldStyle} noValidate autoComplete="off">
          <TextField
            value={username}
            onChange={onUsernameChange}
            id="outlined-basic"
            type="text"
            required
            label="Username"
            variant="outlined"
            inputProps={{
              maxLength: 32,
            }}
          />
          <TextField
            id="outlined-basic"
            value={sketchname}
            onChange={onSketchnameChange}
            required
            label="Sketchname"
            fullWidth
            variant="outlined"
            inputProps={{
              maxLength: 32,
            }}
          />
        </form>
      </Box>
    </div>
  );
}