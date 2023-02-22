import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

import MainPage from 'pages/MainPage';
import FavoritePage from 'pages/FavoritePage';
import ArticlePage from 'pages/ArticlePage';
import AppBar from 'components/AppBar/AppBar';
import Footer from 'components/Footer';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop'

import { Container } from '@mui/material';

import { store } from '../../store/store';
import theme from '../../styles/theme';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Container sx={{ mt: [8, 10] }}>
            <Router>
              <AppBar />

              <Routes>
                <Route path="/article/:code" element={<ArticlePage />} />
                <Route path="/" element={<MainPage />} />
                <Route path="favorites" element={<FavoritePage />} />
              </Routes>
            </Router>

            <Footer />
          </Container>

          <ScrollToTop />
        </ThemeProvider>
      </Provider>
    </StyledEngineProvider>
  );
}

export default App;
