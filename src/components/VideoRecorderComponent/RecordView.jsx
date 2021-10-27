import { useReactMediaRecorder } from "react-media-recorder";
import { Box, Button } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";


  const RecordButton = withStyles({
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
      // "&:active": {
      //   boxShadow: "none",
      //   backgroundColor: "#95C6B8",
      //   borderColor: "#95C6B8",
      // },
      // "&:focus": {
      //   boxShadow: "0 0 0 0.2rem rgba(149,198,184,.5)",
      // },
    },
  })(Button);


  // const useStyles = makeStyles((theme) => ({
  //   margin: {
  //     margin: theme.spacing(1),
  //   },
  // }));
  

  export const RecordView = () => {
  const {startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true });

  // const classes = useStyles();
  return (
    <div>
      {/* <Box display="flex" justifyContent="center" pt={2} pr={6} pb={2} pl={6}> */}
      <Box display="flex" justifyContent="center" >
        <video
          src={mediaBlobUrl}
          width="500px"
          height="350px"
          controls
          autoPlay
          loop
        />
      </Box>

      {/* <Box display="flex" justifyContent="center" pt={2} pr={6} pb={2} pl={6}> */}
      <Box display="flex" justifyContent="center" >
        <RecordButton
          variant="contained"
          color="primary"
          disableRipple
          // className={classes.margin}
          onClick={startRecording}
        >
          Start Recording
        </RecordButton>
        <RecordButton
          variant="contained"
          color="primary"
          disableRipple
          // className={classes.margin}
          onClick={stopRecording}
        >
          Stop Recording
        </RecordButton>
      </Box>
    </div>
  );
};