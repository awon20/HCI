import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";
import CustomThemeProvider from "./components/CustomThemeProvider/CustomThemeProvider";
ReactDOM.render(
  <CustomThemeProvider>
    <Router>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      {/* With a querySelector statement, you can select an element based on a CSS selector. */}
      {/* his means you can select elements by ID, class, or any other type of selector. */}
      {/* Using the getElementById method, you can only select an element by its ID. */}
      <CssBaseline />
      <App />
    </Router>
  </CustomThemeProvider>,
  document.querySelector("#root")
);
