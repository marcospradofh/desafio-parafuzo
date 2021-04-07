/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React from 'react';
import { StyledInput } from './styles';

function Input({ placeholder, setPlate, plate, setError }) {
  function plateMask(value) {
    return value.replace(/(\w{3})(\w{4})/, '$1-$2');
  }

  function handleChange({ target }) {
    setPlate(plateMask(target.value));
    setError(null);
  }
  return (
    <StyledInput
      maxLength="8"
      placeholder={placeholder}
      onChange={handleChange}
      value={plate}
    />
  );
}

export default Input;
