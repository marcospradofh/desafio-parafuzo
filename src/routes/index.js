import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, Car, Parking } from '../pages';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/car" component={Car} />
      <Route path="/parking" component={Parking} />
    </Switch>
  );
}

export default Routes;
