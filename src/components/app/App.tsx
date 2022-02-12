import { Provider } from "react-redux";
import { store } from "../../store/store";

import InputBox from "components/inputBox/InputBox";
import Header from "components/header/Header";
import Section from "components/section/Section";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="App-logo">
          <Header />
        </div>
        <div className="App-logo">
          <InputBox />
        </div>
        <Section />
      </div>
    </Provider>
  );
}

export default App;
