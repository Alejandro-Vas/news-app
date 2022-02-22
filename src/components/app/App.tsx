import { Provider } from "react-redux";
import { store } from "../../store/store";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import Header from "components/header/Header";
import NavBar from "components/navBar/NavBar";
import MainPage from "pages/MainPage";
import FavoritePage from "pages/FavoritePage";
import { theme } from "../../styles/theme";

function App() {
  return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Header />
          <Router>
            <NavBar />
            <div className="container">
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="favorites" element={<FavoritePage />} />
              </Routes>
            </div>
          </Router>
        </ThemeProvider>
      </Provider>
  );
}

export default App;
