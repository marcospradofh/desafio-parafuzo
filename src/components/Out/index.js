import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Error, Input } from '..';
import Modal from '../Modal';
import { Form } from './styles';

function In() {
  const [plate, setPlate] = useState('');
  const [error, setError] = useState('');
  const [payModal, setPayModal] = useState(false);
  const [outModal, setOutModal] = useState(false);

  function validate(value) {
    const regex = /([A-Za-z]{3})-(\d{4})/;
    return regex.test(value);
  }

  function handlePaySubmit() {
    if (!validate(plate)) setError('Formato inválido');
    setPayModal(true);
  }
  function handleOutSubmit() {
    if (!validate(plate)) setError('Formato inválido');
    setOutModal(true);
  }

  return (
    <>
      {payModal && (
        <Modal
          plate={plate}
          modal={payModal}
          setModal={setPayModal}
          message="Confirma o pagamento da placa abaixo?"
          butttonMessage="CONFIRMAR"
          operationType="pay"
          setPlate={setPlate}
        />
      )}
      {outModal && (
        <Modal
          plate={plate}
          modal={outModal}
          setModal={setOutModal}
          message="Confirma a saída do veículo da placa abaixo?"
          butttonMessage="LIBERAR SAÍDA"
          operationType="out"
          setPlate={setPlate}
        />
      )}
      <Form onSubmit={(e) => e.preventDefault()}>
        <p>Número da placa:</p>
        <Input
          placeholder="AAA-0000"
          setPlate={setPlate}
          setError={setError}
          plate={plate}
        />
        {error && <Error errorMessage={error} />}
        <Button
          onClick={handlePaySubmit}
          color={plate ? 'purple' : undefined}
          plate={plate}
        >
          PAGAMENTO
        </Button>
        <Button
          onClick={handleOutSubmit}
          color={!plate ? 'grayWhite' : 'purpleWhite'}
          plate={plate}
        >
          SAÍDA
        </Button>
        <Link to={`/historic/${plate}`}>VER HISTÓRICO</Link>
      </Form>
    </>
  );
}

export default In;
