import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Historic, Home, Parking } from '../pages';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/parking" component={Parking} />
      <Route path="/historic/:plate" component={Historic} />
    </Switch>
  );
}

export default Routes;
