import styled, { css } from 'styled-components';

const buttonVariants = {
  green: css`
    background: #28dd91;
    color: #fff;
  `,
  purple: css`
    background: #a769b2;
    color: #fff;
  `,
  grayWhite: css`
    background: #fff;
    border: 2px solid #dadada;
  `,
  purpleWhite: css`
    background: #fff;
    border: 2px solid #a769b2;
    color: #a769b2;
  `,
};

export const StyledButton = styled.button`
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

  ${(props) => buttonVariants[props.color] || null}
`;
