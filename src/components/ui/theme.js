import { createTheme } from "@material-ui/core/styles";
//https://v4.mui.com/pt/customization/palette/
//https://v4.mui.com/pt/customization/default-theme/?expand-path=$.palette

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

const defaultTheme = createTheme();

export default createTheme({
  ...defaultTheme,
  palette: {
    common: {
      arcBlue: `${arcBlue}`,
      arcOrange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      ...defaultTheme.secondary,
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
  },
  breakpoints: { ...defaultTheme.breakpoints },
});
