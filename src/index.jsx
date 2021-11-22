import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
    <Router>
      {/* With a querySelector statement, you can select an element based on a CSS selector. */}
      {/* his means you can select elements by ID, class, or any other type of selector. */}
      {/* Using the getElementById method, you can only select an element by its ID. */}
      <App />
    </Router>,
  document.querySelector("#root")
);
