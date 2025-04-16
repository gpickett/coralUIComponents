import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { FluentProvider, teamsLightTheme, teamsDarkTheme } from "@fluentui/react-components";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const AppWrapper = () => {
  // State to store the current theme
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleThemeChange = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
      document.body.classList.toggle("dark-mode", event.matches); // ✅ Add this
    };

    // Apply dark-mode class initially
    document.body.classList.toggle("dark-mode", isDarkMode);

    mediaQuery.addEventListener("change", handleThemeChange);
    return () => mediaQuery.removeEventListener("change", handleThemeChange);
  }, []);

  return (
    <FluentProvider theme={isDarkMode ? teamsDarkTheme : teamsLightTheme} style={{ height: "100vh" }}>
      <App />
    </FluentProvider>
  );
};

root.render(<AppWrapper />);
