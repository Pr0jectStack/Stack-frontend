import Task from "../components/Task/Task";
import { connect } from "react-redux";
import {
  addNewTask,
  assignMembersToTask,
  deleteTask,
  editTask,
  moveTask,
  setTasks,
} from "../redux/task/taskActions";
import { getTeamById } from "../redux/team/teamActions";
import { toggleChat } from "../redux/chat/chatActions";

const mapStateToProps = (state) => ({
  data: state.task,
  teamData: state.team,
  userId: state.profile.userData._id,
});

const mapDispatchToProps = (dispatch) => ({
  setTasks: (tasks, tid, owner, teamLeader) =>
    dispatch(setTasks(tasks, tid, owner, teamLeader)),
  getTeamById: (tid) => dispatch(getTeamById(tid)),
  addTask: (task, tid, userId) => dispatch(addNewTask(task, tid, userId)),
  deleteTask: (taskId, tid, userId) =>
    dispatch(deleteTask(taskId, tid, userId)),
  moveTask: (taskId, tid, destination) =>
    dispatch(moveTask(taskId, tid, destination)),
  editTask: (task, tid, userId) => dispatch(editTask(task, tid, userId)),
  assignMembers: (taskId, tid, userId, members) =>
    dispatch(assignMembersToTask(taskId, tid, userId, members)),
  toggleChatView: (toggleView) => dispatch(toggleChat(toggleView)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);
