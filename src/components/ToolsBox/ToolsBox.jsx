import { Divider, makeStyles } from '@material-ui/core';
import React from 'react';
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
import { Grid, Box }from "@material-ui/core";



// const useStyles = makeStyles((theme) => ({
//   controlPosition: {
//     display: "flex",
//     alignItems: "center",
//     padding: "0 30px",
//   },
//   sizeIcons: {
//     height: "50px",
//     width: "50px",
//     marginRight: "20px",
//     marginLeft: "20px",
//   },
//   box: {
//     border: "1px solid black",
//     padding: 8,
//   },
//   spreadBox: {
//     justifyContent: "space-around",
//     alignItems: "center",
//   },
//   rotation: {
//     transform: [{ rotateX: "360deg" }],
//   },
// }));
const useStyles = makeStyles((theme) => ({
  root: {
    width: "fit-content",
    border: `2px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    "& svg": {
      // margin: theme.spacing(1.5),
      height: "50px",
      width: "50px",
      marginRight: "20px",
      marginLeft: "20px",
    },
    "& hr": {
      // margin: theme.spacing(0, 0.5),
    },
  },
}));
export function ToolsBox() {
    const classes = useStyles();
    return (
      // <Box display="flex" justifyContent="center" pb={10}>
      <Box display="flex" justifyContent="center" >
        <Grid container alignItems="center" className={classes.root}>
          <UndoIcon />
          <Divider orientation="vertical" flexItem />
          <MdEdit />
          <Divider orientation="vertical" flexItem />
          <Icon icon={eraserIcon} />
          <Divider orientation="vertical" flexItem />
          <MdCrop />
          <Divider orientation="vertical" flexItem />
          <MdColorLens />
          <Divider orientation="vertical" flexItem />
          <MdDelete />
          <Divider orientation="vertical" flexItem />
          <RedoIcon />
        </Grid>
      </Box>
    );
}