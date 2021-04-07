import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  margin: 25px 8px;
  border-radius: 4px;
  padding: 16px;

  header:first-child {
    display: flex;
    align-items: center;
    margin-bottom: 24px;

    img {
      margin-right: 12px;
    }

    h3 {
      font-weight: 600;
      font-size: 24px;
      /* line-height: 33px; */
      color: #00bcd4;
    }
  }
`;
