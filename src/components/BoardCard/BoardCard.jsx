import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
// import { DynamicMicro } from "../../components";
import { CreateBoard } from "../../components";
import { CardTitle } from "../../components";

import { CameraMicroBox } from "../../components";
import { Box } from '@material-ui/core';
// import { SubmitButton } from '../CreateBoard/CreateBoard';


// create a hooks
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 350,
    minHeight: 350,
    display: "inherit",
    alignItems: "center",
    backgroundColor: "#F5F5F5", // whitesmoke
  },
  // content: {
  //   alignContent: "center",
  // },
  // positionAddButton: {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   paddingTop: theme.spacing(1),
  //   paddingLeft: theme.spacing(4),
  //   paddingRight: theme.spacing(4),
  //   paddingBottom: theme.spacing(1),
  // },
  // positionText: {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   paddingTop: theme.spacing(1),
  //   paddingLeft: theme.spacing(4),
  //   paddingRight: theme.spacing(4),
  //   paddingBottom: theme.spacing(1),
  // },
  // positionCamMicro: {
  //   display: "flex",
  //   alignItems: "center",
  //   paddingTop: theme.spacing(1),
  //   paddingLeft: theme.spacing(4),
  //   paddingRight: theme.spacing(4),
  //   paddingBottom: theme.spacing(1),
  // },
  // button: {
  //   background:
  //     "linear-gradient(45deg, var(--background-start) 30%, var(--background-end) 90%)",
  //   borderRadius: 3,
  //   border: 0,
  //   color: "white",
  //   height: 48,
  //   padding: "0 30px",
  // },
}));




export function BoardCard() {
  /* invok the hooks for styles. */
    const classes = useStyles();
  
    // const theme = useTheme();
    //  const [color, setColor] = React.useState(defaultColor);

    //  const handleChange = (event) => {
    //    setColor(event.target.checked ? greenCyan : defaultColor);
    //  };
    return (
      <Card elevation={5} className={classes.root}>
        {/* Create Board Button */}
        <Box display="flex" justifyContent="center" pt={4} pr={6} pb={4} pl={6}>
          <CreateBoard onClick={() => console.log("button clicked!")} />
          {/* <SubmitButton /> */}
        </Box>
        {/* Card name */}
        <Box display="flex" justifyContent="center" pt={4} pr={6} pb={4} pl={6}>
          <CardTitle />
        </Box>
        {/* Camera MicrophoneComponent  */}
        <Box display="flex" justifyContent="center" pt={4} pr={6} pb={4} pl={6}>
          <CameraMicroBox />
        </Box>
      </Card>
    );
}
