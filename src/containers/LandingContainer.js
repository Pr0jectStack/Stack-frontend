import Landing from "../utils/Landing";
import { connect } from "react-redux";
import {
  addNewWorkspace,
  deleteWorkspace,
  getWorkspaceById,
} from "../redux/workspace/workspaceActions";
import { getTeamById } from "../redux/team/teamActions";

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  getTeamById: (data) => dispatch(getTeamById(data)),
  getWorkspaceById: (data) => dispatch(getWorkspaceById(data)),
  deleteWorkspace: (data) => dispatch(deleteWorkspace(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
