import { combineReducers } from "redux";
import { login_details, userDetails } from "./reducer";

export default combineReducers({
  login_details,
  userDetails,
});
