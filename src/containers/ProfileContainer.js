import Profile from "../components/Profile/Profile";
import { connect } from "react-redux";
import { editUserProfile } from "../redux/profile/profileActions";

const mapStateToProps = (state) => ({
  data: state.profile,
});

const mapDispatchToProps = (dispatch) => ({
  editUserProfile: (data) => dispatch(editUserProfile(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
