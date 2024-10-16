/* eslint-disable no-unused-vars */
import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";
import { Palette } from "@mui/icons-material";
import { light } from "@mui/material/styles/createPalette";

//colour design tokens

export const tokens = (mode) => ({
  ...(mode === " dark "
    ? {
        sky: {
          100: "#d9e3ef",
          200: "#b2c7df",
          300: "#8caacf",
          400: "#658ebf",
          500: "#3f72af",
          600: "#325b8c",
          700: "#264469",
          800: "#192e46",
          900: "#0d1723",
        },
        blue: {
          100: "#f8f9fc",
          200: "#f1f3f9",
          300: "#e9eef5",
          400: "#e2e8f2",
          500: "#dbe2ef",
          600: "#afb5bf",
          700: "#83888f",
          800: "#585a60",
          900: "#2c2d30",
        },
        navy: {
          100: "#cfd5d9",
          200: "#a0abb3",
          300: "#70818d",
          400: "#415767",
          500: "#112d41",
          600: "#0e2434",
          700: "#0a1b27",
          800: "#07121a",
          900: "#03090d",
        },
        white: {
          100: "#fefdfd",
          200: "#fdfcfc",
          300: "#fbfafa",
          400: "#faf9f9",
          500: "#f9f7f7",
          600: "#c7c6c6",
          700: "#959494",
          800: "#646363",
          900: "#323131",
        },
      }
    : {
        blue: {
          900: "#dbe2ef",
          800: "#192e46",
          700: "#264469",
          600: "#325b8c",
          500: "#3f72af",
          400: "#658ebf",
          300: "#8caacf",
          200: "#b2c7df",
          100: "#dbe2ef",
        },
        sky: {
          900: "#2c2d30",
          800: "#585a60",
          700: "#83888f",
          600: "#afb5bf",
          500: "#dbe2ef",
          400: "#e2e8f2",
          300: "#e9eef5",
          200: "#f1f3f9",
          100: "#f8f9fc",
        },
        navy: {
          900: "#03090d",
          800: "#07121a",
          700: "#0a1b27",
          600: "#0e2434",
          500: "#112d41",
          400: "#415767",
          300: "#70818d",
          200: "#a0abb3",
          100: "#cfd5d9",
        },
        white: {
          900: "#323131",
          800: "#646363",
          700: "#959494",
          600: "#c7c6c6",
          500: "#f9f7f7",
          400: "#faf9f9",
          300: "#fbfafa",
          200: "#fdfcfc",
          100: "#fefdfd",
        },
      }),
});

export const themeSetting = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,

      ...(mode === "dark"
        ? {
            primary: {
              main: colors.navy[900],
            },
            secondary: {
              main: colors.white[500],
            },
            neutral: {
              light: colors.blue[200],
              main: colors.blue[500],
              dark: colors.blue[800],
            },
            background: {
              main: colors.white[500],
              default: colors.navy[500],
            },
          }
        : {
            primary: {
              main: colors.sky[500],
            },
            secondary: {
              main: colors.navy[500],
            },
            neutral: {
              light: colors.blue[200],
              main: colors.blue[500],
              dark: colors.blue[800],
            },
            background: {
              default: colors.white[500],
            },
          }),
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSetting(mode)), [mode]);

  return [theme, colorMode];
};
