import React from 'react'
import { BoardButton } from "./StartRecordBoardButton";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';



// const useStyles = makeStyles((theme) => ({
//   root: {
//     // margin: theme.spacing(10),
//     mainColor: theme.palette.secondary.main,
//     backgroundColor: theme.palette.secondary.dark,
//     borderColor: theme.palette.secondary.dark,
//     // position: "relative",
//     // bottom: 50,
//     center: 0,
//     "&:hover": {
//       backgroundColor: theme.palette.secondary.dark,
//       borderColor: theme.palette.secondary.dark,
//       boxShadow: "none",
//     },
//   },
// }));
const useStyles = makeStyles((theme) => ({
  root: {
    // margin: theme.spacing(10),
    backgroundColor: "#dd5f5f",
    borderColor: "#dd5f5f",
    // position: "relative",
    // bottom: 50,
    center: 0,
    "&:hover": {
      backgroundColor: "#D43535",
      borderColor: "#D43535",
      boxShadow: "none",
    },
  },
}));

export function StopRecordBoardButton(props) {
    const classes = useStyles();

    return (
      <Box display="flex" justifyContent="center">
        {/* stop Board recording */}
        <BoardButton
          variant="contained"
          color="primary"
          disableRipple
          className={classes.root}
          {...props.position}
        >
          <Typography
            variant="button"
            component="h2"
            align="center"
            display="block"
          >
            Board Abschliessen
          </Typography>
        </BoardButton>
      </Box>
    );
}