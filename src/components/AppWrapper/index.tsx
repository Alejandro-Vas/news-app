import { store } from 'store/store';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';

import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import App from 'components/App/index';

import theme from 'theme/index';

function AppWrapper() {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <SnackbarProvider>
            <App />
          </SnackbarProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  );
}

export default AppWrapper;
