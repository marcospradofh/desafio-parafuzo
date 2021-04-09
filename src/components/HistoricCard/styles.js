import styled from 'styled-components';

export const Container = styled.a`
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 100%;
  padding: 16px;
  margin-bottom: 16px;
  cursor: pointer;

  border: 1px solid #e4e3e3;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  .header {
    text-transform: uppercase;
    font-size: 12px;
    color: #9b9b9b;
    font-weight: 400;
    text-align: left;
  }

  .body {
    font-size: 24px;
    font-weight: 400;
    color: #0a261d;
  }
`;
