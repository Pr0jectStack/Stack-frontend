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
import TeamContainer from "./containers/TeamContainer";
const App = () => {
  return (
    <>
      <Router>
        <NavigationContainer />
        <Switch>
          {/* Public Routes */}
          <GuestRoute path="/signup" exact component={SignUpContainer} />
          <GuestRoute path="/signin" exact component={SignInContainer} />
          <GuestRoute path="/" exact component={SignInContainer} />

          {/* Private Routes */}
          <PrivateRoute path="/" exact component={DashboardContainer} />

          <PrivateRoute path="/profile" exact component={ProfileContainer} />

          <PrivateRoute
            path="/dashboard"
            exact
            component={DashboardContainer}
          />
          <PrivateRoute
            path="/team"
            exact
            component={TeamContainer}
          />

          <PrivateRoute
            path="/createWorkspace"
            exact
            component={CreateWorkspaceContainer}
          />
        </Switch>
      </Router>
    </>
  );
};

export default App;
