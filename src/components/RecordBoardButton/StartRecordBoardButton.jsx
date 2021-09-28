import React from 'react';

import { Box, Button, Typography} from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";


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

export function StartRecordBoardButton() {
  //  const classes = useStyles();
  return (
    <div>
      <Box display="flex" justifyContent="center">
        {/* start Board recording */}
        <BoardButton
          variant="contained"
          color="primary"
          disableRipple
          // getMediaStream={this.getMediaStream}
          // className={classes.root}
        >
          <Typography
            variant="button"
            component="h2"
            align="center"
            display="block"
            color="primary"
          >
            Board Aufzeichnen
          </Typography>
        </BoardButton>
      </Box>
      {/* <Box>
        <RecordingAPI>
        
        </RecordingAPI>
      </Box> */}
    </div>
  );
}
