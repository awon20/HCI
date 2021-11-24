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
const styles = theme => ({
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


export  const StartRecordBoardButton = () =>{

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
        <Button
          variant="contained"
          color="primary"
          disableRipple
          onClick={handleClickOpen}
        >
          <Typography
            variant="button"
            component="h2"
            align="center"
            display="block"
          >
            Board Aufzeichnen
          </Typography>
        </Button>
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
      </Box>
    </div>
  );
}
export default withStyles(styles, { withTheme: true })(StartRecordBoardButton);