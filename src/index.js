import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const { store, persistor } = configureStore;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

//serviceWorker.register();
