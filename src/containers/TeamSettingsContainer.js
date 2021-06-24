import TeamSettings from "../components/TeamSettings/TeamSettings";
import { getTeamById } from "../redux/team/teamActions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    data: state.team,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getTeamById: (tid) => dispatch(getTeamById(tid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamSettings);
