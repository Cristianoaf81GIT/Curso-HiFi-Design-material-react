import { createTheme } from "@material-ui/core/styles";
//https://v4.mui.com/pt/customization/palette/
//https://v4.mui.com/pt/customization/default-theme/?expand-path=$.palette

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";

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
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: `${arcBlue}`,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.7rem",
      color: `${arcBlue}`,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: `${arcGrey}`,
    },
    learnButton: {
      borderColor: arcBlue,
      color: arcBlue,
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  },
  breakpoints: { ...defaultTheme.breakpoints },
});
