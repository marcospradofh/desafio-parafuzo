import React from 'react';
import { StyledButton } from './styles';

function Button({ children, color, plate }) {
  return (
    <StyledButton color={color} disabled={!plate}>
      {children}
    </StyledButton>
  );
}

export default Button;
