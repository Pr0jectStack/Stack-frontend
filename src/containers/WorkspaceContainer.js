import Workspace from "../components/Workspace/Workspace";
import { connect } from "react-redux";
import {
  addNewWorkspace,
  getWorkspaceById,
} from "../redux/workspace/workspaceActions";

const mapStateToProps = (state) => ({
  data: state.profile.userData,
});

const mapDispatchToProps = (dispatch) => ({
  addNewWorkspace: (data) => dispatch(addNewWorkspace(data)),
  getWorkspaceById: (wid) => dispatch(getWorkspaceById(wid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Workspace);
