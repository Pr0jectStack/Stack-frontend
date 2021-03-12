import Workspace from '../components/Auth/Workspace';
import {connect} from 'react-redux';
import { setUserLoginDetails } from '../Services/Actions/actions';

const mapStateToProps = state =>({
    workspaces:state.workspaces
})

const mapDispatchToProps = dispatch => ({
    // setUserProfile: data => dispatch()
})

export default connect(mapStateToProps,mapDispatchToProps)(Workspace);