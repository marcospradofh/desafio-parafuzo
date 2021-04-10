/* eslint-disable func-names */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
  }, [params.plate]);

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
            <Link to="/parking/out">
              <img src={arrowLeft} alt="Voltar" />
            </Link>
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
