/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components';
import burgerMenu from '../../assets/burger-menu.json';
import Sidebar from '../Sidebar';

const Container = styled.button`
  /* --size: 80px;
  width: var(--size);
  height: var(--size); */
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4dd0e1;
  border: 0;
  padding: 0;
  outline: 0;
`;

function Burger() {
  const [open, setOpen] = useState(false);
  const [animationState, setAnimationState] = useState({
    isStopped: true,
    direction: -1,
  });
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: burgerMenu,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <Container
        onClick={() => {
          setOpen(!open);
          const reverseAnimation = -1;
          const normalAnimation = 1;
          setAnimationState({
            ...animationState,
            isStopped: false,
            direction:
              animationState.direction === normalAnimation
                ? reverseAnimation
                : normalAnimation,
          });
        }}
      >
        <Lottie
          options={defaultOptions}
          height={60}
          width={60}
          isStopped={animationState.isStopped}
          direction={animationState.direction}
        />
      </Container>
      <Sidebar
        open={open}
        setOpen={setOpen}
        setAnimationState={setAnimationState}
      />
    </>
  );
}

export default Burger;
