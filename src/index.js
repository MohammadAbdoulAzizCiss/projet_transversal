import React from "react";
import { render } from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";

render(
  // <Provider>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </Provider>
  document.getElementById("root")
);

serviceWorker.unregister();
