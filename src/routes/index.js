import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, Car } from '../pages';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/car" component={Car} />
    </Switch>
  );
}

export default Routes;
