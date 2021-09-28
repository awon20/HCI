import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";




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
    backgroundColor: "#dd5f5f",
    borderColor: "#dd5f5f",
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
      backgroundColor: "#D43535",
      borderColor: "#D43535",
      boxShadow: "none",
    },
  },
})(Button);


export function StopRecordBoardButton(props) {
  // add hook for button
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box display="flex" justifyContent="center">
      {/* stop Board recording */}
      <BoardButton
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
          color="primary"
        >
          Board Abschliessen
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
          {"Ihre Aufzeichnung wird gespeichert!"}
        </DialogTitle>
      </Dialog>
    </Box>
  );
}