import React from "react";
import ReactDOM from "react-dom/client";
// 루트 기능을 사용하기 위해 전체 app을 BrowserRouter로 감싸줘야함
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

// store를 주입하기 위한 Provider
import { Provider } from "react-redux";
// 주입하기위한 store
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
