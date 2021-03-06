import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUpContainer from "./containers/SignUpContainer";
import SignInContainer from "./containers/SignInContainer";
import ProfileContainer from "./containers/ProfileContainer";
import DashboardContainer from "./containers/DashboardContainer";
import PrivateRoute from "./components/Auth/PrivateRoute";
import GuestRoute from "./components/Auth/GuestRoute";

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* Public Routes */}
          <GuestRoute exact path="/signup" exact component={SignUpContainer} />
          <GuestRoute exact path="/signin" exact component={SignInContainer} />
          <GuestRoute
            exact
            path="/profile"
            exact
            component={ProfileContainer}
          />

          {/* Private Routes */}
          <PrivateRoute
            exact
            path="/dashboard"
            exact
            component={DashboardContainer}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
