import { UPDATE_CURRENT_WORKSPACE_FAILURE, UPDATE_CURRENT_WORKSPACE_REQUEST,UPDATE_CURRENT_WORKSPACE_SUCCESS } from "../workspace/workspaceTypes";
const initialState = {
  loading: false,
  currentWorkspace: null,
  error: "",
};

const workspaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_WORKSPACE_REQUEST:
      return {
        ...state,
        loading: true,
        currentWorkspace: null,
        error: "",
      };
    case UPDATE_CURRENT_WORKSPACE_SUCCESS:
      return {
        ...state,
        loading: false,
        currentWorkspace: action.payload,
        error: "",
      };
    case UPDATE_CURRENT_WORKSPACE_FAILURE:
      return {
        ...state,
        loading: false,
        currentWorkspace: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default workspaceReducer;
