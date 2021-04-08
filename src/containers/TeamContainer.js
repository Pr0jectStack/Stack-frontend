import Team from "../components/Team/Team";
import { connect } from "react-redux";
import { addNewWorkspace } from "../redux/workspace/workspaceActions";
import { updateCurrentTeam } from "../redux/team/teamActions";

const mapStateToProps = (state) => ({
  profileData: state.profile.userData,
  workspaceData: state.workspace,
});

const mapDispatchToProps = (dispatch) => ({
  //   addNewWorkspace: (data) => dispatch(addNewWorkspace(data)),
  updateCurrentTeam: (data) => dispatch(updateCurrentTeam(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Team);
