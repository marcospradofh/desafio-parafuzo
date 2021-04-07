import styled from 'styled-components';

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: 67px;
  text-align: center;
  background: #fffbe6;

  border-radius: 4px;
  border: 1px solid #ccc;

  font-weight: 400;
  font-size: 24px;
  color: #0a261d;
  text-transform: uppercase;

  &::placeholder {
    color: #9b9b9b;
  }
`;
