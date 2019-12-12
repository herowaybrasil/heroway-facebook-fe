import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Feed from './pages/Feed';
import Login from './pages/Login';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact={true} from="/" to="/login" />

        <Route path="/login" component={Login} />
        <Route path="/feed" component={Feed} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
