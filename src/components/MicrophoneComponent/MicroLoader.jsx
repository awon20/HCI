import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
import MicOffOutlinedIcon from "@material-ui/icons/MicOffOutlined";
import { StyledSwitchButton } from "..";


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
    MicOn: {
    height: 50,
    width: 50,
    color: "#95C6B8",
  },
    MicOff: {
      height: 50,
      width: 50,
      color: theme.palette.secondary,
    },
}));

export function MicroLoader() {
    const [state, setState] = React.useState({
      checkedB: true,
    });

    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
      setisToggled(false)
   };
    const [isToggled, setisToggled] = React.useState(true);
   
    const classes = useStyles();
      return (
        <div>
          <FormGroup row>
            {" "}
            <FormControlLabel
              aria-label="micro on/off"
              tooltip="Change the status of the micro"
              variant="raised"
              control={
                  <StyledSwitchButton
                    checked={state.checkedB}
                    onChange={handleChange}
                    name="checkedB"
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
                  {/* <MicNoneOutlinedIcon className={classes.micro} /> */}

                  {/* Ternary operation */}
                  {/* condition ? “This is True” : “This is False” */}
                  {isToggled ? (
                    <MicNoneOutlinedIcon className={classes.MicOn} />
                  ) : <MicOffOutlinedIcon className={classes.MicOff} /> &&
                    isToggled ? (
                    <MicNoneOutlinedIcon className={classes.MicOn} />
                  ) : (
                    <MicOffOutlinedIcon className={classes.MicOff} />
                  )}
                </IconButton>
              }
            />
          </FormGroup>
        </div>
      );
}
