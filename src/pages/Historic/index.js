/* eslint-disable func-names */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import arrowLeft from '../../assets/shape.svg';
import { Details, HistoricCard } from '../../components';
import { api } from '../../services/api';

function Historic({ match }) {
  const { params } = match;
  const [data, setData] = useState([]);
  const [detailData, setDetailData] = useState([]);
  const [showDetail, setShowDetail] = useState(false);

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
      {showDetail ? (
        <Details
          setShowDetail={setShowDetail}
          detailData={detailData}
          getTime={getTime}
        />
      ) : (
        <>
          <header>
            <img src={arrowLeft} alt="Voltar" />
            <h3>
              Placa <span>{params.plate}</span>
            </h3>
          </header>

          <div>
            {data.map((item, index) => (
              <HistoricCard
                key={index}
                time={getTime(item.time)}
                pay={item.paid ? 'Pago' : '-'}
                onClick={() => {
                  setDetailData(item);
                  setShowDetail(true);
                }}
              />
            ))}
          </div>
        </>
      )}
    </Container>
  );
}

export default Historic;
