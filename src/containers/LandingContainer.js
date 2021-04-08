import Landing from "../utils/Landing";
import { connect } from "react-redux";
import {
  addNewWorkspace,
  updateCurrentWorkspace,
} from "../redux/workspace/workspaceActions";

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  updateCurrentWorkspace: (data) => dispatch(updateCurrentWorkspace(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
