import {
  FETCH_WORKSPACE_FAILURE,
  FETCH_WORKSPACE_REQUEST,
  FETCH_WORKSPACE_SUCCESS,
  ADD_MEMBERS_TO_WORKSPACE_FAILURE,
  ADD_MEMBERS_TO_WORKSPACE_REQUEST,
  ADD_MEMBERS_TO_WORKSPACE_SUCCESS,
  UDPATE_WORKSPACE_DETAILS_REQUEST,
  UDPATE_WORKSPACE_DETAILS_SUCCESS,
  UDPATE_WORKSPACE_DETAILS_FAILURE,
  DELETE_WORKSPACE_REQUEST,
  DELETE_WORKSPACE_SUCCESS,
  DELETE_WORKSPACE_FAILURE,
} from "../workspace/workspaceTypes";
import {
  ADD_TEAM_FAILURE,
  ADD_TEAM_REQUEST,
  ADD_TEAM_SUCCESS,
  ADD_MEMBERS_TO_TEAM_FAILURE,
  ADD_MEMBERS_TO_TEAM_REQUEST,
  ADD_MEMBERS_TO_TEAM_SUCCESS,
} from "../team/teamTypes";
const initialState = {
  loading: false,
  currentWorkspace: null,
  error: "",
  addingMembers: false,
  addingMembersError: "",
  addingMembersToTeam: false,
  addingMembersToTeamError: "",
};

const workspaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WORKSPACE_REQUEST:
      return {
        ...state,
        loading: true,
        currentWorkspace: null,
        error: "",
      };
    case FETCH_WORKSPACE_SUCCESS:
      return {
        ...state,
        loading: false,
        currentWorkspace: action.payload,
        error: "",
      };
    case FETCH_WORKSPACE_FAILURE:
      return {
        ...state,
        loading: false,
        currentWorkspace: null,
        error: action.payload,
      };

    case ADD_TEAM_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
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
    case ADD_TEAM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_MEMBERS_TO_WORKSPACE_REQUEST:
      return {
        ...state,
        addingMembers: true,
        addingMembersError: "",
      };
    case ADD_MEMBERS_TO_WORKSPACE_SUCCESS:
      return {
        ...state,
        currentWorkspace: action.payload,
        addingMembers: false,
        addingMembersError: "",
      };
    case ADD_MEMBERS_TO_WORKSPACE_FAILURE:
      return {
        ...state,
        addingMembers: false,
        addingMembersError: action.payload,
      };

    case ADD_MEMBERS_TO_TEAM_REQUEST:
      return {
        ...state,
        addingMembersToTeam: true,
        addingMembersToTeamError: "",
      };
    case ADD_MEMBERS_TO_TEAM_SUCCESS:
      let updatedTeam = action.payload;
      /**
       * Go through teams of current workspace
       * Find the team whose id === updateTeam._id
       * Delete that team
       * Insert updatedTeam at that position
       */
      let currentWorkspaceUpdated = state.currentWorkspace;
      for (let i = 0; i < currentWorkspaceUpdated.teams.length; i++) {
        if (currentWorkspaceUpdated.teams[i]._id === updatedTeam._id) {
          currentWorkspaceUpdated.teams[i] = updatedTeam;
          break;
        }
      }
      return {
        ...state,
        currentWorkspace: currentWorkspaceUpdated,
        addingMembersToTeam: false,
        addingMembersToTeamError: "",
      };

    case ADD_MEMBERS_TO_TEAM_FAILURE:
      return {
        ...state,
        addingMembersToTeam: false,
        addingMembersToTeamError: action.payload,
      };

    case UDPATE_WORKSPACE_DETAILS_REQUEST:
    case DELETE_WORKSPACE_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case UDPATE_WORKSPACE_DETAILS_SUCCESS:
    case DELETE_WORKSPACE_SUCCESS:
      return {
        ...state,
        loading: false,
        currentWorkspace: action.payload,
        error: "",
      };
    case UDPATE_WORKSPACE_DETAILS_FAILURE:
    case DELETE_WORKSPACE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default workspaceReducer;
