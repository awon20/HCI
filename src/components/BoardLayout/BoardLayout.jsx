import React from "react";
// import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer as MUIDrawer,
  // Box,
  // List,
  // ListItem,
  // ListItemText,
  // ListItemIcon,
  CssBaseline,
} from "@material-ui/core/";
// import { InboxIcon, OutboxIcon, MailIcon } from "@material-ui/icons";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
// import OutboxIcon from "@material-ui/icons/outbox";

// import UndoIcon from "@material-ui/icons/Undo";
import {
  StartRecordBoardButton,
  StopRecordBoardButton,
  CameraMicroBox,
  ToolsBox,
  PenDrawing,
  RecordingButton,
  RecordingAPI,
  // PlayerControlExample,
} from "../../components";



const drawerWidth = "700px";
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
    // marginTop: "100px",
    // marginBottom: "100px",
    // padding: theme.spacing(1),
    margin: theme.spacing(10, "auto"),
  },
  BtnStopSketchRec: {
    // marginTop: "100px",
    // marginBottom: "100px",
    // padding: theme.spacing(1),
    margin: theme.spacing(10, "auto"),
  },
  content: {
    flexGrow: 1,
  },
  styledComponents: {
    margin: theme.spacing(5),
  },
}));
export function BoardLayout() {
  const classes = useStyles();
  // const itemsList = [
  //   { text: "Home", icon: <InboxIcon /> },
  //   { text: "About", icon: <MailIcon />},
  //   { text: "Contact", icon: <MailIcon />},

  // ];
  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* App Switch Button come here */}

      {/* App Drawer */}
      <MUIDrawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        elevation="20"
      >
        {/* Control SideBar Button */}
        <div className={classes.styledComponents}>
          {/* SketchBoard Start recording from components RecordBoardButton */}
          <StartRecordBoardButton />
        </div>

        <div className={classes.styledComponents}>
          {/* RecordView for Video from components VideoRecorderComponent  */}
          <RecordingButton />
        </div>

        <div className={classes.styledComponents}>
          {/* Camera and Micro from components CameraMicroBox*/}
          <CameraMicroBox />
        </div>

        <div>
          {/* Utils Lists from components ToolsBox */}
          <ToolsBox />
        </div>

        <div className={classes.styledComponents}>
          {/* SketchBoard Stop recording from components RecordBoardButton */}
          <StopRecordBoardButton />
        </div>

        {/* <div className={classes.styledComponents}> */}
          {/* RecordView for Video from components VideoRecorderComponent  */}
          {/* <RecordingAPI></RecordingAPI> */}
        {/* </div> */}
      </MUIDrawer>

      {/** Drawing Area */}
      <main className={classes.content}>
        <div>
          <PenDrawing />
        </div>
      </main>
      {/* <div className={classes.page}>{children}</div> */}
    </div>
  );
}

