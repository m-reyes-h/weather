import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import { ThemeProvider } from "styled-components";

const theme = {
  bgColor: "white",
  borderColor: "#ececec",
  textColor: "#4e4e4e",
  textDarkColor: "#333333",
  yellowColor: "#ffe65f"
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
