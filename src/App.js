import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUpContainer from "./containers/SignUpContainer";
import SignInContainer from "./containers/SignInContainer";
import ProfileContainer from "./containers/ProfileContainer";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/signup" exact component={SignUpContainer} />
          <Route exact path="/signin" exact component={SignInContainer} />
          <Route exact path="/profile" exact component={ProfileContainer} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
