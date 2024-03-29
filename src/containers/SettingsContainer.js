import Settings from "../components/Settings/Settings";
import { connect } from "react-redux";
import {
  changeOtherSettings,
  changeImage,
  changePassword,
} from "../redux/settings/settingsActions";

const mapStateToProps = (state) => {
  return {
    userData: state.profile.userData,
    data: state.settings,
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeOtherSettings: (changedData) =>
    dispatch(changeOtherSettings(changedData)),
  changeImage: (userId, changedImage) =>
    dispatch(changeImage(userId, changedImage)),
  changePassword: (userId, changedPassword) =>
    dispatch(changePassword(userId, changedPassword)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
