import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { ruRU } from '@mui/material/locale';

const appTheme = createTheme({
  typography: {
    h1: {
      fontSize: '2.3rem',
      fontWeight: 500,
    },

    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },

    h3: {
      fontSize: '1.6rem',
      fontWeight: 500,
    },

    h4: {
      fontSize: '1.28rem',
      fontWeight: 500,
    },

    h5: {
      fontSize: '1.28rem',
      fontWeight: 500,
    },

    h6: {
      fontSize: '1.28rem',
      fontWeight: 500,
    },
  },
}, ruRU);

export default responsiveFontSizes(appTheme);
