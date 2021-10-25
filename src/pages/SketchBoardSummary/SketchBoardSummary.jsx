import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";

import { BoardCard } from "../../components";
import SummeryBoardCard from "./SummaryBoardCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
}));
export function SketchBoardSummary() {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        direction="row"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <BoardCard />
        </Grid>
        <Grid item xs={3}>
          <SummeryBoardCard />
        </Grid>
      </Grid>
    </div>
  );
}
