import React from "react";
import SignUp from "./containers/shared/SignUp";
import LogIn from "./containers/shared/LogIn";
import Home from "./containers/patient/Home";
import NotFound from "./components/NotFound";
import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Switch>
      <Route exact path={"/signup"} component={SignUp} />
      <Route exact path={"/login"} component={LogIn} />
      <Route exact path={"/"} component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}
