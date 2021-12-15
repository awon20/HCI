import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer as MUIDrawer } from "@material-ui/core/";import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import clsx from "clsx";
import { Paper, Box, Button } from "@material-ui/core";
import { ButtonGroup } from "../BoardLayout/button-group/button-group";
//-------------- drowing-component --------------------
import CanvasDraw from "react-canvas-draw";
import { useGetData } from "../../hooks/useGetData";

//-------------- Tools-component --------------------
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TextField from "@material-ui/core/TextField";

import {
  StartRecordBoardButton,
  StopRecordBoardButton,
  CameraMicroBox,
  RecordingView,
  UndoButton,
  EraserButton,
  RedoButton,
} from "../../components";


//-------------- get firebase-configuration --------------------
import { app } from "../../services/base"
import firebase from "firebase";

const drawerWidth = 690;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 0,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerContainer: {
    overflow: "auto",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  BtnStartSketchRec: {
    margin: theme.spacing(10, "auto"),
  },
  styledComponents: {
    margin: theme.spacing(5, "auto"),
    // width: theme.spacing("auto")
  },
  contentAlign: {
    margin: theme.spacing(5, "auto"),
  },
  BtnStopSketchRec: {
    margin: theme.spacing(10, "auto"),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
  },
  toolsStyles: {
    // width: "fit-content",
    height: "fit-content",
    border: `2px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    "& svg": {
      margin: theme.spacing(1.5),
      height: "50px",
      width: "50px",
      marginRight: "20px",
      marginLeft: "20px",
    },
    "& hr": {
      margin: theme.spacing(0, 0.5),
    },
    active: {
      background: "#f4f4f4",
    },
  },
  textFieldStyle: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  sketchUrl: {
    height: drawerWidth,
  },
}));

const colors = [
  "Black",
  "Green",
  "Yellow",
  "Blue",
  "Red",
  "Brown",
  "Orange",
  "Purple",
  "Pink",
  "Grey",
];

const lineWidths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export  function SketchBoardEditing() {
  const classes = useStyles();
  const canvasRef = useRef(null);
  const [value, setValue] = React.useState(1);
  const [selectedColor, setSelectedColor] = React.useState(colors[0]);
  const [selectedLineWidth, setSelectedLineWidth] = React.useState(
    lineWidths[4]
  );
  const [sketchUrl, setSketchUrl] = React.useState([]);
  const [username, setUsername] = React.useState("");
  const [sketchName, setSketchName] = React.useState("");
  const [usernameError, setUsernameError] = React.useState(false);
  const [sketchNameError, setSketchNameError] = React.useState(false);
  const [urlSketch, setUrlSketch] = React.useState("");
  const [sketchesTime, setSketchesTime] = React.useState("");
  const [userSketchData] = useGetData();

  //-------------- get firebase-storage and firestore-API --------------------
  const db = app.firestore();
  const storage = app.storage();

  const handleClear = () => {
    canvasRef.current.clear();
  };

  const handleUndo = () => {
    canvasRef.current.undo();
  };

  // ----------------------- setusername on firestore  ---------------------------
  const getUserName = (e) => {
    setUsername(e.target.value);
  };

  // ----------------------- setsketchname on firestore  ---------------------------
  const getSketchName = (e) => {
    setSketchName(e.target.value);
  };

  // -----------------------upload images as svg to the storage ---------------------------
  const onUploadCanvas = async (e) => {
    e.preventDefault();
    setUsernameError(false);
    setSketchNameError(false);
    setSketchesTime();

    if (username === "") {
      setUsernameError(true);
    }
    if (sketchName === "") {
      setSketchNameError(true);
    }
    if (!username && !sketchName) {
      return;
    }
    // Sending File to Firebase Storage
    const image = canvasRef.current.getDataURL();
    const blob = await (await fetch(image)).blob();
    const storageRef = storage.ref();
    // const sketchesRef = storageRef.child("sketching/" + sketchName);
    // Create the file metadata
    var metadata = {
      contentType: "image/png",
    };
    // Upload file and metadata to the object 'sketching'
    var uploadTask = storageRef
      .child("sketching/" + sketchName + ".png")
      .put(blob, metadata);
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Sketch Upload is " + progress + "% done");
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log(" Sketch Upload is paused");
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log("Sketch Upload is running");
            break;
          default:
            console.log("Sketch Upload is now running");
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;
          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
          default:
            console.log("Sketch Upload is no running");
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then(
          (downloadURL) => {
            db.collection("Sketching")
              .doc(username, sketchName, urlSketch, sketchesTime)
              .set({
                username: username,
                sketchName: sketchName,
                urlSketch: downloadURL + ".png",
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
              })
              .then(function () {
                console.log("UsersData successfully written!");
              })
              .catch(function (error) {
                console.error("Error writing UsersData: ", error);
              });
            setUrlSketch(downloadURL);
            // console.log(downloadURL);
          },
          (error) => {
            // failed to get download URL
            console.log(error);
          }
        );
      }
    );
  };

  React.useEffect(() => {
    const SketchData = userSketchData.slice(-1);
    SketchData.forEach(function (data) {
      if (data) {
        setSketchUrl(data.value.urlSketch);
      }
    });
    console.log(sketchUrl);
  }, [userSketchData, sketchUrl]);

  return (
    <div className={classes.root}>
      <CssBaseline />

      <MUIDrawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
   
      {/* Control SideBar Button */}
      <div>
        <Box
          className={clsx(classes.styledComponents, classes.BtnStartSketchRec)}
          sx={{ m: 2 }}
        >
          {/* SketchBoard Start recording from components RecordBoardButton */}
          <StartRecordBoardButton onClick={(e) => console.log("start")} />
        </Box>
      </div>
      <div>
        <Box
          className={clsx(classes.styledComponents, classes.contentAlign)}
          sx={{ m: 2 }}
        >
          {/* RecordView for Video from components VideoRecorderComponent  */}
          <RecordingView />
        </Box>
      </div>
      <div>
        <Box
          className={clsx(classes.styledComponents, classes.contentAlign)}
          sx={{ m: 2 }}
        >
          <Paper elevation={1}>
            {/* Camera and Micro from components CameraMicroBox*/}
            <CameraMicroBox />
          </Paper>
        </Box>
      </div>
      <div>
        <Box
          className={clsx(classes.styledComponents, classes.contentAlign)}
          sx={{ m: 2 }}
        >
          <Paper elevation={1}>
            {/* Utils Lists from components ToolsBox */}
            <BottomNavigation
              value={value}
              onChange={(event, value) => {
                setValue(value);
              }}
              className={classes.toolsStyles}
            >
              <BottomNavigationAction
                label="undo"
                value="undo"
                onClick={handleUndo}
                icon={<UndoButton />}
              />
              <BottomNavigationAction
                label="eraser"
                value="eraser"
                // ToDo
                onClick={handleClear}
                icon={<EraserButton />}
              />
              <ButtonGroup>
                <Button>
                  <label>Colors:</label>
                  <select
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                  >
                    {colors.map((color) => (
                      <option key={color} value={color}>
                        {color}
                      </option>
                    ))}
                  </select>
                </Button>
                <br />
                <Button>
                  <label>Brush-Radius:</label>
                  <select
                    value={selectedLineWidth}
                    onChange={(e) => setSelectedLineWidth(e.target.value)}
                  >
                    {lineWidths.map((line) => (
                      <option key={line} value={line}>
                        {line}
                      </option>
                    ))}
                  </select>
                </Button>
              </ButtonGroup>
              <BottomNavigationAction
                label="redo"
                value="redo"
                // ToDo
                onClick={(e) => console.log(e.target.value)}
                icon={<RedoButton />}
              />
            </BottomNavigation>
          </Paper>
        </Box>
      </div>
      <div>
        <Box
          sx={{ m: 10 }}
        >
          <form
            noValidate
            autoComplete="off"
            onSubmit={(e) => onUploadCanvas(e)}
          >
            <TextField
              className={classes.textFieldStyle}
              value={username}
              onChange={getUserName}
              onBlur={getUserName}
              id="outlined-basic"
              type="text"
              required
              label="Username"
              variant="outlined"
              inputProps={{
                maxLength: 32,
              }}
              error={usernameError}
            />
            <TextField
              className={classes.textFieldStyle}
              id="outlined-basic"
              value={sketchName}
              onChange={getSketchName}
              onBlur={getSketchName}
              required
              label="Sketchname"
              fullWidth
              variant="outlined"
              inputProps={{
                maxLength: 32,
              }}
              error={sketchNameError}
            />
          </form>
          {/* saving Sketch and Recording on Firebase  */}
          <StopRecordBoardButton
            uploadSketch={(e) => onUploadCanvas(e)}
          />
        </Box>
      </div>   
      </MUIDrawer>
      <div>
        <img src={sketchUrl} className={classes.sketchUrl} alt="sketches" />
        <CanvasDraw
          hideGrid
          hideInterface
          clampLinesToDocument
          ref={canvasRef}
          canvasWidth={1872}
          canvasHeight={drawerWidth}
          enablePanAndZoom={true}
          style={{ border: "1px solid #000" }}
          loadTimeOffset={10}
        />
      </div>
    </div>
  );
}
// Make the component reusable
// SketchBoardSaving.propTypes = {
//   canvasWidth: PropTypes.number.isRequired, // ADDED
//   canvasHeight: PropTypes.number.isRequired, // ADDED
// };
