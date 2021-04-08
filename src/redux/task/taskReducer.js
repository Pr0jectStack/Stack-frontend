import {
  ADD_TASK_FAILURE,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  MOVE_TASK_FAILURE,
  MOVE_TASK_REQUEST,
  MOVE_TASK_SUCCESS,
  SET_TASK,
} from "./taskTypes";

const initialState = {
  loading: false,
  tasks: null,
  tid: null,
  owner: null,
  teamLeader: null,
  error: "",
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASK:
      return {
        ...state,
        loading: false,
        tasks: action.payload.tasks,
        tid: action.payload.tid,
        owner: action.payload.owner,
        teamLeader: action.payload.teamLeader,
        error: "",
      };
    case ADD_TASK_REQUEST:
      return {
        ...state,
        loading: true,
        tasks: null,
        error: "",
      };
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: action.payload,
        error: "",
      };
    case ADD_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        tasks: null,
        error: action.payload,
      };
    case MOVE_TASK_REQUEST:
      return {
        ...state,
        loading: true,
        tasks: null,
        error: "",
      };
    case MOVE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: action.payload,
        error: "",
      };
    case MOVE_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        tasks: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
