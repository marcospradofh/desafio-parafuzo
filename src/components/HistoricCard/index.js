import React from 'react';
import { Container } from './styles';

function HistoricCard({ time, pay }) {
  return (
    <Container>
      <thead>
        <tr>
          <th>Tempo atual</th>
          <th>Pagamento</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{time}</td>
          <td>{pay}</td>
        </tr>
      </tbody>
    </Container>
  );
}

export default HistoricCard;
