import SignIn from "../components/Auth/SignIn";
import { connect } from "react-redux";
import { signInUser } from "../redux/auth/signInActions";

const mapStateToProps = (state) => ({
  data: state.signIn,
});

const mapDispatchToProps = (dispatch) => ({
  signInUser: (data) => dispatch(signInUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
