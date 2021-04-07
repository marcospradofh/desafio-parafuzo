import styled from 'styled-components';

export const NavStyled = styled.nav`
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

  .selected {
    background: #fff;
    color: #4dd0e1;
    border-bottom: 3px solid #4dd0e1;
  }
`;
