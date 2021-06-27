import Dashboard from "../components/Dashboard/Dashboard";
import { connect } from "react-redux";
import { getUserById } from "../redux/profile/profileActions";

const mapStateToProps = (state) => ({
  data: state.profile,
});

const mapDispatchToProps = (dispatch) => ({
  getUserById: (userId) => dispatch(getUserById(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
