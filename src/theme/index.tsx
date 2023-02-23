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

    button: {
      textTransform: 'none',
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
        },

        body: {
          margin: 0,
          overflowX: 'hidden',
          fontFamily: '"Roboto", "Helvetica", "Arial", "sansSerif"',
        },

        a: {
          color: 'unset',
          textDecoration: 'none',
          cursor: 'pointer',
        },

        ul: {
          listStyleType: 'none',
          padding: 0,
          margin: 0,
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: 'Roboto',
          color: 'black',
          textDecoration: 'none',
          cursor: 'pointer',
        },
      },
    },

    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },

    MuiBadge: {
      styleOverrides: {
        badge: {
          lineHeight: 'unset',
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            padding: '12px 1rem',
          },

          label: {
            top: '-6px',
          },
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        select: {
          padding: '12px 1rem',
        },
      },
    },
  },
}, ruRU);

export default responsiveFontSizes(appTheme);
