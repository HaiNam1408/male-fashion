import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import { Provider } from "react-redux";
import { GlobalStyle } from "./styles/base/GlobalStyle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Provider>
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
  // </Provider>
);