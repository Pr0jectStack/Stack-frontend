// * { REDUX } */
import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "./RootReducer";
import { loadState, saveState } from "./localStorage";
import thunk from "redux-thunk";
import { throttle } from "lodash/throttle";
const persistedState = loadState();

function configureStore() {
  return createStore(
    RootReducer,
    persistedState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : (f) => f
    )
  );
}

const store = configureStore({});

//TODO: INCLUDE THROTTLE TO AVOID CONTINIOUS LISTENING
store.subscribe(() => {
  saveState({
    login_details: store.getState().login_details,
  });
});

export default store;
