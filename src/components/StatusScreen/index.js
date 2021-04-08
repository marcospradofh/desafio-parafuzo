import React from 'react';
import Animation from './animation';
import { Container } from './styles';

function StatusScreen({ message, typeAnimation }) {
  return (
    <Container>
      <Animation typeAnimation={typeAnimation} />
      {message}
    </Container>
  );
}

export default StatusScreen;
