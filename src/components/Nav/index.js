import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { In, Out } from '..';

import { NavStyled } from './styles';

function Nav({ match }) {
  return (
    <>
      <NavStyled>
        <NavLink to={`${match.path}/in`} activeClassName="selected">
          Entrada
        </NavLink>
        <NavLink to={`${match.path}/out`} activeClassName="selected">
          Saída
        </NavLink>
      </NavStyled>
      <Switch>
        <Route path={`${match.path}/in`} component={In} />
        <Route path={`${match.path}/out`} component={Out} />
      </Switch>
    </>
  );
}

export default Nav;
