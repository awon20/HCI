import React from 'react';

import { Box, Button, Typography} from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
// import RefreshIndicator from "@material-ui/icons/RefreshRounded";


// set the transition properties
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// set the button properties
export const BoardButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 24,
    padding: "6px 16px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#95C6B8",
    borderColor: "#95C6B8",
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
  // add hook for button
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <div>
      <Box display="flex" justifyContent="center">
        {/* start Board recording */}
        <BoardButton
          variant="contained"
          color="primary"
          disableRipple
          onClick={handleClickOpen}
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
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          transitionDuration={500}
          TransitionComponent={Transition}
          keepMounted
        >
          <DialogTitle id="alert-dialog-title">
            {"Ihre Aufzeichnung startet jetzt!"}
          </DialogTitle>
        </Dialog>
        {/* <Dialog
          bodyStyle={{ margin: 0, padding: 0 }}
          open={true}
          onClose={handleClose}
          style={{
            width: "200px",
            marginLeft: "40%",
            backgroundColor: "transparent",
          }}
          title="Loading"
          titleStyle={{
            paddingTop: "0px",
            paddingLeft: "45px",
            fontSize: "15px",
            lineHeight: "40px",
          }}
        >
          <RefreshIndicator
            style={{ display: "inline-block" }}
            size={50}
            left={50}
            top={30}
            loadingColor="#FF9800"
            status="loading"
          />
        </Dialog> */}
      </Box>
    </div>
  );
}
