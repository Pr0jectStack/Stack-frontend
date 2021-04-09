import Landing from "../utils/Landing";
import { connect } from "react-redux";
import {
  addNewWorkspace,
  updateCurrentWorkspace,
} from "../redux/workspace/workspaceActions";
import { updateCurrentTeam } from "../redux/team/teamActions";

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  updateCurrentTeam: (data) => dispatch(updateCurrentTeam(data)),
  updateCurrentWorkspace: (data) => dispatch(updateCurrentWorkspace(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
