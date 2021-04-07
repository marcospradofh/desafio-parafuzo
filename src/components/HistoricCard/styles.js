import styled from 'styled-components';

export const Container = styled.table`
  width: 100%;
  padding: 16px;
  margin-bottom: 16px;

  border: 1px solid #e4e3e3;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  th {
    text-transform: uppercase;
    font-size: 12px;
    color: #9b9b9b;
    font-weight: 400;
    text-align: left;
  }

  td {
    font-size: 24px;
    font-weight: 400;
    color: #0a261d;
  }
`;
