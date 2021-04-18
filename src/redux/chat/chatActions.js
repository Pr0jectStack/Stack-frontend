import axios from "axios";
import { API } from "../../backend";
import {
  ADD_CHAT_FAILURE,
  ADD_CHAT_REQUEST,
  ADD_CHAT_SUCCESS,
  FETCH_CHAT_FAILURE,
  FETCH_CHAT_REQUEST,
  FETCH_CHAT_SUCCESS,
  TOGGLE_CHAT_VIEW,
} from "./chatTypes";

const fetchChatRequest = () => {
  return {
    type: FETCH_CHAT_REQUEST,
  };
};

const fetchChatSuccess = (chatMessages) => {
  return {
    type: FETCH_CHAT_SUCCESS,
    payload: chatMessages,
  };
};

const fetchChatFailure = (errorMessage) => {
  return {
    type: FETCH_CHAT_FAILURE,
    payload: errorMessage,
  };
};

const addChatRequest = () => {
  return {
    type: ADD_CHAT_REQUEST,
  };
};

const addChatSuccess = (chatMessages) => {
  return {
    type: ADD_CHAT_SUCCESS,
    payload: chatMessages,
  };
};

const addChatFailure = (errorMessage) => {
  return {
    type: ADD_CHAT_FAILURE,
    payload: errorMessage,
  };
};

const toggleChatView = (toggleView) => {
  return {
    type: TOGGLE_CHAT_VIEW,
    payload: toggleView,
  };
};

/**
 * Add new chat message.
 * @param {object} chat - Contains chatId, message, userId, username
 * @returns void
 */
export const addChatMessage = (chat) => {
  return (dispatch) => {
    dispatch(addChatRequest());
    axios
      .post(`${API}/db/addChat`, JSON.stringify(chat), {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;

        if (data.error) {
          dispatch(addChatFailure(data.error));
        } else {
          dispatch(addChatSuccess(data.chats));
        }
      })
      .catch((error) => {
        const errorMsg = error.response.data.error;
        dispatch(addChatFailure(errorMsg));
      });
  };
};

/**
 * Fetch all chats with same {ChatId}
 * @param {string} chatId - Chat Id
 * @returns void
 */
export const fetchChatMessages = (chatId) => {
  return (dispatch) => {
    dispatch(fetchChatRequest());
    axios
      .get(`${API}/db/getChats?chatId=${chatId}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;

        if (data.error) {
          return dispatch(fetchChatFailure(data.error));
        } else {
          dispatch(fetchChatSuccess(data.chats));
        }
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchChatFailure(errorMsg));
      });
  };
};

/**
 * Directly set chat messages without loading.
 * @param {object} chatMessages - Chat messages
 * @returns void
 */
export const setChatMessages = (chatMessages) => {
  return (dispatch) => {
    dispatch(fetchChatSuccess(chatMessages));
  };
};

/**
 * Set Chat Sidebar Toggle View
 * @param {boolean} toggleView - true/false
 * @returns void
 */
export const toggleChat = (toggleView) => {
  return (dispatch) => {
    dispatch(toggleChatView(toggleView));
  };
};
