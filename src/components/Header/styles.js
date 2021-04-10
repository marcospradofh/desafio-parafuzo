import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 60px;
  background: #4dd0e1;

  position: fixed;
  top: 0;
  right: 0;

  div {
    max-width: 960px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0px 8px;
  }
`;
