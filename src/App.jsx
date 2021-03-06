import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import {
  BoardLoading,
  CreateSketchBoard,
  WelcomePage,
  SketchBoardCamOnMicOn,
  SketchBoardMicOn,
  SketchBoardCamOffMicOff,
  SketchBoardSummary,
  LoadingSpinner,
  SketchBoardEditingPage,
} from "./pages";

/*This  component Providing the colors directly for the all App*/
const theme = createTheme({
  palette: {
    primary: {
      light: "#688a80",
      main: "#95C6B8",
      dark: "#aad1c6",
      contrastText: "#fff",
    },
    secondary: {
      light: "#dc5d5d",
      main: "#D43535",
      dark: "#942525",
      contrastText: "#000",
    },
    typography: {
      fontFamily: "Quicksand",
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
    background: {
      color: "#fff",
    },
  },
});

function App() {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <section>
        <p> Loading...</p>
      </section>
    );
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
          <Route path="/sketchboard-summary" component={SketchBoardSummary} />
          <Route
            path="/sketchboard-saving"
            component={SketchBoardEditingPage}
          />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
