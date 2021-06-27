import Profile from "../components/Profile/Profile";
import { connect } from "react-redux";
import { editUserProfile, getUserById } from "../redux/profile/profileActions";
import { getTeamById } from "../redux/team/teamActions";
import { getWorkspaceById } from "../redux/workspace/workspaceActions";

const mapStateToProps = (state) => ({
  data: state.profile,
});

const mapDispatchToProps = (dispatch) => ({
  getUserById: (userId) => dispatch(getUserById(userId)),
  editUserProfile: (data) => dispatch(editUserProfile(data)),
  getTeamById: (tid) => dispatch(getTeamById(tid)),
  getWorkspaceById: (wid) => dispatch(getWorkspaceById(wid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
