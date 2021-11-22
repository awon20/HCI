import React, { useRef } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Box } from "@material-ui/core";
import {
  Drawer as MUIDrawer,
} from "@material-ui/core/";
import { useHistory } from "react-router";
import {
  StartRecordBoardButton,
  StopRecordBoardButton,
  CameraMicroBox,
  RecordingButton,
  // Canvas,
  // RecordingAPI,
  // CanvasProvider
} from "../../components";
import CanvasDraw from "react-canvas-draw";


const drawerWidth = 670;

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
    width: theme.spacing("auto")
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
}));

export function BoardLayout() {
  // eslint-disable-next-line no-lone-blocks
  {
    /* Hook functions */
  }
  const classes = useStyles();
  const history = useHistory();
  const canvasRef = useRef(null);
  const canvasRefSave = useRef(null);

  const downloadCanvas = (e) => {
    e.preventDefault();
    history.push("sketchboard-summary");
  };
  const SaveCanvas = () => {
    const canvasData = canvasRef.current.getSaveData()
    canvasRefSave.current.loadSaveData(canvasData);
  }
  const handleClear =  () => {
    canvasRef.current.clear();
  }

  const handleUndo = () => {
    canvasRef.current.undo();
  }
  const handleClearAll = () => {
    canvasRef.current.eraseAll();
  }
  const handleResetView = () => {
    canvasRef.current.resetView();
  }


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
            <StartRecordBoardButton />
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
              {/* <ToolsBox1 /> */}
              {/* <SwitchTools /> */}
            </Paper>
          </Box>
        </div>
        <div>
          <Box
            className={clsx(classes.styledComponents, classes.BtnStopSketchRec)}
          >
            {/* SketchBoard Stop recording from components RecordBoardButton */}

            <StopRecordBoardButton
              onClick={downloadCanvas}
            ></StopRecordBoardButton>
          </Box>
        </div>
      </MUIDrawer>

      {/** Drawing Area */}
      <div className={classes.content}>
        <button onClick={SaveCanvas}>Save Drawing</button>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleClearAll}>ClearAll</button>
        <button onClick={handleResetView}>Reset</button>
        <CanvasDraw
          brushRadius={1}
          brushColor={this.state.color}
          canvasWidth={500}
          canvasHeight={500}
          catenaryColor="red"
          hideGrid={true}
          enablePanAndZoom={true}
          style={{ border: "1px solid #000" }}
          ref={canvasRef}
          loadTimeOffset={10}
        />
        <CanvasDraw
          ref={canvasRefSave}
          canvasWidth={500}
          canvasHeight={500}
          hideGrid={true}
          disable={true}
        />

        {/* <CanvasProvider>
        <Canvas />
      </CanvasProvider> */}
      </div>
      {/* <div className={classes.page}>{children}</div> */}
    </div>
  );
}