import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Containers
import Login from '../container/login';
import Register from '../container/Register';

export const UnAuthContent = () => {
  return (
    <Router>
      <Switch>
        <Route path={`/unauth/login`} component={Login} />
        <Route path={`/unauth/register`} component={Register} />
      </Switch>
    </Router>
  );
};