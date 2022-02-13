import { Provider } from "react-redux";
import { store } from "../../store/store";

import ArticleSearchBox from "components/articleSearchBox/ArticleSearchBox";
import Header from "components/header/Header";
import Section from "components/articleList/ArticleList";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="App-logo">
          <Header />
        </div>
        <div className="App-logo">
          <ArticleSearchBox />
        </div>
        <Section />
      </div>
    </Provider>
  );
}

export default App;
