/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Container } from './styles';
import { Button } from '..';
import { api } from '../../services/api';
import StatusScreen from '../StatusScreen';

function Modal({ plate, setModal, message, butttonMessage, operationType }) {
  const [, setError] = useState('');
  const [, setData] = useState({});

  async function handleSubmit(event) {
    event.preventDefault();
    console.log('clicou');
    try {
      const res = await api.post(`/parking/${plate}/${operationType}`);
      console.log(res);
      setData(res);
    } catch (err) {
      setError(err.message);
    }
    return true;
  }

  return (
    <Container onSubmit={handleSubmit}>
      <form>
        <p>{message}</p>
        <span>{plate}</span>
        <Button color="purple" plate={plate}>
          {butttonMessage}
        </Button>
        <a onClick={() => setModal(false)}>VOLTAR</a>
      </form>
      {loading && !sucess && (
        <StatusScreen message="Registrando..." typeAnimation="loading" />
      )}
      {!loading && sucess && (
        <StatusScreen message="REGISTRADO" typeAnimation="sucess" />
      )}
    </Container>
  );
}

export default Modal;
