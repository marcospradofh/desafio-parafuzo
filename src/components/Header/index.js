import React from 'react';
import { Link } from 'react-router-dom';

import parkingIcon from '../../assets/avatar_parking.svg';
import Burger from './animation';
import { Container } from './styles';

function Header() {
  return (
    <>
      <Container>
        <div>
          <Link to="/">
            <img src={parkingIcon} alt="Icone Parking" />
          </Link>
          <Burger />
        </div>
      </Container>
    </>
  );
}

export default Header;
