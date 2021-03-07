import Profile from "../components/Profile/Profile";
import { connect } from "react-redux";
import { setUserDetails } from "../Services/Actions/actions";

const mapStateToProps = (state) => ({ data: state });

const mapDispatchToProps = (dispatch) => ({
  setUserDetailsHandler: (data) => dispatch(setUserDetails(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
