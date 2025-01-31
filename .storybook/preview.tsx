import React, { useEffect, useState } from "react";
import { FluentProvider, teamsLightTheme, teamsDarkTheme } from "@fluentui/react-components";
import type { Preview } from "@storybook/react";

/** ✅ Theme Context Hook: Auto-detect system theme + Storybook control */
const useTheme = (theme: string | undefined) => {
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark" || (!theme && systemPrefersDark));

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleThemeChange = (event: MediaQueryListEvent) => {
      if (!theme || theme === "auto") {
        setIsDarkMode(event.matches);
        document.documentElement.setAttribute("data-theme", event.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleThemeChange);
    return () => mediaQuery.removeEventListener("change", handleThemeChange);
  }, [theme]);

  useEffect(() => {
    if (theme === "dark") {
      setIsDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
    } else if (theme === "light") {
      setIsDarkMode(false);
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [theme]);

  return isDarkMode ? teamsDarkTheme : teamsLightTheme;
};

/** ✅ Theme Provider Wrapper */
const ThemeWrapper: React.FC<{ children: React.ReactNode; theme?: string }> = ({ children, theme }) => {
  const currentTheme = useTheme(theme);

  return (
    <FluentProvider
      theme={currentTheme}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "32px",
        boxSizing: "border-box",
      }}
    >
      {children}
    </FluentProvider>
  );
};

/** ✅ Storybook Preview Configuration */
const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#333333" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: { page: null },
  },
  decorators: [
    (Story, context) => (
      <ThemeWrapper theme={context.globals.theme}>
        <Story />
      </ThemeWrapper>
    ),
  ],
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "auto",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "auto", title: "Auto (System Preference)" },
          { value: "light", title: "Light Theme" },
          { value: "dark", title: "Dark Theme" },
        ],
        showName: true,
      },
    },
  },
};

export default preview;
