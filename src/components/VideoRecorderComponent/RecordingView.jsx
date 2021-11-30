import React,  {useRef, useEffect, useState} from "react";
// import VideoRecorder from "react-video-recorder";
import { app } from "../../base";

import {
  Grid,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RecordRTC from 'recordrtc';
const db = app.firestore();


const useStyles = makeStyles((theme) => ({
  contentAlign: {
    margin: theme.spacing(5, "auto"),
  },
  styledComponents: {
    margin: theme.spacing(2, "auto"),
    // width: theme.spacing("auto")
  },
}));


export function RecordingView() {


const videoRef = useRef(null);
const [videos, setSaveVideos] = useState([]);

let recorder;

const startRecord = () => {
    captureCamera(function (camera) {
      videoRef.current.muted = true;
      videoRef.current.volume = 0;
      videoRef.current.srcObject = camera;

      recorder = RecordRTC(camera, {
        type: "video"
      });

      recorder.startRecording();

      // release camera on stopRecording
      recorder.camera = camera;
      console.log(videoRef.current);
    });
  };

  const stopRecord = () => {
    recorder?.stopRecording?.(stopRecordingCallback);
  };

  const stopRecordingCallback = () => {
      
    videoRef.current.muted = false;
    videoRef.current.volume = 1;
    videoRef.current.srcObject = null;
    videoRef.current.src = URL.createObjectURL(recorder.getBlob());

    recorder.camera.stop();
    recorder.destroy();
    recorder = null;
  };

  const captureCamera = (callback) => {
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then(function (camera) {
        callback(camera);
      })
      .catch(function (error) {
        console.log(
          "Unable to capture your camera. Please check console logs."
        );
        console.error(error);
      });
  };

  useEffect(() => {
    const getUserMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({audio: true, video: true});
        videoRef.current.srcObject = stream;
        const unmount = db.collection("Videos").onSnapshot((snapshot) => {
          const tempVideos = [];
          snapshot.forEach((doc) => {
          tempVideos.push({ ...doc.data(), id: doc.id });
          });
            setSaveVideos(tempVideos);
          });    
        return unmount;
      } catch (err) {
        console.log(err);
      }
    };
      getUserMedia();
  }, []);

  return (
    <Grid container direction="column" alignItems="center">
      <Box display="flex" justifyContent="center">
          <video ref={videoRef} width="600px" height="500px" controls autoPlay={false} playsInline={false}></video>
      </Box>
      {/* <Box display="flex" justifyContent="center">
        <Button  className={clsx(classes.styledComponents)} onClick={startRecord}> Start </Button>
        <Button  className={clsx(classes.styledComponents)} onClick={stopRecord}>Stop</Button>
       </Box> */}
    </Grid>
  );
}

// import React, { useState, useRef, useEffect } from 'react';
// import RecordRTC, { invokeSaveAsDialog } from 'recordrtc';

// export function RecordingButton() {
//   const [stream, setStream] = useState(null);
//   const [blob, setBlob] = useState(null);
//   const refVideo = useRef(null);
//   const recorderRef = useRef(null);

//   const handleRecording = async () => {
//     // const cameraStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
//     const mediaStream = await navigator.mediaDevices.getDisplayMedia({
//       video: {
//         width: 1920,
//         height: 1080,
//         frameRate: 30,
//       },
//       audio: false,
//     });

//     setStream(mediaStream);
//     recorderRef.current = new RecordRTC(mediaStream, { type: 'video' });
//     recorderRef.current.startRecording();
//   };

//   const handleStop = () => {
//     if(recorderRef.current){
//       return
//     }
//     recorderRef.current.stopRecording(() => {
//       setBlob(recorderRef.current.getBlob());
//     });
//   };

//   const handleSave = () => {
//     invokeSaveAsDialog(blob);
//   };

//   useEffect(() => {
//     if (!refVideo.current) {
//       return;
//     }

//     // refVideo.current.srcObject = stream;
//   }, [stream, refVideo]);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <button onClick={handleRecording}>start</button>
//         <button onClick={handleStop}>stop</button>
//         <button onClick={handleSave}>save</button>
//         {blob && (
//           <video
//             src={URL.createObjectURL(blob)}
//             controls
//             autoPlay
//             ref={refVideo}
//             style={{ width: '500px', margin: '1em' }}
//           />
//         )}
//       </header>
//     </div>
//   );
// }