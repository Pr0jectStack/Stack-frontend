import { combineReducers } from "redux";
import { login_details, userDetails } from "./auth/signinReducer";

export default combineReducers({
  login_details,
  userDetails,
});
