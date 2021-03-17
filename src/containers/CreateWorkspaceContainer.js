import CreateWorkspace from "../components/Workspace/CreateWorkspace";
import { connect } from "react-redux";
import { addNewWorkspace } from "../redux/workspace/workspaceActions";

const mapStateToProps = (state) => ({
  data: state.profile,
});

const mapDispatchToProps = (dispatch) => ({
  addNewWorkspace: (data) => dispatch(addNewWorkspace(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateWorkspace);
