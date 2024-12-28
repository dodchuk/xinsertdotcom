// @ts-nocheck
import * as THREE from 'three';
import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { useSphere } from '@react-three/cannon';
import { useThree, useFrame } from '@react-three/fiber';
import PointerLockControls from '../PointerLockControls/PointerLockControls'
import usePlayerControls from '../usePlayerControls/usePlayerControls';

const Player = (props) => {
  const { camera } = useThree();
  const {
    forward,
    backward,
    left,
    right,
    jump,
    speed
  } = usePlayerControls();

  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: 'Dynamic',
    position: [0, 15, 10],
    rotation: [0, 0, 0],
    args: [6],
    radius: 6,
    ...props
  }), useRef());

  const velocity = useRef([0, 0, 0]);
  const position = useRef([0, 15, 10]);
  useEffect(() => {
    api.velocity.subscribe(v => velocity.current = v)
  }, [api.velocity])
  useEffect(() => {
    api.position.subscribe(v => position.current = v)
    camera.position.copy(ref.current.position);
  }, [api.position])

  const calculatePosition = () => {
    const frontVector = new THREE.Vector3(0, 0, Number(backward) - Number(forward));
    const sideVector = new THREE.Vector3(Number(left) - Number(right), 0, 0);
    // //
    const direction = new THREE.Vector3();
    //calculate direction aligned with the camera
    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(speed).applyEuler(camera.rotation);

    //apply the velocity to our sphere
    api.velocity.set(direction.x, velocity.current[1], direction.z);

    //to limit jump by check if jumping and velocity in y compared to almost zero i.e we are standing or at the top of our jump change value 100 to 0.01
    if (jump && Math.abs(Number(velocity.current[1].toFixed(2))) < 100) {
      api.velocity.set(velocity.current[0], 10, velocity.current[2]);
    }
  };

  useFrame((_, delta) => {
      calculatePosition();
      camera.position.copy(new THREE.Vector3(...position.current));
      // camera.position.copy(ref.current.position);
  });


  return (
      <>
        { /* @ts-ignore */ }
        <mesh ref={ref}>
          <sphereGeometry args={[1, 32, 32]} />
        </mesh>
        <PointerLockControls />
      </>
  );

};

export default Player;
