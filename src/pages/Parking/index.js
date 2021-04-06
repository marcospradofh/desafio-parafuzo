import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from './styles';

function Parking() {
  const [plate, setPlate] = useState('');

  return (
    <Container isActive={!!plate}>
      <div>
        <NavLink
          to="/parking/in"
          activeStyle={{
            background: '#fff',
            color: '#4dd0e1',
            borderBottom: '3px solid #4dd0e1',
          }}
        >
          Entrada
        </NavLink>
        <NavLink
          to="/parking/out"
          activeStyle={{
            background: '#fff',
            color: '#4dd0e1',
            borderBottom: '3px solid #4dd0e1',
          }}
        >
          Saída
        </NavLink>
      </div>
      <div>
        <p>Número da placa:</p>
        <input
          placeholder="AAA-0000"
          onChange={({ target }) => setPlate(target.value)}
        />
        <button type="button">CONFIRMAR ENTRADA</button>
      </div>
    </Container>
  );
}

export default Parking;
