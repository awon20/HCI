import { makeStyles } from "@material-ui/core/styles";

import "./DrawingBoard.css";

/*Drawer size*/
const drawerWidth = 670;

export const styles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(32),
      height: theme.spacing(16),
    },

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
    width: theme.spacing("auto"),
  },
  contentAlign: {
    margin: theme.spacing(5, "auto"),
  },
  contentColor: {
    color: theme.palette.secondary,
  },
  BtnStopSketchRec: {
    margin: theme.spacing(10, "auto"),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
  },
}));



