import WorkspaceSettings from "../components/WorkspaceSettings/WorkspaceSettings";
import { connect } from "react-redux";
import {
  getWorkspaceById,
  updateWorkspaceDetails,
} from "../redux/workspace/workspaceActions";

const mapStateToProps = (state) => {
  return {
    data: state.workspace,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getWorkspaceById: (wid) => dispatch(getWorkspaceById(wid)),
  updateWorkspaceDetails: (data) => dispatch(updateWorkspaceDetails(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceSettings);
