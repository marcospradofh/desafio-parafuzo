import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from '..';
import Modal from '../Modal';
import { Form } from './styles';

function In() {
  const [plate, setPlate] = useState('');
  return (
    <>
      <Modal />
      <Form>
        <p>Número da placa:</p>
        <Input placeholder="AAA-0000" setPlate={setPlate} />
        <Button color={plate ? 'purple' : undefined}>PAGAMENTO</Button>
        <Button color="grayWhite">SAÍDA</Button>
        <Link to="/">VER HISTÓRICO</Link>
      </Form>
    </>
  );
}

export default In;
