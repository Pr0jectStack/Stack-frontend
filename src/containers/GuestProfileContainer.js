import GuestProfile from "../components/Profile/GuestProfile";
import { connect } from "react-redux";
import { fetchUser } from "../redux/guestProfile/guestProfileActions";

const mapStateToProps = (state, ownProps) => {
  const { isOpen, userId } = ownProps;

  return {
    data: state.guestProfile,
    isOpen: isOpen,
    userId: userId,
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { userId } = ownProps;

  return {
    ...stateProps,
    ...ownProps,
    fetchUser: (userId) => dispatch(fetchUser(userId)),
  };
};

// const mapDispatchToProps = (dispatch) => ({
//   fetchUser: (data) => dispatch(fetchUser(data)),
// });

export default connect(mapStateToProps, null, mergeProps)(GuestProfile);
