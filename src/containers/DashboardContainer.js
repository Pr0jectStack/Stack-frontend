import Dashboard from '../components/Dashboard/Dashboard';
import {connect} from 'react-redux';

const mapStateToProps = state =>({
    data:state.profile
})

const mapDispatchToProps = dispatch => ({
   
})

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);