import { ADD_WORKSPACE_FAILURE, ADD_WORKSPACE_REQUEST, ADD_WORKSPACE_SUCCESS } from "../workspace/workspaceTypes";
import {
  EDIT_USER_PROFILE_REQUEST,
  EDIT_USER_PROFILE_SUCCESS,
  EDIT_USER_PROFILE_FAILURE,
} from "./profileTypes";

const initialState = {
  loading: false,
  userData: null,
  error: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_USER_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        userData: null,
        error: "",
      };
    case EDIT_USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload,
        error: "",
      };
    case EDIT_USER_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        userData: null,
        error: action.payload,
      };
    case ADD_WORKSPACE_SUCCESS:
      const newUserData =state.userData;
      newUserData.workspaces.push(action.payload);
      return {
        ...state,
        loading:false,
        userData:newUserData,
        error:false
      }
    case ADD_WORKSPACE_REQUEST:
      return{
        ...state,
        loading:true,
        error:""
      }
    case ADD_WORKSPACE_FAILURE:
      return{
        ...state,
        loading:false,
        error:action.payload
      }
    default:
      return state;
  }
};

export default profileReducer;
