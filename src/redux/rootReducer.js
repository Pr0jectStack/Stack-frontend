import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import signInReducer from "./auth/signinReducer";
import signUpReducer from "./auth/signUpReducer";
import profileReducer from "./profile/profileReducer";
import settingsReducer from "./settings/settingsReducer";
import workspaceReducer from "./workspace/workspaceReducer";
import guestProfileReducer from "./guestProfile/guestProfileReducer";
import taskReducer from "./task/taskReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["profile", "workspace"], // Reducers that we want to persist
};

const rootReducer = combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer,
  profile: profileReducer,
  settings: settingsReducer,
  workspace: workspaceReducer,
  guestProfile: guestProfileReducer,
  task: taskReducer,
});

export default persistReducer(persistConfig, rootReducer); // Persisted Reducers
