import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import MainPage from 'pages/MainPage';
import FavoritePage from 'pages/FavoritePage';
import ArticlePage from 'pages/ArticlePage';
import AboutPage from 'pages/AboutPage';
import AppBar from 'components/AppBar';
import BottomNavigation from 'components/BottomNavigation';
import ScrollToTop from 'components/ScrollToTop';
import useBreakPoints from 'hooks/useBreakPoints';
import useNotifier from 'hooks/useNotifier';
import NotFound404Page from '../../pages/NotFound404Page/index';

function App() {
  const { isMobile } = useBreakPoints();
  useNotifier();

  return (
    <>
      <Router>
        <Container sx={{ my: [10, 12], pb: 4, px: 0 }}>
          <AppBar />

          <Routes>
            <Route path="*" element={<NotFound404Page />} />
            <Route path="/article/:code" element={<ArticlePage />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/favorites" element={<FavoritePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>

        </Container>
        {isMobile && <BottomNavigation />}
      </Router>

      <ScrollToTop />
    </>
  );
}

export default App;
