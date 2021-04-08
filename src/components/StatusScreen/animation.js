/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Lottie from 'react-lottie';

import sucess from '../../assets/sucess.json';
import loading from '../../assets/loading.json';

export default function Animation({ typeAnimation }) {
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const defaultOptions = {
    sucess: {
      loop: false,
      autoplay: true,
      animationData: sucess,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    },
    loading: {
      loop: true,
      autoplay: true,
      animationData: loading,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    },
  };

  return (
    <div>
      <Lottie
        options={defaultOptions[typeAnimation]}
        height={200}
        width={200}
        isStopped={isStopped}
        isPaused={isPaused}
      />
      {/* <button style={buttonStyle} onClick={() => setIsStopped(true)}>
        stop
      </button>
      <button style={buttonStyle} onClick={() => setIsStopped(false)}>
        play
      </button>
      <button style={buttonStyle} onClick={() => setIsPaused(!isPaused)}>
        pause
      </button> */}
    </div>
  );
}
