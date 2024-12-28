import React, { useMemo } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei'
import { useBox } from '@react-three/cannon';

// @ts-ignore
const Wall = ({ scale, position, rotation, modelUrl, mapUrl, normalMapUrl }) => {
  // @ts-ignore
  let texture, normal;
  const size = 20;

  // @ts-ignore
  const { scene } = useGLTF(modelUrl);

  const [refFront] = useBox(() => ({
    type: 'Static',
    args: [70, 50, 1],
    position: [0, 0, -17],
  }));
  const [refBack] = useBox(() => ({
    type: 'Static',
    args: [70, 50, 1],
    position: [0, 0, 44],
  }));
  const [refL] = useBox(() => ({
    type: 'Static',
    args: [1, 50, 80],
    position: [-39.5, 0, 0],
  }));
  const [refR] = useBox(() => ({
    type: 'Static',
    args: [1, 50, 80],
    position: [39.5, 0, 0],
  }));
  const [refTop] = useBox(() => ({
    type: 'Static',
    args: [150, 1, 150],
    position: [0, 30, 0],
  }));

  texture = useMemo(() => new THREE.TextureLoader().load(mapUrl), [mapUrl]);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(size, size);
  console.log(normalMapUrl);
  normal = useMemo(() => new THREE.TextureLoader().load(normalMapUrl), [normalMapUrl]);
  normal.wrapS = THREE.RepeatWrapping;
  normal.wrapT = THREE.RepeatWrapping;
  normal.repeat.set(size, size);

  // @ts-ignore
  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.side = THREE.DoubleSide;
      // @ts-ignore
      child.material.normalMap = normal;
      // @ts-ignore
      child.material.map = texture;
      child.material.metalness = 0;
      child.material.roughness = 1;
    }
  });

  return (
      <>
        { /* @ts-ignore */ }
        <mesh ref={ refFront } />
        { /* @ts-ignore */ }
        <mesh ref={ refL } />
        { /* @ts-ignore */ }
        <mesh ref={ refR } />
        { /* @ts-ignore */ }
        <mesh ref={ refBack } />
        { /* @ts-ignore */ }
        <mesh ref={ refTop } />
        <primitive
            position={ position }
            object={ scene }
            dispose={ null }
        />
      </>
  );
};

export default Wall;
