import React from 'react';
import Button from "@material-ui/core/Button";
import {
  withStyles,
  // makeStyles,
} from "@material-ui/core/styles";
import { Box } from '@material-ui/core';


const buttonName = "Board Aufzeichnen";

export const BoardButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 24,
    padding: "6px 16px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#aad1c6",
    borderColor: "#aad1c6",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#95C6B8",
      borderColor: "#95C6B8",
      boxShadow: "none",
    },

  },
})(Button);

// const useStyles = makeStyles((theme) => ({
//   margin: {
//     position: "relative",
//     top: 0,
//     center: 0,
//   },
// }));


export function StartRecordBoardButton() {
  // const classes = useStyles();
  return (
    <Box display="flex" justifyContent="center">
      {/* start Board recording */}
      <BoardButton
        variant="contained"
        color="primary"
        disableRipple
        // className={classes.margin}
      >
        {buttonName}
      </BoardButton>
    </Box>
  );
}
