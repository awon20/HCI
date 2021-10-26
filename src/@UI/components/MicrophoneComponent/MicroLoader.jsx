import React from 'react'
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import {
  IconButton,
  CssBaseline,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
// import MicOffOutlinedIcon from "@material-ui/icons/MicOffOutlined";
import { ThemePaletteColors, StyledSwitchButton } from "..";


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
    const [state, setState] = React.useState({
      checkedB: true,
    });

    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };
    const classes = useStyles();
      return (
        <div>
          <FormGroup row>
            <FormControlLabel
              disabled
              control={
                <IconButton
                  aria-label="micro on/off"
                  tooltip="status of the micro"
                  variant="raised"
                  style={{ backgroundColor: "transparent" }}
                >
                  <MicNoneOutlinedIcon className={classes.micro} />
                  {/* <MicOffOutlinedIcon className={classes.micro} /> */}
                </IconButton>
              }
            />

            <FormControlLabel
              aria-label="micro on/off"
              tooltip="Change the status of the micro"
              variant="raised"
              control={
                <ThemeProvider theme={ThemePaletteColors}>
                  <CssBaseline />
                  <StyledSwitchButton
                    checked={state.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                </ThemeProvider>
              }
            />
          </FormGroup>
        </div>
      );
}
