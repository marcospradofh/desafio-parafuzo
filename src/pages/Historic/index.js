import React from 'react';
import { Container } from './styles';
import arrowLeft from '../../assets/shape.svg';
import { HistoricCard } from '../../components';

function Historic() {
  return (
    <Container>
      <header>
        <img src={arrowLeft} alt="Seta para esquerda" />
        <h3>Placa ABC-1234</h3>
      </header>
      <div>
        <HistoricCard />
        <HistoricCard />
        <HistoricCard />
        <HistoricCard />
      </div>
    </Container>
  );
}

export default Historic;
