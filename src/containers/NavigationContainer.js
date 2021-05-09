import Navigation from "../components/Navigation/Navigation";
import { connect } from "react-redux";
import { signOutUser } from "../redux/auth/signoutActions";

const mapStateToProps = (state) => ({ data: state.profile, signOutData: state.signOut });

const mapDispatchToProps = (dispatch) => ({
    signOutUser: ()=> dispatch(signOutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
