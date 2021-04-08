import React, { useState } from 'react';
import axios from 'axios';
import { api } from '../../services/api';
import { Button, Input } from '..';
import { Form } from './styles';
import errorLogo from '../../assets/error.svg';
import StatusScreen from '../StatusScreen';

function In() {
  const [plate, setPlate] = useState('');
  const [loading, setLoading] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [sucess, setSucess] = useState(null);
  const [error, setError] = useState('');

  function validate(value) {
    const regex = /([A-Za-z]{3})-(\d{4})/;
    return regex.test(value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      if (!validate(plate)) return setError('Formato inválido');
      setLoading(true);
      // eslint-disable-next-line no-unused-vars
      const res = await axios.post(
        `${api}/parking`,
        { plate },
        {
          headers: {
            'content-type': 'application/json',
          },
        }
      );
      console.log(res);
      if (res.statusText === 'OK') setSucess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }

    return true;
  }

  return (
    <Form onSubmit={handleSubmit}>
      {!loading && (
        <div>
          <p>Número da placa:</p>
          <Input
            placeholder="AAA-0000"
            setPlate={setPlate}
            plate={plate}
            setError={setError}
          />
          {error && (
            <span>
              <img src={errorLogo} alt="erro" />
              {error}
              {loading}
            </span>
          )}
          <Button color={plate ? 'green' : undefined} plate={plate}>
            CONFIRMAR ENTRADA
          </Button>
        </div>
      )}
      {loading && (
        <StatusScreen message="Registrando..." typeAnimation="loading" />
      )}
      {sucess && <StatusScreen message="REGISTRADO" typeAnimation="sucess" />}
    </Form>
  );
}

export default In;
