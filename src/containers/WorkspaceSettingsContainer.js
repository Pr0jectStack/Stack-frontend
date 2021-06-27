import WorkspaceSettings from "../components/WorkspaceSettings/WorkspaceSettings";
import { connect } from "react-redux";
import {
  deleteWorkspace,
  getWorkspaceById,
  updateWorkspaceDetails,
} from "../redux/workspace/workspaceActions";

const mapStateToProps = (state) => {
  return {
    data: state.workspace,
    userId: state.profile.userData._id,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getWorkspaceById: (wid) => dispatch(getWorkspaceById(wid)),
  updateWorkspaceDetails: (data) => dispatch(updateWorkspaceDetails(data)),
  deleteWorkspace: (data) => dispatch(deleteWorkspace(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceSettings);
