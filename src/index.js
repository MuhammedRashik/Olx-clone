import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Context } from "./store/firebaseContext";
import { FirebseContext } from "./store/firebaseContext";
import { BrowserRouter } from "react-router-dom";
import firebase from "./firebase/config";

ReactDOM.render(
  <React.StrictMode>
    <FirebseContext.Provider value={{ firebase }}>
        <Context>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Context>
    </FirebseContext.Provider>
  </React.StrictMode>,

  document.getElementById("root")
);
