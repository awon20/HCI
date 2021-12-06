import React from "react";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import { BoardCard } from "../../components";
import SummeryBoardCard from "./SummaryBoardCard";

export function SketchBoardSummary() {


  return (
    <Container size="sm">
      <Grid
        container
        spacing={3}
        direction="row"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12} md={6} lg={4}>
          <BoardCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SummeryBoardCard />
        </Grid>
      </Grid>
    </Container>
  );
}
