import React, { useState } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import {
  IconButton,
  CssBaseline,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import VideocamOffOutlinedIcon from "@material-ui/icons/VideocamOffOutlined";
import { ThemePaletteColors, StyledSwitchButton } from "../";

const useStyles = makeStyles((theme) => ({
  controlPosition: {
    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(1),
  },
  CamOn: {
    height: 50,
    width: 50,
    color: "#95C6B8",
  },
  CamOff: {
    height: 50,
    width: 50,
    color: theme.palette.secondary,
  },
  toggle: {
    height: 50,
    width: 50,
    color: "#95C6B8",
  },
}));
// console.trace();
export function CameraLoader() {
  const [state, setState] = React.useState({
    checkedA: true,
  });
  const [isToggled, setisToggled] = useState(true);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    setisToggled(false)
  };
  const classes = useStyles();
  return (
    <div>
      <FormGroup row>
        <FormControlLabel
          aria-label="micro on/off"
          tooltip="Change the status of the micro"
          variant="raised"
          control={
              <StyledSwitchButton
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
                color="primary"
              />
          }
        />
        <FormControlLabel
          disabled
          control={
            <IconButton
              aria-label="micro on/off"
              tooltip="status of the micro"
              variant="raised"
              style={{ backgroundColor: "transparent" }}
              checked={isToggled}
              label={isToggled ? "camOff" : "camOn"}
            >
              {/* Ternary operation */}
              {/* condition ? “This is True” : “This is False” */}
              {isToggled ? (
                <VideocamOutlinedIcon className={classes.CamOn} />
              ) : <VideocamOffOutlinedIcon className={classes.CamOff} /> &&
                isToggled ? (
                <VideocamOutlinedIcon className={classes.CamOn} />
              ) : (
                <VideocamOffOutlinedIcon className={classes.CamOff} />
              )}
            </IconButton>
          }
        />
      </FormGroup>
    </div>
  );
}
