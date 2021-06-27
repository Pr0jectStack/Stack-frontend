import {
  EDIT_USER_PROFILE_REQUEST,
  EDIT_USER_PROFILE_SUCCESS,
  EDIT_USER_PROFILE_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./profileTypes";

import {
  ADD_WORKSPACE_FAILURE,
  ADD_WORKSPACE_REQUEST,
  ADD_WORKSPACE_SUCCESS,
} from "../workspace/workspaceTypes";

const initialState = {
  loading: false,
  userData: null,
  error: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_USER_PROFILE_REQUEST:
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case EDIT_USER_PROFILE_SUCCESS:
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload,
        error: "",
      };
    case EDIT_USER_PROFILE_FAILURE:
    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // TODO: FIND A BETTER WAY TO DO THIS
    // Just a hacky way to force reload.
    // CreateWorkspace relies on profile data for the loading logic, hence the problem.
    case ADD_WORKSPACE_SUCCESS:
      return {
        ...state,
        loading: true, // WHY ? Look at Create Workspace
        error: "",
      };

    case ADD_WORKSPACE_REQUEST:
      return {
        ...state,
        loading: false, // WHY ? Look at Create Workspace
        error: "",
      };

    case ADD_WORKSPACE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default profileReducer;
