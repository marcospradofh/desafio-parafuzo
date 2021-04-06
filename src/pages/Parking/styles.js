import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: 42px 8px;

  div:first-child {
    display: flex;
    align-items: center;

    a {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 48px;
      text-decoration: none;

      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #9b9b9b;
    }
  }

  div:last-child {
    padding: 40px 16px 64px;
    background: #fff;

    p {
      font-size: 16px;
      line-height: 22px;
      color: #9b9b9b;
      margin-bottom: 8px;
    }

    input {
      display: block;
      width: 100%;
      height: 67px;
      text-align: center;
      background: #fffbe6;

      border-radius: 4px;
      border: 1px solid #ccc;

      font-weight: 400;
      font-size: 24px;
      color: #9b9b9b;
      text-transform: uppercase;

      &::placeholder {
        color: #9b9b9b;
      }
    }

    button {
      margin-top: 14px;
      display: block;
      width: 100%;
      height: 67px;

      background: #dadada;
      border-radius: 4px;
      border: none;

      font-weight: 600;
      font-size: 15px;
      line-height: 20px;
      text-align: center;
      color: #9b9b9b;

      ${(props) =>
        props.isActive &&
        css`
          background: #28dd91;
          color: #fff;
        `}
    }
  }
`;
