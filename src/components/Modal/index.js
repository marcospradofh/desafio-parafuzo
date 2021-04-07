import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { Button } from '..';

function Modal() {
  return (
    <Container>
      <div>
        <p>Confirma o pagamento da placa abaixo?</p>
        <span>ABC-1234</span>
        <Button>CONFIRMAR</Button>
        <Link to="/">VOLTAR</Link>
      </div>
    </Container>
  );
}

export default Modal;
