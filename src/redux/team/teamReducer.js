import {
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
    default:
      return state;
  }
};

export default teamReducer;
