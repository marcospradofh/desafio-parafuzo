import React from 'react';
import { StyledButton } from './styles';

function Button({ children, color, plate, onClick }) {
  return (
    <StyledButton onClick={onClick} color={color} disabled={!plate}>
      {children}
    </StyledButton>
  );
}

export default Button;
