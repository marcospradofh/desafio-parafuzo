import React from 'react';
import { Container } from './styles';

function HistoricCard({ time, pay, onClick }) {
  return (
    <Container onClick={onClick}>
      <div className="header">Tempo atual</div>
      <div className="header">Pagamento</div>
      <div className="body">{time}</div>
      <div className="body">{pay}</div>
    </Container>
  );
}

export default HistoricCard;
