import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
// import { DynamicMicro } from "../../components";
import { CreateBoard } from "..";
import { CardTitle } from "..";

import { CameraMicroBox } from "..";
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
}));


export function BoardCard() {
  /* invok the hooks for styles. */
    const classes = useStyles();

    return ( 
      <div>
      <Card 
        elevation={5} 
        className={classes.root}>
        {/* Create Board Button */}
        <Box
          display="flex"
          justifyContent="center"
        >
          <CreateBoard  />
          {/* <SubmitButton /> */}
        </Box>
        {/* Card title */}
        <Box
          display="flex"
          justifyContent="center"
        >
          <CardTitle />
        </Box>
        {/* Camera MicrophoneComponent  */}
        <Box display="flex" justifyContent="center" >
          <CameraMicroBox />
        </Box>
      </Card>
      </div>
    );
}
