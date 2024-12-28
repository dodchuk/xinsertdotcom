import React from 'react';
import { useGLTF } from '@react-three/drei';

// @ts-ignore
const Picture = ({ url, scale, position, rotation, metalness, roughness }) => {
  // @ts-ignore
  const { scene } = useGLTF(url);
    // @ts-ignore
  scene.traverse(( child ) => {
      if ( child.isMesh ) {
          child.castShadow = true;
          child.receiveShadow = true;
          child.material.toneMapped = false;
          child.material.metalness = metalness;
          child.material.roughness =roughness;
      }
  });

    return (
         <primitive
            scale={scale}
            position={position}
            rotation={rotation}
            object={scene}
            dispose={null}
          />
    )
  }

  export default Picture;
