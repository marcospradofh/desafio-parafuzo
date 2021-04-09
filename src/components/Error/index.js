import React from 'react';
import { Container } from './styles';
import errorLogo from '../../assets/error.svg';

function Error({ errorMessage }) {
  return (
    <Container>
      <img src={errorLogo} alt="erro" />
      {errorMessage}
    </Container>
  );
}

export default Error;
