import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";
import Loadable from "react-loadable";

const Login = Loadable({
  loader: () => import("./routes/login"),
  loading: TopBarProgress,
});

const Signup = Loadable({
  loader: () => import("./routes/signup"),
  loading: TopBarProgress,
});

const RecoverPasword = Loadable({
  loader: () => import("./routes/recover-password"),
  loading: TopBarProgress,
});

const Auth = () => (
  <Switch>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/signup">
      <Signup />
    </Route>
    <Route path="/recover">
      <RecoverPasword />
    </Route>
    <Redirect to="/login" />
  </Switch>
);

export default Auth;