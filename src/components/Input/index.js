/* eslint-disable react/prop-types */
import React from 'react';
import { StyledInput } from './styles';

function Input({ placeholder, setPlate }) {
  return (
    <StyledInput
      placeholder={placeholder}
      onChange={({ target }) => setPlate(target.value)}
    />
  );
}

export default Input;
