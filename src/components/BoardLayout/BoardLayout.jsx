import React, {  } from "react";
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
  Canvas,
  RecordingAPI,
  CanvasProvider
} from "../../components";



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

  const handleClick = (e) => {
    e.preventDefault();
    history.push("sketchboard-summary");
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
            <StartRecordBoardButton />
          </Box>
        </div>
        <div>
          <Box className={clsx(classes.styledComponents, classes.contentAlign)}>
            {/* RecordView for Video from components VideoRecorderComponent  */}
            <RecordingButton />
            <RecordingAPI />
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
              onClick={handleClick}
            ></StopRecordBoardButton>
          </Box>
        </div>
      </MUIDrawer>

      {/** Drawing Area */}
      <div className={classes.content}>
      <CanvasProvider>
        <Canvas />
      </CanvasProvider>
      </div>
      {/* <div className={classes.page}>{children}</div> */}
    </div>
  );
}