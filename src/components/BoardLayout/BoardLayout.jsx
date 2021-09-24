import React from "react";
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
  ToolsBox,
  PenDrawing,
  RecordingButton,
} from "../../components";

// import {  SketchBoardSummary } from "../../pages"

const drawerWidth = 650;

// const pagesTransition = [
//   {
//     page: <SketchBoardSummary />,
//     path: "sketchboard-summary",
//   },
//   // {
//   //   page: <BoardClosingDialog />,
//   //   path: "/sketchbox-pages",
//   // },
// ];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },

  drawerPaper: {
    width: drawerWidth,
  },

  BtnStartSketchRec: {
    margin: theme.spacing(10, "auto"),
  },
  styledComponents: {
    margin: theme.spacing(5, 'auto'),
  },
  contentAlign: {
    margin: theme.spacing(5, "auto"),
  },
  BtnStopSketchRec: {
    margin: theme.spacing(10, "auto"),
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
              <ToolsBox />
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
        <PenDrawing />
      </div>
      {/* <div className={classes.page}>{children}</div> */}
    </div>
  );
}

