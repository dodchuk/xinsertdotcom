// @ts-nocheck
import React, { useMemo } from 'react';
import { useBox } from "@react-three/cannon";
import * as THREE from 'three';

const Display = ({ position, size }) => {
    let alphaMap, diffuseMap, normalMap;

    // @ts-ignore
    const [ref] = useBox(() => ({
        type: "Static",
        args: [0.1, 16.5, 2],
        position
    }));

    alphaMap = useMemo(() => new THREE.TextureLoader().load("assets/Textures/BiancoMarble/BIANCO-ao.jpg"), []);

    diffuseMap = useMemo(() => new THREE.TextureLoader().load("assets/Textures/BiancoMarble/BIANCO-diffuse.jpg"), []);

    normalMap = useMemo(() => new THREE.TextureLoader().load("assets/Textures/BiancoMarble/BIANCO-normal.jpg"), []);

    console.log(size);
    return (
        <>
        <mesh
            ref={ref}
            receiveShadow
            castShadow
        >
            <primitive object={ new THREE.BoxGeometry(...size) } attach="geometry" />
            <meshPhysicalMaterial
                attach="material"
                clearcoat={1}
                roughness={0.5}
            >
                <primitive attach="alphaMap" object={alphaMap} />
                <primitive attach="map" object={diffuseMap} />
                <primitive attach="normalMap" object={normalMap} />
            </meshPhysicalMaterial>
        </mesh>
        </>
    );
}

export default Display;

