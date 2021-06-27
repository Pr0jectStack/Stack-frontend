import Team from "../components/Team/Team";
import { connect } from "react-redux";
import { getWorkspaceById } from "../redux/workspace/workspaceActions";


const mapStateToProps = (state) => ({
  profileData: state.profile.userData,
  workspaceData: state.workspace,
});

const mapDispatchToProps = (dispatch) => ({
  getWorkspaceById: (data) => dispatch(getWorkspaceById(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Team);
