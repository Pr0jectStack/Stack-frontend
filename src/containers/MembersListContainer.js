import MembersList from "../utils/MembersList";
import { connect } from "react-redux";
import {
  addNewWorkspace,
  updateCurrentWorkspace,
} from "../redux/workspace/workspaceActions";

const mapStateToProps = (state) => ({
    workspaceData: state.workspace
    //TODO: ADD TEAMDATA
});

const mapDispatchToProps = (dispatch) => ({
  updateCurrentWorkspace: (data) => dispatch(updateCurrentWorkspace(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(MembersList);
