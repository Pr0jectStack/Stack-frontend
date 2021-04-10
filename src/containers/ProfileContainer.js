import Profile from "../components/Profile/Profile";
import { connect } from "react-redux";
import { editUserProfile } from "../redux/profile/profileActions";
import { updateCurrentTeam } from "../redux/team/teamActions";
import { updateCurrentWorkspace } from "../redux/workspace/workspaceActions";

const mapStateToProps = (state) => ({
  data: state.profile,
});

const mapDispatchToProps = (dispatch) => ({
  editUserProfile: (data) => dispatch(editUserProfile(data)),
  updateCurrentTeam: (tid) => dispatch(updateCurrentTeam(tid)),
  updateCurrentWorkspace: (wid) => dispatch(updateCurrentWorkspace(wid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
