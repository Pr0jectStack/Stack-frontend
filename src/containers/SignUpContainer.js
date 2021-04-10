import SignUp from "../components/Auth/SignUp";
import { connect } from "react-redux";
import { signUpUser, updateSignUpUserData } from "../redux/auth/signUpActions";

const mapStateToProps = (state) => ({
  data: state.signUp,
});

const mapDispatchToProps = (dispatch) => ({
  signUpUser: (data) => dispatch(signUpUser(data)),
  updateSignUpUserData: () => dispatch(updateSignUpUserData())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
