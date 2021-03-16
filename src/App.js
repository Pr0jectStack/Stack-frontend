import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUpContainer from "./containers/SignUpContainer";
import SignInContainer from "./containers/SignInContainer";
import ProfileContainer from "./containers/ProfileContainer";
import DashboardContainer from "./containers/DashboardContainer";
import PrivateRoute from "./components/Auth/PrivateRoute";
import GuestRoute from "./components/Auth/GuestRoute";
import CreateWorkspace from "./components/Workspace/CreateWorkspace";
import Test from "./components/Test";
import NavBar from "./components/NavBar/NavBar";
import GuestNavBar from "./components/NavBar/GuestNavBar";
import TestContainer from "./containers/TestContainer";
import NavigationContainer from "./containers/NavigationContainer";
import { authenticate, isAuthenticated } from "./components/Auth/helper";
// import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Router>
        <NavigationContainer />
        <Switch>
          {/* Public Routes */}
          <GuestRoute exact path="/signup" exact component={SignUpContainer} />
          <GuestRoute exact path="/signin" exact component={SignInContainer} />
          <GuestRoute exact path="/" exact component={SignInContainer} />

          {/* Private Routes */}
          <PrivateRoute exact path="/" exact component={DashboardContainer} />
          <PrivateRoute exact path="/test" exact component={TestContainer} />

          <PrivateRoute
            exact
            path="/profile"
            exact
            component={ProfileContainer}
          />

          <PrivateRoute
            exact
            path="/dashboard"
            exact
            component={DashboardContainer}
          />

          <PrivateRoute
            exact
            path="/createWorkspace"
            exact
            component={CreateWorkspace}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
