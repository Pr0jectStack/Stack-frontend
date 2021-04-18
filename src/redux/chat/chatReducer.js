import {
  ADD_CHAT_FAILURE,
  ADD_CHAT_REQUEST,
  ADD_CHAT_SUCCESS,
  FETCH_CHAT_FAILURE,
  FETCH_CHAT_REQUEST,
  FETCH_CHAT_SUCCESS,
  TOGGLE_CHAT_VIEW,
} from "./chatTypes";

const initialState = {
  loading: false,
  chatMessages: null,
  chatToggle: false,
  error: "",
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHAT_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case FETCH_CHAT_SUCCESS:
      return {
        ...state,
        loading: false,
        chatMessages: action.payload,
        error: "",
      };
    case FETCH_CHAT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_CHAT_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case ADD_CHAT_SUCCESS:
      return {
        ...state,
        loading: false,
        chatMessages: action.payload,
        error: "",
      };
    case ADD_CHAT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case TOGGLE_CHAT_VIEW:
      return {
        ...state,
        chatToggle: action.payload,
      };
    default:
      return state;
  }
};

export default chatReducer;
