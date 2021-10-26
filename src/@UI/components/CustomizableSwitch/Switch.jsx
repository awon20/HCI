import React from "react";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";



// const useStyles = makeStyles({
//   switchBase: {
//     color: "#B5B6BA",
//     "&$checked": {
//       color: "#95C6B8",
//     },
//     "&$checked + $track": {
//       backgroundColor: "#95C6B8",
//     },
//   },
//   checked: {},
//   track: {},
// });

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 30,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(15px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 15,
    height: 15,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);



export function SwitchButton() {
    const [state, setState] = React.useState({
    checkedC: true,
  });

    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };

  // const classes = useStyles();

  return (
    <div>
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>
            <AntSwitch
              checked={state.checkedC}
              onChange={handleChange}
              name="checkedC"
              color="#95C6B8"
            />
          </Grid>
        </Grid>
      </Typography>
      {/* <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
      /> */}
    </div>
  );
}
