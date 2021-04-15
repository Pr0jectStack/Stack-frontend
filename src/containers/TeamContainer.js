import Team from "../components/Team/Team";
import { connect } from "react-redux";
import { updateCurrentWorkspace } from "../redux/workspace/workspaceActions";


const mapStateToProps = (state) => ({
  profileData: state.profile.userData,
  workspaceData: state.workspace,
});

const mapDispatchToProps = (dispatch) => ({
  updateCurrentWorkspace: (data) => dispatch(updateCurrentWorkspace(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Team);
