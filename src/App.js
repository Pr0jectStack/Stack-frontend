import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUpContainer from "./containers/SignUpContainer";
import SignInContainer from "./containers/SignInContainer";
import ProfileContainer from "./containers/ProfileContainer";
import DashboardContainer from "./containers/DashboardContainer";
import PrivateRoute from "./components/Auth/PrivateRoute";
import GuestRoute from "./components/Auth/GuestRoute";
import NavigationContainer from "./containers/NavigationContainer";
import CreateWorkspaceContainer from "./containers/CreateWorkspaceContainer";
import SettingsContainer from "./containers/SettingsContainer";
import CreateTeamContainer from "./containers/CreateTeamContainer";
import TeamContainer from "./containers/TeamContainer";
import SpeechToText from "./utils/SpeechToText";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import EmailActivation from "./components/Auth/EmailActivation";
import ResetPassword from "./components/Auth/ResetPassword";
import { createBrowserHistory } from "history";
import TaskContainer from "./containers/TaskContainer";
import Footer from "./components/Footer/Footer";
import TermsAndConditions from "./components/Others/TermsAndConditions";
import About from "./components/About/About";

import swDev from "./main";
import WorkspaceSettingsContainer from "./containers/WorkspaceSettingsContainer";
import TeamSettingsContainer from "./containers/TeamSettingsContainer";

const App = () => {
  return (
    <>
      <ToastContainer
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
      <Router history={createBrowserHistory()}>
        <NavigationContainer />
        <Switch>
          {/* Public Routes */}
          <GuestRoute path="/signup" exact component={SignUpContainer} />
          <GuestRoute path="/signin" exact component={SignInContainer} />
          <GuestRoute path="/" exact component={SignInContainer} />
          {/* <GuestRoute path="/test" exact component={Automation} /> */}
          <GuestRoute path="/speech" exact component={SpeechToText} />

          {/* Private Routes */}
          <PrivateRoute path="/" exact component={DashboardContainer} />

          <PrivateRoute path="/profile" exact component={ProfileContainer} />
          <PrivateRoute path="/settings" exact component={SettingsContainer} />

          <PrivateRoute
            path="/dashboard"
            exact
            component={DashboardContainer}
          />
          <PrivateRoute
            path="/dashboard/workspace/:wid"
            exact
            component={TeamContainer}
          />
          <PrivateRoute
            path="/dashboard/team/:tid"
            exact
            component={TaskContainer}
          />
          <PrivateRoute
            path="/workspace/:wid/settings"
            exact
            component={WorkspaceSettingsContainer}
          />
          <PrivateRoute
            path="/team/:tid/settings"
            exact
            component={TeamSettingsContainer}
          />
          <PrivateRoute
            path="/dashboard/team/"
            exact
            component={TeamContainer}
          />

          <PrivateRoute
            path="/createWorkspace"
            exact
            component={CreateWorkspaceContainer}
          />
          <PrivateRoute
            path="/createTeam"
            exact
            component={CreateTeamContainer}
          />

          {/* Other Routes */}
          <Route
            exact
            path="/authentication/activate/:token"
            component={EmailActivation}
          />
          <Route
            exact
            path="/reset/password/:resetLink"
            component={ResetPassword}
          />
          <Route
            exact
            path="/termsandconditions"
            component={TermsAndConditions}
          />
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
};
swDev();
export default App;
