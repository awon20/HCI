import React, { useState, useRef, useCallback } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Box, Button } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import { ButtonGroup } from "./button-group/button-group";
import {
  Drawer as MUIDrawer,
} from "@material-ui/core/";
import { useHistory } from "react-router";

import {
  StartRecordBoardButton,
  StopRecordBoardButton,
  CameraMicroBox,
  RecordingButton,
  ToolsBox1, 
  UndoButton,
  EditButton,
  EraserButton,
  ColorsButton,
  DeleteAllButton,
  RedoButton, 
  SketchColors
  // Canvas,
  // RecordingAPI,
  // CanvasProvider
} from "../../components";
//-------------- drowing-component --------------------
import CanvasDraw from "react-canvas-draw";
//-------------- Tools-component --------------------
import { Icon } from "@iconify/react";
import eraserIcon from "@iconify-icons/mdi/eraser";
import {
  MdEdit,
  MdCrop,
  MdColorLens,
  MdDelete,
} from "react-icons/md";
import UndoIcon from "@material-ui/icons/Undo";
import RedoIcon from "@material-ui/icons/Redo";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ColorPicker from 'material-ui-color-picker'


//-------------- get firebase-configuration --------------------
import { app } from "../../base"
import firebase from 'firebase'
const db = app.firestore();
const storage = app.storage();


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
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const colors = ["Black", "Green", "Yellow", "Blue", "Red", "Brown","Orange","Purple", "Pink", "Grey"];

const lineWidths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function BoardLayout({currentSketch}) {
  // eslint-disable-next-line no-lone-blocks
  {
    /* Hook functions */
  }
  const classes = useStyles();
  const history = useHistory();
  const canvasRef = useRef(null);
  const canvasRefSave = useRef(null);
  const [value, setValue] = useState(1);
  const [sketches, setSketches] = useState([]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedLineWidth, setSelectedLineWidth] = useState(lineWidths[4]);
  // const { lines, setLines } = useState(
  //         { past:    [0], 
  //           present: [0], 
  //           future:  [0] 
  //         })



  const handleClear =  () => {
    canvasRef.current.clear();
  }

  const handleUndo = () => {
    canvasRef.current.undo();
  }

  // const clearExceptErasedLines= () =>{

  // }
  // const simulateDrawingLines = () => {

  // }
  // const triggerOnChange = () => {

  // }
  // const handleRedo = () => {
  //   const lines = canvasRef.current.lines;
  //   const next = lines[0]
  //   const newFuture = future.slice(1)
  //   return {
  //         past: [...past, present],
  //         present: next,
  //         future: newFuture
  //   }
  // }

  const handleClearAll = () => {
    canvasRef.current.eraseAll();
  }
  const handleResetView = () => {
    canvasRef.current.resetView();
  }

  const handleAdd = (sketch) => {
    const updatedSketches = [...sketches];
    updatedSketches.push(sketch);

    setSketches(updatedSketches);
  };
  // const downloadCanvas = (e) => {
  //   e.preventDefault();
  //   history.push("sketchboard-summary");
  // };
  // const SaveCanvas = () => {
  //   return canvasData
  //   // canvasRefSave.current.loadSaveData(canvasData);
  // }
  const onUploadCanvas = async () => {
    // -----------------------upload json-points to storage ---------------------------
    const image = canvasRef.current.getDataURL("image/svg");
    const blob = await (await fetch(image)).blob();
    const storageRef = storage.ref();
    const sketchesRef = storageRef.child("sketching/" + new Date());
    // Create the file metadata
    var metadata = {
      contentType: 'image/jpeg'
    };
    console.log(image);
    return sketchesRef.put(blob, metadata).then(() => {
      console.log("Uploaded a raw svg!");
    });
  };



  return (
    <div className={classes.root}>
      <MUIDrawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
        // variant="persistent"
      >
        {/* Control theme color  */}
        {/* <Box
            className={clsx(
              classes.styledComponents,
              classes.BtnStartSketchRec
            )}
          >
            <FormControlLabel
              control={
                <SwitchUI checked={isDark} onChange={handleThemeChange} />
              }
              label="Theme"
            />
          </Box> */}

        {/* Control SideBar Button */}
        <div>
          <Box
            className={clsx(
              classes.styledComponents,
              classes.BtnStartSketchRec
            )}
          >
            {/* SketchBoard Start recording from components RecordBoardButton */}
            <StartRecordBoardButton onClick={e=> console.log("start")}/>
          </Box>
        </div>
        <div>
          <Box className={clsx(classes.styledComponents, classes.contentAlign)}>
            {/* RecordView for Video from components VideoRecorderComponent  */}
            <RecordingButton />
          </Box>
        </div>
        <div>
          <Box className={clsx(classes.styledComponents, classes.contentAlign)}>
            <Paper elevation={1}>
              {/* Camera and Micro from components CameraMicroBox*/}
              <CameraMicroBox />
            </Paper>
          </Box>
        </div>
        <div>
          <Box className={clsx(classes.styledComponents, classes.contentAlign)}>
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
                  icon={<UndoButton  />} 
              />
              <BottomNavigationAction 
                label="edit" 
                value="edit" 
                icon={<EditButton />} 
              />
              <BottomNavigationAction
                label="eraser"
                value="eraser"
                // ToDo
                onClick = {handleClear}
                icon={<EraserButton  />}
              />
              {/* <BottomNavigationAction 
                label="cut" 
                value="cut" 
                icon={<MdCrop />} 
              /> */}
              {/* <BottomNavigationAction 
                label="cut" 
                value="cut" 
                icon={<SketchColors />} 
              /> */}
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
            <br/>
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
              
              {/* <BottomNavigationAction
                label="delete"
                value="delete"
                onClick={handleClear}
                icon={<DeleteAllButton  />}
              /> */}
              <BottomNavigationAction 
                label="redo" 
                value="redo" 
                // ToDo
                onClick = {e => console.log(e.target.value)}
                icon={<RedoButton />} 
              />
            </BottomNavigation>
            </Paper>
          </Box>
        </div>
        <div>
          <Box className={clsx(classes.styledComponents, classes.BtnStopSketchRec)}>
            {/* SketchBoard Stop recording from components RecordBoardButton */}
            <StopRecordBoardButton
              // onClick={downloadCanvas}
            ></StopRecordBoardButton>
          </Box>
        </div>
        <div>
            <Box display="flex" justifyContent="center">
                <Button onClick={onUploadCanvas}>SaveCanvas</Button>
            </Box>
        </div>
        <div>
        <Box display="flex" justifyContent="center">
          <form className={classes.textFieldStyle} noValidate autoComplete="off">
            <TextField id="outlined-basic" required label="Name" variant="outlined" />
            <TextField id="outlined-basic" required label="Sketchname" variant="outlined" />
          </form>
          </Box>
        </div>
      </MUIDrawer>

      {/** Drawing Area */}
      <div className={classes.content}>
        <CanvasDraw
          brushRadius={selectedLineWidth}
          brushColor={selectedColor}   
          catenaryColor={selectedColor}   
          canvasWidth={1872}
          canvasHeight={1360}
          hideGrid={true}
          enablePanAndZoom={true}
          style={{ border: "1px solid #000" }}
          ref={canvasRef}
          loadTimeOffset={10}
        />
      </div>
      {/* <div className={classes.page}>{children}</div> */}
    </div>
  );
}