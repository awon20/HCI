// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import { useState, useEffect } from "react";

import "./App.css";
import {
  BoardLoading,
  NewSketchBoard,
  WelcomePage,
  SketchBoardCamOn,
  MiniDrawer,
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
    );
}

export default App;
