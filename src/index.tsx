import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react';
import './index.css';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './components/app/App';

import './styles/styles.scss';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container)

root.render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </StrictMode>,
);
