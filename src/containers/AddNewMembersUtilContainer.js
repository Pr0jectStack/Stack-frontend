import AddNewMembersUtil from "../utils/AddNewMembersUtil";
import { connect } from "react-redux";
import { addMembersToWorkspace } from "../redux/workspace/workspaceActions";
// import { addNewWorkspace } from "../redux/workspace/workspaceActions";

const mapStateToProps = (state) => ({
    profileData: state.profile.userData,
    workspaceData: state.workspace
});

const mapDispatchToProps = (dispatch) => ({
//addNewWorkspace: (data) => dispatch(addNewWorkspace(data)),
    addMembersToWorkspace: (data) => dispatch(addMembersToWorkspace(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewMembersUtil);
