import React from 'react';

import parkingIcon from '../../assets/avatar_parking.svg';
import menuIcon from '../../assets/menu.svg';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <img src={parkingIcon} alt="Icone Parking" />
      <img src={menuIcon} alt="Menu" />
    </Container>
  );
}

export default Header;
