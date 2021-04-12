import SignIn from "../components/Auth/SignIn";
import { connect } from "react-redux";
import { forgotUserPassword, signInUser } from "../redux/auth/signinActions";

const mapStateToProps = (state) => ({
  data: state.profile,
});

const mapDispatchToProps = (dispatch) => ({
  signInUser: (data) => dispatch(signInUser(data)),
  forgotUserPassword: (email) => dispatch(forgotUserPassword(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
