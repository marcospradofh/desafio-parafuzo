/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import backIcon from '../../assets/shape.svg';
import { Container } from './styles';

function Details({ setShowDetail, detailData, getTime }) {
  return (
    <Container>
      <a onClick={() => setShowDetail(false)}>
        <img src={backIcon} alt="Voltar" />
      </a>
      <p>PLACA</p>
      <strong>{detailData.plate}</strong>
      <p>STATUS</p>
      <span>{detailData.left ? 'Finalizado' : 'Estacionado'}</span>
      <p>TEMPO ATUAL</p>
      <span>{getTime(detailData.time)}</span>
      <p>PAGAMENTO</p>
      <span>{detailData.paid ? 'Pago' : '-'}</span>
    </Container>
  );
}

export default Details;
