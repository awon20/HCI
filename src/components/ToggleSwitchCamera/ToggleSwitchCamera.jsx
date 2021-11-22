import React from "react";
import { withStyles, ThemeProvider } from "@material-ui/core/styles";
import { Switch, Grid } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemePaletteColors } from "..";

const GreenSwitch = withStyles((theme) => ({
  root: {
    width: 48,
    height: 24,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(24px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 20,
    height: 20,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 24 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);


export function ToggleSwitchCamera() {
  const [state, setState] = React.useState({
    checkedA: true,
  });
  
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return ( 
    <div>
      { state === 'checkedA' ? 
      <ThemeProvider theme={ThemePaletteColors}>
            <CssBaseline />
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>
                <GreenSwitch
                 onChange={handleChange}
                 name="checkedA"
               />
             </Grid>
           </Grid>
         </ThemeProvider> 
         : 
        <ThemeProvider theme={ThemePaletteColors}>
        <CssBaseline />
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>
            <GreenSwitch
              //   checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
            />
          </Grid>
        </Grid>
      </ThemeProvider>
        }
      </div>
  );
  // if (state.checkedA){
  //      return (
  //        <ThemeProvider theme={ThemePaletteColors}>
  //          <CssBaseline />
  //          <Grid component="label" container alignItems="center" spacing={1}>
  //            <Grid item>
  //              <GreenSwitch
  //                //   checked={state.checkedA}
  //                onChange={handleChange}
  //                name="checkedA"
  //              />
  //            </Grid>
  //          </Grid>
  //        </ThemeProvider>
  //      );
  // }else {
  //         return (
  //           <ThemeProvider theme={ThemePaletteColors}>
  //             <CssBaseline />
  //             <Grid component="label" container alignItems="center" spacing={1}>
  //               <Grid item>
  //                 <GreenSwitch
  //                   //   checked={state.checkedA}
  //                   onChange={handleChange}
  //                   name="checkedA"
  //                 />
  //               </Grid>
  //             </Grid>
  //           </ThemeProvider>
  //         );
  // }
 
}


