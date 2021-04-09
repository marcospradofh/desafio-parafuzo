/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Button, Error, Input } from '..';
import { Form } from './styles';
import StatusScreen from '../StatusScreen';

function In() {
  const [plate, setPlate] = useState('');
  const [loading, setLoading] = useState(false);
  const [sucess, setSucess] = useState(false);
  const [error, setError] = useState('');

  function validate(value) {
    const regex = /([A-Za-z]{3})-(\d{4})/;
    return regex.test(value);
  }

  async function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();
    try {
      if (!validate(plate)) return setError('Formato inválido');

      const res = await api.post(
        '/parking',
        { plate },
        {
          headers: {
            'content-type': 'application/json',
          },
        }
      );
      if (res.statusText === 'OK') setSucess(true);
    } catch (err) {
      setError('Carro já estacionado.');
    } finally {
      setLoading(false);
    }
    return true;
  }
  function returnToIntialState() {
    setTimeout(() => {
      setSucess(false);
      setPlate('');
    }, 3000);
  }

  useEffect(() => {
    return () => returnToIntialState();
  }, [sucess]);

  return (
    <Form onSubmit={handleSubmit}>
      {!loading && !sucess && (
        <div>
          <p>Número da placa:</p>
          <Input
            placeholder="AAA-0000"
            setPlate={setPlate}
            plate={plate}
            setError={setError}
          />
          {error && <Error errorMessage={error} />}
          <Button color={plate ? 'green' : undefined} plate={plate}>
            CONFIRMAR ENTRADA
          </Button>
        </div>
      )}
      {loading && !sucess && (
        <StatusScreen message="Registrando..." typeAnimation="loading" />
      )}
      {!loading && sucess && (
        <StatusScreen message="REGISTRADO" typeAnimation="sucess" />
      )}
    </Form>
  );
}

export default In;
