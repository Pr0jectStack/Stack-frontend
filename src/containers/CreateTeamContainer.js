import CreateTeam from "../components/Team/CreateTeam";
import { connect } from "react-redux";
import { addNewTeam } from "../redux/team/teamActions";
// import { addNewWorkspace } from "../redux/workspace/workspaceActions";

const mapStateToProps = (state) => ({
    profileData: state.profile.userData,
    workspaceData: state.workspace
});

const mapDispatchToProps = (dispatch) => ({
//addNewWorkspace: (data) => dispatch(addNewWorkspace(data)),
    addNewTeam: (data) => dispatch(addNewTeam(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeam);
