import TeamSettings from "../components/TeamSettings/TeamSettings";
import { getTeamById, makeTeamLeader } from "../redux/team/teamActions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    data: state.team,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getTeamById: (tid) => dispatch(getTeamById(tid)),
  makeTeamLeader: (data) => dispatch(makeTeamLeader(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamSettings);
