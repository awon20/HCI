import React from 'react'
import { makeStyles,ThemeProvider } from "@material-ui/core/styles";
import { IconButton, CssBaseline, FormControlLabel, FormGroup } from "@material-ui/core";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
// import VideocamOffOutlinedIcon from "@material-ui/icons/VideocamOffOutlined";
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
  video: {
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
console.trace();
export function CameraLoader() {
    const [state, setState] = React.useState({
      checkedA: true,
    });

    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
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
                    <ThemeProvider theme={ThemePaletteColors}>
                      <CssBaseline />
                      <StyledSwitchButton
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                        color="primary"
                      />
                    </ThemeProvider>
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
                    >
                      <VideocamOutlinedIcon className={classes.video} />
                      {/* <VideocamOffOutlinedIcon className={classes.video} /> */}
                    </IconButton>
                  }
                />
              </FormGroup>
            </div>
          );
        
     };
