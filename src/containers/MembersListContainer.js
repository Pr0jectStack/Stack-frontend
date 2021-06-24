import MembersList from "../utils/MembersList";
import { connect } from "react-redux";
import {
  addNewWorkspace,
  getWorkspaceById,
} from "../redux/workspace/workspaceActions";

const mapStateToProps = (state) => ({
    workspaceData: state.workspace,
    teamData:state.team
    //TODO: ADD TEAMDATA
});

const mapDispatchToProps = (dispatch) => ({
  getWorkspaceById: (data) => dispatch(getWorkspaceById(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(MembersList);
