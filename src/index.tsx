import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { store } from 'store/store';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';

import theme from 'theme/index';

import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import App from './components/app/App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <StrictMode>
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <SnackbarProvider>
            <App />
          </SnackbarProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  </StrictMode>,
);
