import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { Container } from '@mui/material';

import MainPage from 'pages/MainPage';
import FavoritePage from 'pages/FavoritePage';
import ArticlePage from 'pages/ArticlePage/ArticlePage';
import AppBar from 'components/AppBar/AppBar';
import BottomNavigation from 'components/BottomNavigation';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
import useBreakPoints from 'hooks/useBreakPoints';

import { store } from 'store/store';
import theme from 'styles/theme';

function App() {
  const { isMobile } = useBreakPoints();
  return (
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Container sx={{ mt: [8, 10], pb: 4 }}>
            <Router>
              <AppBar />

              <Routes>
                <Route path="/article/:code" element={<ArticlePage />} />
                <Route path="/" element={<MainPage />} />
                <Route path="favorites" element={<FavoritePage />} />
              </Routes>
            </Router>

          </Container>
          {isMobile && <BottomNavigation />}

          <ScrollToTop />
        </ThemeProvider>
      </Provider>
    </StyledEngineProvider>
  );
}

export default App;
