import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
//-------------- drowing-component --------------------
import CanvasDraw from "react-canvas-draw";
import { Button } from "@material-ui/core";

const drawerWidth = 690;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export  function SketchBoardSaving() {
  const classes = useStyles();
  const canvasRef = useRef(null);

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >

        <div className={classes.toolbar} />
      </Drawer>
      <main>
        <CanvasDraw
          disabled
          hideGrid
          ref={(canvasRef)}
          saveData={localStorage.getItem("savedDrawing")}
          canvasWidth={1872}
          canvasHeight={1360}
          enablePanAndZoom={true}
          style={{ border: "1px solid #000" }}
          loadTimeOffset={10}
        />
      </main>
    </div>
  );
}
