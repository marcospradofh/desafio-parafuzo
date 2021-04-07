import React from 'react';
import { StyledButton } from './styles';

function Button({ children, color }) {
  return <StyledButton color={color}>{children}</StyledButton>;
}

export default Button;
