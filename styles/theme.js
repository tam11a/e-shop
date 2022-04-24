import { createTheme } from "@mui/material";

// color palette
const primary = "#463f3a";
const secondary = "#555b6e"; // bee3db
const background = "#faf9f9";
const paper = "#ffffff";
const tarnary = "#3c6e71";

const breakpoints = {
  // for responsiveness
  values: {
    xs: 0,
    xms: 380,
    sm: 600, // Phone
    md: 900, // Tablet/Laptop
    lg: 1200, // Desktop
    xl: 1536,
  },
};

const theme = createTheme({
  breakpoints: breakpoints,
  palette: {
    primary: {
      main: primary,
      contrastText: background,
    },
    secondary: {
      main: secondary,
      contrastText: background,
    },
    background: {
      default: background,
      paper: paper,
    },
    success: {
      main: tarnary,
      contrastText: background,
    },
  },
  typography: {
    // fontFamily: "agencyFB, sans-serif",

    fontFamily: "Quicksand, sans-serif",
    allVariants: {
      letterSpacing: 1,
      color: secondary,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderRadius: 0,
        },
        contained: {
          borderRadius: "2px",
        },
      },
    }
  },
});

theme.typography.normal = {
  fontSize: "1rem",
  color: theme.palette.secondary.dark,
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
};

export default theme;