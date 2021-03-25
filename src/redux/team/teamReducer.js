import {
  UPDATE_CURRENT_TEAM_FAILURE,
  UPDATE_CURRENT_TEAM_REQUEST,
  UPDATE_CURRENT_TEAM_SUCCESS,
} from "../team/teamTypes";
const initialState = {
  loading: false,
  currentTeam: null,
  error: "",
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_TEAM_REQUEST:
      return {
        ...state,
        loading: true,
        currentTeam: null,
        error: "",
      };
    case UPDATE_CURRENT_TEAM_SUCCESS:
      return {
        ...state,
        loading: false,
        currentTeam: action.payload,
        error: "",
      };
    case UPDATE_CURRENT_TEAM_FAILURE:
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
