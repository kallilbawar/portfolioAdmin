import React from "react";
import { Switch, Route } from "react-router-dom";
import { ErrorPage, Home, Login } from "pages";
import { Session } from "containers";

export function RouterContentContainer() {
  return (
    <Switch>
      <Route path="/" component={Session} />
      <Route path="/login" component={Session} />
      <Route path="/home" component={Session} />
      <Route component={ErrorPage} />
    </Switch>
  );
}
