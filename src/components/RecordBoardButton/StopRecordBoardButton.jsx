import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { useHistory } from "react-router-dom";
// import { SketchBoardSummary } from "../../pages/SketchBoardSummary/SketchBoardSummary"




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
  // const [done, setDone] = useState(undefined);
  
  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/sketchboard-summary`; 
    history.push(path);
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
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
          >
            Board Abschliessen
          </Typography>
        </BoardButton>
      </Box>
        <Dialog
          open={open}
          onClose={routeChange}
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
    </div>
  );
}