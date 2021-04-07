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
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }

    return true;
  }

  return (
    <>
      {loading ? (
        <StatusScreen message="Carregando..." />
      ) : (
        <Form isActive={!!plate} onSubmit={handleSubmit}>
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
        </Form>
      )}
    </>
  );
}

export default In;
