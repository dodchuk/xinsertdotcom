import React, { useMemo } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';

// @ts-ignore
const WindowFrame = ({ scale, position, rotation, modelUrl, mapUrl, normalMapUrl }) => {
    // @ts-ignore
    let newMaterial, map;
    // @ts-ignore
    const { scene } = useGLTF(modelUrl);

    newMaterial = new THREE.MeshPhysicalMaterial();

    map = useMemo(() => new THREE.TextureLoader().load(mapUrl), [mapUrl]);
    map.flipY=false;

    scene.traverse((child: any) => {
        if ( child.isMesh ) {
            // @ts-ignore
            child.material = newMaterial;
            child.castShadow = true;
            child.receiveShadow = true;
            child.material.metalness = 0;
            child.material.clearcoat = 1;
            child.material.clearcoatRoughness = 0.6;
            child.material.roughness = 0.9;
            // @ts-ignore
            child.material.map = map;
        }
    })


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

  export default WindowFrame;
