import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { Container } from '@mui/material';

import MainPage from 'pages/MainPage';
import FavoritePage from 'pages/FavoritePage';
import ArticlePage from 'pages/ArticlePage/ArticlePage';
import AboutPage from 'pages/AboutPage/index';
import AppBar from 'components/AppBar/AppBar';
import BottomNavigation from 'components/BottomNavigation';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
import useBreakPoints from 'hooks/useBreakPoints';

import { store } from 'store/store';
import theme from 'theme/index';

function App() {
  const { isMobile } = useBreakPoints();
  return (
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <Container sx={{ my: [10, 12], pb: 4, px: 0 }}>
              <AppBar />

              <Routes>
                <Route path="article/:code" element={<ArticlePage />} />
                <Route path="/" element={<MainPage />} />
                <Route path="favorites" element={<FavoritePage />} />
                <Route path="about" element={<AboutPage />} />
              </Routes>

            </Container>
            {isMobile && <BottomNavigation />}
          </Router>

          <ScrollToTop />
        </ThemeProvider>
      </Provider>
    </StyledEngineProvider>
  );
}

export default App;
