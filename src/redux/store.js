// * { REDUX } */
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import persistReducer from "./rootReducer";

import { persistStore } from "redux-persist";

const store = createStore(
  persistReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

const persistor = persistStore(store); // Persisted store

export default { store, persistor };
