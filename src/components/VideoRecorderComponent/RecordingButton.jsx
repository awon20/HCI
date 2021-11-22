import React from "react";
import VideoRecorder from "react-video-recorder";


import {
  Grid,
  Box,
} from "@material-ui/core";

export function RecordingButton() {

  return (
    <Grid container direction="column" alignItems="center">
      <Box display="flex" justifyContent="center">
        <video width="500px" height="350px" controls autoPlay loop>
          <VideoRecorder
            onRecordingComplete={(videoBlob) => {
              // Do something with the video...
              console.log("videoBlob", videoBlob);
            }}
          />
        </video>
      </Box>
    </Grid>
  );
}
