import {
  ADD_MEMBERS_TO_TEAM_FAILURE,
  ADD_MEMBERS_TO_TEAM_REQUEST,
  ADD_MEMBERS_TO_TEAM_SUCCESS,
  ADD_TEAM_FAILURE,
  ADD_TEAM_REQUEST,
  ADD_TEAM_SUCCESS,
  FETCH_TEAM_FAILURE,
  FETCH_TEAM_REQUEST,
  FETCH_TEAM_SUCCESS,
} from "../team/teamTypes";

const initialState = {
  loading: false,
  currentTeam: null,
  error: "",
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEAM_REQUEST:
      return {
        ...state,
        loading: true,
        currentTeam: null,
        error: "",
      };
    case FETCH_TEAM_SUCCESS:
      return {
        ...state,
        loading: false,
        currentTeam: action.payload,
        error: "",
      };
    case FETCH_TEAM_FAILURE:
      return {
        ...state,
        loading: false,
        currentTeam: null,
        error: action.payload,
      };
    case ADD_TEAM_REQUEST:
    case ADD_MEMBERS_TO_TEAM_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case ADD_TEAM_SUCCESS:
    case ADD_MEMBERS_TO_TEAM_SUCCESS:
      return {
        ...state,
        loading: false,
        currentTeam: action.payload,
        error: "",
      };
    case ADD_TEAM_FAILURE:
    case ADD_MEMBERS_TO_TEAM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default teamReducer;
