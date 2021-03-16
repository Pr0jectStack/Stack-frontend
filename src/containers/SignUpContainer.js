import SignUp from "../components/Auth/SignUp";
import { connect } from "react-redux";
import { signUpUser } from "../redux/auth/signUpActions";

const mapStateToProps = (state) => ({
  userData: state.signUp,
});

const mapDispatchToProps = (dispatch) => ({
  signUpUser: (data) => dispatch(signUpUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
