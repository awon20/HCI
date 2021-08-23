import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

import ToggleOnIcon from "@material-ui/icons/ToggleOn";
import IconButton from "@material-ui/core/IconButton";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";

const useStyles = makeStyles((theme) => ({
  controlPosition: {
    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(1),
  },
  toggle: {
    height: 50,
    width: 50,
    color: "#95C6B8",
  },
  video: {
    height: 50,
    width: 50,
    color: "#95C6B8",
  },
}));


export function CameraLoader() {
    const classes = useStyles();
    return (
      <div>
        <IconButton
          tooltip="Change the status of the camera"
          aria-label="on/off"
          variant="raised"
          style={{ backgroundColor: "transparent" }}
        >
          <ToggleOnIcon className={classes.toggle} />
        </IconButton>

        <IconButton
          aria-label="video on/off"
          tooltip="Status of the videocam"
          variant="raised"
          style={{ backgroundColor: "transparent" }}
        >
          <VideocamOutlinedIcon className={classes.video} />
        </IconButton>
      </div>
    );
}
