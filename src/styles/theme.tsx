import { createTheme } from "@mui/material/styles";

export const theme = createTheme();

theme.typography.h1 = {
  fontSize: "5rem",
  "@media (max-width:1000px)": {
    fontSize: "2.5rem",
  },
  "@media (max-width:500px)": {
    fontSize: "2rem",
    padding: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "5rem",
  },
};
