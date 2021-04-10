import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from './styles';

function Sidebar({ open, setOpen, setAnimationState }) {
  return (
    <Container open={open}>
      <NavLink
        onClick={() => {
          setOpen(false);
          setAnimationState({
            isStopped: false,
            direction: -1,
          });
        }}
        to="/parking/in"
      >
        <li>Entrada</li>
      </NavLink>
      <NavLink
        onClick={() => {
          setOpen(false);
          setAnimationState({
            isStopped: false,
            direction: -1,
          });
        }}
        to="/parking/out"
      >
        <li>Saída</li>
      </NavLink>
    </Container>
  );
}

export default Sidebar;
