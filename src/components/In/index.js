import React, { useState } from 'react';
import { Button, Input } from '..';
import { Form } from './styles';

function In() {
  const [plate, setPlate] = useState('');
  return (
    <Form isActive={!!plate}>
      <p>Número da placa:</p>
      <Input placeholder="AAA-0000" setPlate={setPlate} />
      <Button color={plate ? 'green' : undefined}>CONFIRMAR ENTRADA</Button>
    </Form>
  );
}

export default In;
