import SignIn from '../components/Auth/SignIn';
import {connect} from 'react-redux';
import { setUserLoginDetails } from '../Services/Actions/actions';

const mapStateToProps = state =>({
    data:state
})

const mapDispatchToProps = dispatch => ({
    setUserProfile: data => dispatch(setUserLoginDetails(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);