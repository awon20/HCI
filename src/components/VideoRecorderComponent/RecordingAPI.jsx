import React from "react";
import {  
  Box,
  Button,
  Grid,
} from "@material-ui/core";

import {
  StartRecordBoardButton,
  StopRecordBoardButton,
  CameraMicroBox,
  ToolsBox,
  RecordingButton,

} from "../../components";
/**
 * Checks whether the argument is an object
 * @param {any} 
 * @author <a href="mailto:https://github.com/wmik/use-media-recorder"
 */
function isObject(o) {
  return o && !Array.isArray(o) && Object(o) === o;
}

/**
 * Checks whether constraints are valid
 * @param {MediaStreamConstraints} mediaType
 */
function validateMediaTrackConstraints(mediaType) {
  let supportedMediaConstraints = null;

  if (navigator.mediaDevices) {
    supportedMediaConstraints =
      navigator.mediaDevices.getSupportedConstraints();
  }

  if (supportedMediaConstraints === null) {
    return;
  }

  let unSupportedMediaConstraints = Object.keys(mediaType).filter(
    (constraint) => !supportedMediaConstraints[constraint]
  );

  if (unSupportedMediaConstraints.length !== 0) {
    let toText = unSupportedMediaConstraints.join(",");
    console.error(
      `The following constraints ${toText} are not supported on this browser.`
    );
  }
}

const noop = () => {};

/**
 *
 * @callback Callback
 * @param {Blob} blob
 *
 * @callback ErrorCallback
 * @param {Error} error
 *
 * @typedef MediaRecorderProps
 * @type {object}
 * @property {BlobPropertyBag} blobOptions
 * @property {boolean} recordScreen
 * @property {function} onStart
 * @property {Callback} onStop
 * @property {Callback} onDataAvailable
 * @property {ErrorCallback} onError
 * @property {object} mediaRecorderOptions
 * @property {MediaStreamConstraints} mediaStreamConstraints
 *
 * @typedef MediaRecorderHookOptions
 * @type {object}
 * @property {Error} error
 * @property {string} status
 * @property {Blob} mediaBlob
 * @property {boolean} isAudioMuted
 * @property {function} stopRecording,
 * @property {function} getMediaStream,
 * @property {function} clearMediaStream,
 * @property {function} startRecording,
 * @property {function} pauseRecording,
 * @property {function} resumeRecording,
 * @property {function} muteAudio
 * @property {function} unMuteAudio
 * @property {MediaStream} liveStream
 *
 * @param {MediaRecorderProps}
 * @returns {MediaRecorderHookOptions}
 */
 function useMediaRecorder({
  blobOptions,
  recordScreen,
  onStop = noop,
  onStart = noop,
  onError = noop,
  onDataAvailable = noop,
  mediaRecorderOptions,
  mediaStreamConstraints = {},
}) {
  let mediaChunks = React.useRef([]);
  let mediaStream = React.useRef(null);
  let mediaRecorder = React.useRef(null);
  let [error, setError] = React.useState(null);
  let [status, setStatus] = React.useState("idle");
  let [mediaBlob, setMediaBlob] = React.useState(null);
  let [isAudioMuted, setIsAudioMuted] = React.useState(false);

  async function getMediaStream() {
    if (error) {
      setError(null);
    }

    setStatus("acquiring_media");

    try {
      let stream;

      if (recordScreen) {
        stream = await window.navigator.mediaDevices.getDisplayMedia(
          mediaStreamConstraints
        );
      } else {
        stream = await window.navigator.mediaDevices.getUserMedia(
          mediaStreamConstraints
        );
      }

      if (recordScreen && mediaStreamConstraints.audio) {
        let audioStream = await window.navigator.mediaDevices.getUserMedia({
          audio: mediaStreamConstraints.audio,
        });

        audioStream
          .getAudioTracks()
          .forEach((audioTrack) => stream.addTrack(audioTrack));
      }

      mediaStream.current = stream;
      setStatus("ready");
    } catch (err) {
      setError(err);
      setStatus("failed");
    }
  }

  function clearMediaStream() {
    if (mediaRecorder.current) {
      mediaRecorder.current.removeEventListener(
        "dataavailable",
        handleDataAvailable
      );
      mediaRecorder.current.removeEventListener("stop", handleStop);
      mediaRecorder.current.removeEventListener("error", handleError);
      mediaRecorder.current = null;
    }

    if (mediaStream.current) {
      mediaStream.current.getTracks().forEach((track) => track.stop());
      mediaStream.current = null;
      mediaChunks.current = [];
    }
  }

  async function startRecording() {
    if (error) {
      setError(null);
    }

    if (!mediaStream.current) {
      await getMediaStream();
    }

    mediaChunks.current = [];

    if (mediaStream.current) {
      mediaRecorder.current = new MediaRecorder(
        mediaStream.current,
        mediaRecorderOptions
      );
      mediaRecorder.current.addEventListener(
        "dataavailable",
        handleDataAvailable
      );
      mediaRecorder.current.addEventListener("stop", handleStop);
      mediaRecorder.current.addEventListener("error", handleError);
      mediaRecorder.current.start();
      setStatus("recording");
      onStart();
    }
  }

  function handleDataAvailable(e) {
    if (e.data.size) {
      mediaChunks.current.push(e.data);
    }
    onDataAvailable(e.data);
  }

  function handleStop() {
    let [sampleChunk] = mediaChunks.current;
    let blobPropertyBag = Object.assign(
      { type: sampleChunk.type },
      blobOptions
    );
    let blob = new Blob(mediaChunks.current, blobPropertyBag);

    setStatus("stopped");
    setMediaBlob(blob);
    onStop(blob);
  }

  function handleError(e) {
    setError(e.error);
    setStatus("idle");
    onError(e.error);
  }

  function muteAudio(mute) {
    setIsAudioMuted(mute);

    if (mediaStream.current) {
      mediaStream.current.getAudioTracks().forEach((audioTrack) => {
        audioTrack.enabled = !mute;
      });
    }
  }

  function pauseRecording() {
    if (mediaRecorder.current && mediaRecorder.current.state === "recording") {
      setStatus("paused");
      mediaRecorder.current.pause();
    }
  } 

  function resumeRecording() {
    if (mediaRecorder.current && mediaRecorder.current.state === "paused") {
      mediaRecorder.current.resume();
      setStatus("recording");
    }
  }

  function stopRecording() {
    if (mediaRecorder.current) {
      setStatus("stopping");
      mediaRecorder.current.stop();
      // not sure whether to place clean up in useEffect?
      // If placed in useEffect the handler functions become dependencies of useEffect
      mediaRecorder.current.removeEventListener(
        "dataavailable",
        handleDataAvailable
      );
      mediaRecorder.current.removeEventListener("stop", handleStop);
      mediaRecorder.current.removeEventListener("error", handleError);
      mediaRecorder.current = null;
      clearMediaStream();
    }
  }

  React.useEffect(() => {
    if (!window.MediaRecorder) {
      throw new ReferenceError(
        "MediaRecorder is not supported in this browser. Please ensure that you are running the latest version of chrome/firefox/edge."
      );
    }

    if (recordScreen && !window.navigator.mediaDevices.getDisplayMedia) {
      throw new ReferenceError(
        "This browser does not support screen capturing"
      );
    }

    if (isObject(mediaStreamConstraints.video)) {
      validateMediaTrackConstraints(mediaStreamConstraints.video);
    }

    if (isObject(mediaStreamConstraints.audio)) {
      validateMediaTrackConstraints(mediaStreamConstraints.audio);
    }

    if (mediaRecorderOptions && mediaRecorderOptions.mimeType) {
      if (!MediaRecorder.isTypeSupported(mediaRecorderOptions.mimeType)) {
        console.error(
          `The specified MIME type supplied to MediaRecorder is not supported by this browser.`
        );
      }
    }
  }, [mediaStreamConstraints, mediaRecorderOptions, recordScreen]);

  return {
    error,
    status,
    mediaBlob,
    isAudioMuted,
    stopRecording,
    getMediaStream,
    startRecording,
    pauseRecording,
    resumeRecording,
    clearMediaStream,
    muteAudio: () => muteAudio(true),
    unMuteAudio: () => muteAudio(false),
    get liveStream() {
      if (mediaStream.current) {
        return new MediaStream(mediaStream.current.getVideoTracks());
      }
      return null;
    },
  };
}

/**
 * @typedef LiveStreamPreviewProps
 * @type {object}
 * @property {MediaStream} stream
 *
 * @param {LiveStreamPreviewProps}
 */
function LiveStreamPreview({ stream }) {
  let videoPreviewRef = React.useRef();

  React.useEffect(() => {
    if (videoPreviewRef.current && stream) {
      videoPreviewRef.current.srcObject = stream;
    }
  }, [stream]);

  if (!stream) {
    return null;
  }

  return <video ref={videoPreviewRef} width={520} height={480} autoPlay />;
}

/**
 * @typedef PlayerProps
 * @type {object}
 * @property {Blob} srcBlob
 *
 * @param {PlayerProps}
 */
function Player({ srcBlob }) {
  if (!srcBlob) {
    return null;
  }

  return (
    <video
      src={URL.createObjectURL(srcBlob)}
      width={520}
      height={480}
      controls
    />
  );
}

export function RecordingAPI() {
  let [recordScreen, setRecordScreen] = React.useState(false);
  let [audio, setAudio] = React.useState(false);
  let {
    status,
    liveStream,
    mediaBlob,
    pauseRecording,
    resumeRecording,
    stopRecording,
    getMediaStream,
    startRecording,
    clearMediaStream,
  } = useMediaRecorder({
    recordScreen,
    mediaStreamConstraints: { audio, video: true },
  });

  //eslint-disable-next-line
  React.useEffect(() => clearMediaStream, []);

  return (
    <Grid container direction="column" alignItems="center">
      <Box display="flex" justifyContent="center">
        {/* <h1>Video recorder</h1>
        {status} */}
        {/* <dialog open={status === "acquiring_media"}>
          Waiting for permissions
        </dialog> */}
        <Button>
          Select video source
          <label>
            <input
              type="radio"
              checked={recordScreen}
              onChange={() => setRecordScreen((prevState) => !prevState)}
            />{" "}
            Screen
          </label>
          <label>
            <input
              type="radio"
              checked={!recordScreen}
              onChange={() => setRecordScreen((prevState) => !prevState)}
            />{" "}
            Camera
          </label>
        </Button>
        <Button>
          <label>
            Enable microphone
            <input
              type="checkbox"
              checked={audio}
              onChange={() => setAudio((prevState) => !prevState)}
            />
          </label>
        </Button>
        <section>
          {status !== "recording" && (
            <Button
              type="button"
              onClick={async () => {
                await getMediaStream();
                startRecording();
              }}
            >
              Start recording
            </Button>
          )}
          {status === "recording" && (
            <button type="button" onClick={pauseRecording}>
              Pause recording
            </button>
          )}
          {status === "paused" && (
            <button type="button" onClick={resumeRecording}>
              Resume recording
            </button>
          )}
          {status === "recording" && (
            <button type="button" onClick={stopRecording}>
              Stop recording
            </button>
          )}
        </section>
        <LiveStreamPreview stream={liveStream} />
        <Player srcBlob={mediaBlob} />
      </Box>
    </Grid>
  );
}
