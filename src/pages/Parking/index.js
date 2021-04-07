import React from 'react';
import Nav from '../../components/Nav';
import { Container } from './styles';

function Parking({ match }) {
  return (
    <Container>
      <Nav match={match} />
    </Container>
  );
}

export default Parking;
