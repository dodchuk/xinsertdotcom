import React from 'react';
import { useGLTF } from '@react-three/drei'

const Moon = () => {


  const { scene } = useGLTF('assets/3D/Moon/scene.gltf', true);

  console.log(scene);
  scene.traverse(function (child) {
    // @ts-ignore
    if (child.isMesh) {
      // @ts-ignore
      child.material.fog = false;
    }
  });

  return (

      <primitive
          scale={ [6, 6, 6] }
          rotation={ [Math.PI / 40, Math.PI / 3.5, Math.PI / 8] }
          position={ [80, 150, -200] }
          object={ scene }
          dispose={ null }
      />
  );
};
export default Moon;
