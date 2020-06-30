import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';

function AuthRoute() {
  return (
    <Switch>
      <Route path="/login" component={Login}/>
    </Switch>
  );
}

export default AuthRoute;