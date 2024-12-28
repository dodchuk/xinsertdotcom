// @ts-nocheck
import React, { useRef, useLayoutEffect } from 'react';
import { useThree } from '@react-three/fiber';

const Camera = (props) => {
  const cameraRef = useRef();
  const set = useThree(({ set }) => set);
  const size = useThree(({ size }) => size);

  useLayoutEffect(() => {
    if (cameraRef.current) {
      // @ts-ignore
      cameraRef.current.aspect = size.width / size.height;
      // @ts-ignore
      cameraRef.current.updateProjectionMatrix();
    }
  }, [size, props]);

  useLayoutEffect(() => {
    // @ts-ignore
    set(() => ({ camera: cameraRef.current }));
  }, []);

  // @ts-ignore
  return (
      <perspectiveCamera ref={ cameraRef } />
  );
};

export default Camera;
