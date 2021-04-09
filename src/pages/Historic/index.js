/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import arrowLeft from '../../assets/shape.svg';
import { HistoricCard } from '../../components';
import { api } from '../../services/api';

function Historic({ match }) {
  const { params } = match;
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([]);

  useEffect(() => {
    (async function () {
      const res = await api.get(`/parking/${params.plate}`);
      setData(res.data);
    })();
  }, []);

  function getTime(time) {
    let timeParsed = '';
    time.split(' ').map((item) => {
      // eslint-disable-next-line radix
      if (parseInt(item)) timeParsed += `${item} `;
      if (item === 'days') timeParsed += 'dias ';
      if (item === 'hours') timeParsed += 'horas ';
      if (item === 'minutes') timeParsed += 'min ';
      if (item === 'seconds') timeParsed += 'segundos';
      return true;
    });
    return timeParsed;
  }

  return (
    <Container>
      <header>
        <img src={arrowLeft} alt="Seta para esquerda" />
        <h3>Placa {params.plate}</h3>
      </header>
      <div>
        {data.map((item, index) => (
          <HistoricCard
            key={index}
            time={getTime(item.time)}
            pay={item.paid ? 'Pago' : '-'}
          />
        ))}
      </div>
    </Container>
  );
}

export default Historic;
