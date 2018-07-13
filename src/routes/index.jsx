import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Home from './../containers/Home';
import Login from './../containers/Login';

const Routes = () => (
  <Router>
  	<Switch>
      <Route path='/' exact component={Login} />
      <Route path='/login' exact component={Login} />
    	<Route path='/home' exact component={Home} />
    </Switch>
  </Router>
);


export default Routes;
