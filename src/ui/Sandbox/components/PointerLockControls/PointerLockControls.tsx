// @ts-nocheck

import React, { useEffect, useRef } from 'react';
import { extend, useThree } from '@react-three/fiber';
import { PointerLockControls as PointerLockControlsExt } from 'three/examples/jsm/controls/PointerLockControls';

extend({ PointerLockControlsExt });

// @ts-ignore
const PointerLockControls = (props) => {
  const { camera, gl } = useThree();
  const controls = useRef();

  useEffect(() => {
    const handleClick = () => {
      // @ts-ignore
      if (controls.current) {
        controls.current.connect();
        setTimeout(() => {controls.current.lock()},110);
      }
    }
    document.addEventListener('click', handleClick);
  }, []);


  return (
        <pointerLockControlsExt
            ref={ controls }
            args={ [camera, gl.domElement] }
            { ...props }
        />
  );
};

export default PointerLockControls;
