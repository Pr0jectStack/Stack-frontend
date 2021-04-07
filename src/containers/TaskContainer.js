import Task from "../components/Task/Task";
import { connect } from "react-redux";
import { addNewTask, deleteTask } from "../redux/task/taskActions";

const mapStateToProps = (state) => ({
  data: state.task,
  userId: state.profile.userData._id,
});

const mapDispatchToProps = (dispatch) => ({
  addTask: (task, tid, userId) => dispatch(addNewTask(task, tid, userId)),
  deleteTask: (taskId, tid, userId) => dispatch(deleteTask(taskId, tid, userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);
