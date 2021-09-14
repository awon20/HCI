import React from "react";
import { useReactMediaRecorder } from "react-media-recorder";

import {
  Grid,
  Button,
  // ButtonGroup,
  // ClickAwayListener,
  // Grow,
  // Paper,
  // Popper,
  // MenuItem,
  // MenuList,
  Box,
} from "@material-ui/core";

// import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import { withStyles, makeStyles } from "@material-ui/core/styles";


const options = [" Stop Recording"," Start Recording"    ];

const StyledButton = withStyles({
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

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(2),
    },
    paper: {
      border: "1px solid",
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
    },
  }));
  

export function RecordingButton() {
  const classes = useStyles();
  const { startRecording, stopRecording, mediaBlobUrl } =
     useReactMediaRecorder({ video: true });

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Box display="flex" justifyContent="center">
        <video
          src={mediaBlobUrl}
          width="500px"
          height="350px"
          controls
          autoPlay
          loop
        />
      </Box>
      {/* <Grid item xs={12}>
        <ButtonGroup
          variant="contained"
          ref={anchorRef}
          aria-label="split button"
          disableRipple
          className={classes.margin}
        >
          <StyledButton
            onClick={() => {
              handleClick();
              startRecording();
              stopRecording();
            }}
            color="primary"
            disableRipple
          >
            {options[selectedIndex]}
          </StyledButton>
          <StyledButton
            color="primary"
            size="small"
            aria-controls={open ? "split-button-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-label="select options"
            aria-haspopup="menu"
            onClick={handleToggle}
          >
            <ArrowDropDownIcon />
          </StyledButton>
        </ButtonGroup>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper className={classes.margin}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu">
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        disabled={index === 2}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid> */}
    </Grid>
  );
}
