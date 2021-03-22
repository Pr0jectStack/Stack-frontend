import Workspace from "../components/Workspace/Workspace";
import { connect } from "react-redux";
import {
  addNewWorkspace,
  updateCurrentWorkspace,
} from "../redux/workspace/workspaceActions";

const mapStateToProps = (state) => ({
  data: state.profile.userData,
});

const mapDispatchToProps = (dispatch) => ({
  addNewWorkspace: (data) => dispatch(addNewWorkspace(data)),
  updateCurrentWorkspace: (data) => dispatch(updateCurrentWorkspace(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Workspace);
