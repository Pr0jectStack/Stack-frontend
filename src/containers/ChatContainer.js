import Chat from "../components/Chat/Chat";
import { connect } from "react-redux";
import {
  addChatMessage,
  fetchChatMessages,
  setChatMessages,
  toggleChat,
} from "../redux/chat/chatActions";

const mapStateToProps = (state) => ({
  data: state.chat,
  userId: state.profile.userData._id,
  username: state.profile.userData.username,
});

const mapDispatchToProps = (dispatch) => ({
  addChatMessage: (chat) => dispatch(addChatMessage(chat)),
  fetchChatMessages: (chatId) => dispatch(fetchChatMessages(chatId)),
  setChatMessages: (chatMessages) => dispatch(setChatMessages(chatMessages)),
  toggleChatView: (toggleView) => dispatch(toggleChat(toggleView)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
