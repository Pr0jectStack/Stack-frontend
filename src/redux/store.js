// * { REDUX } */
import {createStore, applyMiddleware, compose} from 'redux';
import RootReducer from "./RootReducer";
import thunk from 'redux-thunk';

 function configureStore(initialState){
    return createStore(
    RootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
   );
   }

const store = configureStore({});

export default store;