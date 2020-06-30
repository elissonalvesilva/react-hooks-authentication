import React from 'react';
import {Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Page1 from '../pages/Page1';


function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard}/>
      <Route path="/page1" component={Page1}/>
    </Switch>
  );
}

export default AppRoutes;