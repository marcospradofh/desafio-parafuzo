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

  form {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    background: #fff;
    margin: 0 10px;
    padding: 10px;
    border-radius: 4px;

    p {
      max-width: 200px;
      margin-top: 32px;

      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      text-align: center;
      color: #4a4a4a;
    }

    .plate {
      margin: 3px auto 24px;
      font-size: 38px;
      line-height: 52px;
      color: #00bcd4;
      display: block;
      text-align: center;
      text-transform: uppercase;
    }

    a {
      margin-top: 24px;
      margin-bottom: 18px;

      text-decoration: none;
      font-weight: bold;
      font-size: 15px;
      color: #00bcd4;
      cursor: pointer;
    }
  }
`;
