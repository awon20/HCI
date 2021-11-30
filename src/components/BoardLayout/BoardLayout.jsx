import React, { useState, useRef } from "react";
import Container from '@material-ui/core/Container'
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Box, Button } from "@material-ui/core";
import { ButtonGroup } from "./button-group/button-group";
import {
  Drawer as MUIDrawer,
} from "@material-ui/core/";
// import { useHistory } from "react-router";
//-------------- import-components --------------------
import {
  StartRecordBoardButton,
  StopRecordBoardButton,
  CameraMicroBox,
  RecordingView,
  UndoButton,
  EraserButton,
  RedoButton,
} from "../../components";
//-------------- drowing-component --------------------
import CanvasDraw from "react-canvas-draw";
//-------------- Tools-component --------------------
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";



//-------------- get firebase-configuration --------------------
// import { app } from "../../base"
// import firebase from 'firebase'
// const db = app.firestore();
// const storage = app.storage();

/**
* TODO: refactoring this component so that is conform to react specifications
 */

const drawerWidth = 690;

const useStyles = makeStyles((theme) => ({
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


export function BoardLayout(props) {
  // console.log(props)
  // eslint-disable-next-line no-lone-blocks
  {
    /* Hook functions */
  } 
  const classes = useStyles();
  const canvasRef = useRef(null);
  const [value, setValue] = useState(1);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedLineWidth, setSelectedLineWidth] = useState(lineWidths[4]);

  const handleClear = () => {
    canvasRef.current.clear();
  };

  const handleUndo = () => {
    canvasRef.current.undo();
  };

  return (
    <Container size="sm">
      <MUIDrawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
        // variant="persistent"
      >
        {/* Control SideBar Button */}
        <div>
          <Box
            className={clsx(
              classes.styledComponents,
              classes.BtnStartSketchRec
            )}
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
            className={clsx(classes.styledComponents, classes.BtnStopSketchRec)}
            sx={{ m: 2 }}
          >
            {/* saving Sketch and Recording on Firebase  */}
            <StopRecordBoardButton canvasRef={canvasRef} />
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
    </Container>
  );
}
// export const DisplayAllProps = (props) => (
//   <table>
//     <tbody>
//       {Array.from(Object.entries(props)).map(([key, value]) => (
//         <tr key={key + Math.random()}>
//           <td>{key}</td>
//           <td>{value}</td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// );