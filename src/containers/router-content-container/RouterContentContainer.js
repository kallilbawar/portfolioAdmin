import React from "react";
import { Switch, Route } from "react-router-dom";
import { Content } from "components";
import { ErrorPage, Home, Login } from "pages";

export function RouterContentContainer() {
  return (
    
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home"  component={Home}/>
        <Route component={ErrorPage} />
      </Switch>
   
  );
}
