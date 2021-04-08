import Task from "../components/Task/Task";
import { connect } from "react-redux";
import {
  addNewTask,
  assignMembersToTask,
  deleteTask,
  editTask,
  moveTask,
} from "../redux/task/taskActions";

const mapStateToProps = (state) => ({
  data: state.task,
  userId: state.profile.userData._id,
});

const mapDispatchToProps = (dispatch) => ({
  addTask: (task, tid, userId) => dispatch(addNewTask(task, tid, userId)),
  deleteTask: (taskId, tid, userId) =>
    dispatch(deleteTask(taskId, tid, userId)),
  moveTask: (taskId, tid, destination) =>
    dispatch(moveTask(taskId, tid, destination)),
  editTask: (task, tid, userId) => dispatch(editTask(task, tid, userId)),
  assignMembers: (taskId, tid, userId, members) =>
    dispatch(assignMembersToTask(taskId, tid, userId, members)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);
