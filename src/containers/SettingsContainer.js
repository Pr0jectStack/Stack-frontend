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
  changeImage: (changedImage) => dispatch(changeImage(changedImage)),
  changePassword: (changedPassword) =>
    dispatch(changePassword(changedPassword)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
