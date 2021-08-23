import React from 'react'
import ToggleOnIcon from "@material-ui/icons/ToggleOn";
import IconButton from "@material-ui/core/IconButton";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
  controlPosition: {
    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(1),
  },
  micro: {
    height: 50,
    width: 50,
    color: "#95C6B8",
  },
  toggle: {
    height: 50,
    width: 50,
    color: "#95C6B8",
  },
}));

export function MicroLoader() {
    const classes = useStyles();
    return (
      <div>
        {" "}
        <IconButton
          aria-label="micro on/off"
          tooltip="status of the micro"
          variant="raised"
          style={{ backgroundColor: "transparent" }}
        >
          <MicNoneOutlinedIcon className={classes.micro} />
        </IconButton>
        <IconButton
          aria-label="micro on/off"
          tooltip="Change the status of the micro"
          variant="raised"
          style={{ backgroundColor: "transparent" }}
        >
          <ToggleOnIcon className={classes.toggle} />
        </IconButton>
      </div>
    );
}
