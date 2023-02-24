import { store } from 'store/store';
import { Provider } from 'react-redux';
import { SnackbarProvider, useSnackbar } from 'notistack';

import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

import theme from 'theme/index';

import { IconButton, styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Application from 'components/Application';

function SnackbarCloseButton({ snackbarKey }:{snackbarKey: string | number}) {
  const { closeSnackbar } = useSnackbar();

  return (
    <IconButton onClick={() => closeSnackbar(snackbarKey)}>
      <CloseIcon sx={{ color: 'background.paper' }} />
    </IconButton>
  );
}

const StyledSnackbarProvider = styled(SnackbarProvider)`
  &.SnackbarContent-root {
    margin-bottom: 26px;
  }
`;

function AppWrapper() {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <StyledSnackbarProvider
            action={(snackbarKey) => <SnackbarCloseButton snackbarKey={snackbarKey} />}
            maxSnack={2}
          >
            <Application />
          </StyledSnackbarProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  );
}

export default AppWrapper;
