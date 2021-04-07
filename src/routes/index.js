import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, Parking, Historic } from '../pages';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/parking" component={Parking} />
      <Route path="/historic" component={Historic} />
    </Switch>
  );
}

export default Routes;
