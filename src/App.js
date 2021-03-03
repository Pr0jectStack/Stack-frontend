import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUpContainer from "./containers/SignUpContainer";
import SignInContainer from "./containers/SignInContainer";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/signup" exact component={SignUpContainer} />
          <Route exact path="/signin" exact component={SignInContainer} />
          <Route exact path="/profile" exact component={Profile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
