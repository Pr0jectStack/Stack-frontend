import { UPDATE_CURRENT_WORKSPACE_FAILURE, UPDATE_CURRENT_WORKSPACE_REQUEST,UPDATE_CURRENT_WORKSPACE_SUCCESS,  ADD_MEMBERS_TO_WORKSPACE_FAILURE,
  ADD_MEMBERS_TO_WORKSPACE_REQUEST,
  ADD_MEMBERS_TO_WORKSPACE_SUCCESS } from "../workspace/workspaceTypes";
import {
  ADD_TEAM_FAILURE,
  ADD_TEAM_REQUEST,
  ADD_TEAM_SUCCESS,
} from "../team/teamTypes";
const initialState = {
  loading: false,
  currentWorkspace: null,
  error: "",
  addingMembers:false,
  addingMembersError:""
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
    case ADD_TEAM_SUCCESS:
        const currentWorkspace = state.currentWorkspace;
        currentWorkspace.teams.push(action.payload);
        return {
          ...state,
          loading: false,
          currentWorkspace: currentWorkspace,
          error: false,
        };
    case ADD_TEAM_REQUEST:
        return {
          ...state,
          loading: true,
          error: "",
        };
    case ADD_TEAM_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
    case ADD_MEMBERS_TO_WORKSPACE_SUCCESS:
        return {
          ...state,
          addingMembers: false,
          addingMembersError:""
        };
    case ADD_MEMBERS_TO_WORKSPACE_REQUEST:
        return {
          ...state,
          addingMembers: true,
          addingMembersError: "",
        };
    case ADD_MEMBERS_TO_WORKSPACE_FAILURE:
        return {
          ...state,
          addingMembers: false,
          addingMembersError: action.payload,
        };
    default:
      return state;
  }
};

export default workspaceReducer;
