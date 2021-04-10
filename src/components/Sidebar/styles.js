import styled from 'styled-components';

export const Container = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;

  flex-flow: column nowrap;
  position: fixed;
  top: 60px;
  right: 0;
  padding-left: 16px;
  height: 100%;
  width: 100%;
  padding-top: 24px;
  background: #4dd0e1;

  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.7s ease-in-out;

  li {
    padding: 18px 10px;
  }

  @media (min-width: 768px) {
    width: 400px;
  }

  li {
    color: #fff;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    margin-right: 16px;
  }

  a {
    text-decoration: none;
  }
`;
