import SignIn from "../components/Auth/SignIn";
import { connect } from "react-redux";
import {
  forgotUserPassword,
  signInUser,
  removeSignInError,
} from "../redux/auth/signinActions";

const mapStateToProps = (state) => ({
  data: state.profile,
  signIn: state.signIn,
});

const mapDispatchToProps = (dispatch) => ({
  signInUser: (data) => dispatch(signInUser(data)),
  forgotUserPassword: (email) => dispatch(forgotUserPassword(email)),
  removeSignInError: () => dispatch(removeSignInError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
