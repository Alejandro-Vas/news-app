import { createTheme } from '@mui/material/styles';

export const theme = createTheme();

theme.typography.h1 = {
  fontSize: '5rem',
  '@media (max-width:1000px)': {
    fontSize: '2.5rem',
  },
  '@media (max-width:500px)': {
    fontSize: '2rem',
    padding: '1rem',
  },
};

theme.typography.subtitle1 = {
  fontSize: '2rem',
  '@media (max-width:1000px)': {
    fontSize: '2rem',
  },
  '@media (max-width:500px)': {
    fontSize: '1.75rem',
  },
};

theme.typography.subtitle2 = {
  fontSize: '1.6rem',
  '@media (max-width:1000px)': {
    fontSize: '1.5rem',
  },
  '@media (max-width:500px)': {
    fontSize: '1.4rem',
  },
};

theme.typography.body1 = {
  fontSize: '1.5rem',
  '@media (max-width:1000px)': {
    fontSize: '1.25rem',
  },
  '@media (max-width:500px)': {
    fontSize: '1.25rem',
  },
};
