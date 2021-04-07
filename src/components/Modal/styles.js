import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  z-index: 1000;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    background: #fff;
    margin: 0 10px;
    padding: 10px;
    p {
      max-width: 200px;
      margin: 0 auto;
      padding-top: 32px;

      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      text-align: center;
      color: #4a4a4a;
    }

    span {
      font-size: 38px;
      line-height: 52px;
      color: #00bcd4;
      display: block;
      text-align: center;
    }
  }
`;
