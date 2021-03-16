// * { REDUX } */
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

import { persistStore } from "redux-persist";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

const persistor = persistStore(store); // Persisted store

export default { store, persistor };
