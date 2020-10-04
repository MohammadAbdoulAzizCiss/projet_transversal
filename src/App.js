import React from "react";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Switch>
      <Route exact path={"/signup"} component={SignUp} />
      <Route exact path={"/login"} component={LogIn} />
      <Route exact path={"/"} component={SignUp} />
    </Switch>
  );
}
