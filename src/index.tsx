import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { FluentProvider, teamsLightTheme, teamsDarkTheme } from "@fluentui/react-components";
import "./index.css"


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

root.render(
  <FluentProvider theme={prefersDarkMode ? teamsDarkTheme : teamsLightTheme} style={{ height:'100vh'}}>
 <App />
  </FluentProvider>
);

