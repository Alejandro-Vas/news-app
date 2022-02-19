import { Provider } from "react-redux";
import { store } from "../../store/store";

import ArticleSearchBox from "components/articleSearchBox/ArticleSearchBox";
import Header from "components/header/Header";
import Section from "components/articleList/ArticleList";

function App() {
  return (
    <Provider store={store}>
      <Header />

      <div className="container">
        <div className="App-logo"></div>
        <ArticleSearchBox />
        <Section />
      </div>
      <hr />
    </Provider>
  );
}

export default App;
