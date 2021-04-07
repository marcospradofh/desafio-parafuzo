import React from 'react';
import { Container } from './styles';

function HistoricCard() {
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
          <td>1h20min</td>
          <td>---</td>
        </tr>
      </tbody>
    </Container>
  );
}

export default HistoricCard;
