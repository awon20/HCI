import React from 'react';

import { BoardLayout } from "../../components";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: 'flex',
  }
});

export function SketchBoardCamOffMicOff() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <BoardLayout />
    </div>
  );
}
