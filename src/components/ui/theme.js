import { createTheme } from '@material-ui/core/styles';
//https://v4.mui.com/pt/customization/palette/
//https://v4.mui.com/pt/customization/default-theme/?expand-path=$.palette

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

export default createTheme({
  palette: {
    common: {
      arcBlue: `${arcBlue}`,
      arcOrange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`
    },
    secondary: {
      main: `${arcOrange}`
    }
  },
  typography: {
    h3: {
      fontWeight: 300,
    },
    
  }
}); 