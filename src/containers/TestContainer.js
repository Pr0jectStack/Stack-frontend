import Test from '../components/Test';
import {connect} from 'react-redux';
import { setUserLoginDetails } from '../redux/auth/signinActions';

const mapStateToProps = state =>({
    login_details:state.login_details
})

const mapDispatchToProps = dispatch => ({
    // setUserProfile: data => dispatch(setUserLoginDetails(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Test);