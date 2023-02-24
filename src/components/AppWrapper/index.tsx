import { store } from 'store/store';
import { Provider } from 'react-redux';
import { SnackbarProvider, useSnackbar } from 'notistack';

import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import App from 'components/App/index';

import theme from 'theme/index';

import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function SnackbarCloseButton({ snackbarKey }:{snackbarKey: string | number}) {
  const { closeSnackbar } = useSnackbar();

  return (
    <IconButton onClick={() => closeSnackbar(snackbarKey)}>
      <CloseIcon sx={{ color: 'background.paper' }} />
    </IconButton>
  );
}

function AppWrapper() {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <SnackbarProvider
            action={(snackbarKey) => <SnackbarCloseButton snackbarKey={snackbarKey} />}
          >
            <App />
          </SnackbarProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  );
}

export default AppWrapper;
