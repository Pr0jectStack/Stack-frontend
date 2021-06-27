import TeamSettings from "../components/TeamSettings/TeamSettings";
import {
  deleteTeam,
  getTeamById,
  makeTeamLeader,
  updateTeamDetails,
} from "../redux/team/teamActions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    data: state.team,
    userId: state.profile.userData._id,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getTeamById: (tid) => dispatch(getTeamById(tid)),
  makeTeamLeader: (data) => dispatch(makeTeamLeader(data)),
  updateTeamDetails: (data) => dispatch(updateTeamDetails(data)),
  deleteTeam: (data) => dispatch(deleteTeam(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamSettings);
