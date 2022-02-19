import { Provider } from "react-redux";
import { store } from "../../store/store";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from "components/header/Header";

import NavBar from "components/navBar/NavBar";
import MainPage from "pages/MainPage";
import FavoritePage from "pages/FavoritePage";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
