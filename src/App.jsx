// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
// import { ThemeProvider } from "@material-ui/core/styles";
// import CssBaseline from "@material-ui/core/CssBaseline"; //  CssBaseline component to kickstart an elegant, consistent, and simple baseline to build upon

import { useState, useEffect } from "react";

import "./App.css";
import {
  BoardLoading,
  CreateSketchBoard,
  WelcomePage,
  SketchBoardCamOnMicOn,
  SketchBoardMicOn,
  SketchBoardCamOffMicOff,
  // MiniDrawer,
  SketchBoardSummary,
} from "./pages";
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
      <div>
        {/* <ThemeProvider> */}
        {/* <CssBaseline /> */}
        <Switch>
          <Route exact path="/sketchbox-pages">
            <WelcomePage onClick={() => setIsLoading(true)} />
          </Route>
          <Route exact path="/loading">
            <LoadingSpinner onClick={() => setIsLoading(true)} />
          </Route>
          <Route path="/new-sketchboard">
            <BoardLoading />
          </Route>
          <Route path="/new-sketchboard">
            <CreateSketchBoard />
          </Route>
          <Route path="/sketchboard-cam-on">
            <SketchBoardCamOnMicOn />
          </Route>
          <Route path="/sketchboard-mic-on">
            <SketchBoardMicOn />
          </Route>
          <Route path="/sketchboard-cam-off-mic-off">
            <SketchBoardCamOffMicOff />
          </Route>
          <Route path="/sketchboard-summary">
            <SketchBoardSummary />
          </Route>
          {/* <Route path="/minidrawer">
            <MiniDrawer />
          </Route> */}
        </Switch>
        {/* </ThemeProvider> */}
      </div>
    );
}

export default App;
