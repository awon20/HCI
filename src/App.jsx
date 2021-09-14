// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline"; //  CssBaseline component to kickstart an elegant, consistent, and simple baseline to build upon

import { useState, useEffect } from "react";

import "./App.css";
import {
  BoardLoading,
  NewSketchBoard,
  WelcomePage,
  SketchBoardCamOn,
  MiniDrawer,
} from "./pages";
import { PickingColors} from "./components";
import { LoadingSpinner } from "./pages/LoadingSpinner/LoadingSpinner";




function App() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    console.log("render");
  });

    if (isLoading) {
      return (
        <section>
          <p> Loading...</p>
        </section>
      );
    }
    return (
      <ThemeProvider theme={PickingColors}>
        <CssBaseline />
        <Switch>
          <Route exact path="/">
            <WelcomePage onClick={() => setIsLoading(true)} />
          </Route>
          <Route exact path="/loading">
            <LoadingSpinner onClick={() => setIsLoading(true)} />
          </Route>
          <Route path="/new-sketchboard">
            <BoardLoading />
          </Route>
          <Route path="/new-sketchboard">
            <NewSketchBoard />
          </Route>
          <Route path="/sketchboard-cam-on">
            <SketchBoardCamOn />
          </Route>
          <Route path="/minidrawer">
            <MiniDrawer />
          </Route>
        </Switch>
      </ThemeProvider>
    );
}

export default App;
