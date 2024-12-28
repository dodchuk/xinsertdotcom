// @ts-nocheck
import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

// Helper function to load textures from URLs
const loadTexture = (url) => {
  const loader = new THREE.TextureLoader();
  return loader.load(url);
};

const Cards = () => {
  const corridorLength = 36; // Length of the corridor
  const corridorRef = useRef([]);

  // UseMemo to create noise textures for walls and floors
  const frontTexture = useMemo(() => loadTexture('/assets/3D/RoofNoGlass/Textures/Material_49_baseColor.png'), []);

  useEffect(() => {
    const corridor = [];
    const wallWidth = 100;
    const wallHeight = 0.01;
    const corridorWidth = 5;

    // Create corridor planes
    for (let i = 0; i < corridorLength; i++) {
      const leftWallGeometry = new THREE.BoxGeometry(wallWidth, wallHeight, 0.05);
      const rightWallGeometry = new THREE.BoxGeometry(wallWidth, wallHeight, 0.05);

      // Use MeshStandardMaterial with noise texture
      const wallMaterial = new THREE.MeshStandardMaterial({
        map: frontTexture,
        emissive: new THREE.Color(0xff0000), // Red emissive color
        emissiveIntensity: 1, // Intensity of the emissive color
        side: THREE.DoubleSide,
        transparent: true,  // Enable transparency
        opacity: 0.3
      });

      const leftWallMesh = new THREE.Mesh(leftWallGeometry, wallMaterial);
      const rightWallMesh = new THREE.Mesh(rightWallGeometry, wallMaterial);

      leftWallMesh.position.set(-corridorWidth / 2, wallHeight * 40, i - corridorLength / 2);
      rightWallMesh.position.set(corridorWidth / 2, wallHeight * 40, i - corridorLength / 2);

      leftWallMesh.rotation.y = Math.PI / 2;
      rightWallMesh.rotation.y = -Math.PI / 2;

      corridor.push(leftWallMesh, rightWallMesh);
    }

    corridorRef.current = corridor;
  }, [corridorLength, frontTexture]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    corridorRef.current.forEach((mesh, index) => {
      const amplitude = 0.3; // Amplitude of shaking
      const frequency = 2; // Frequency of shaking

      // Shaking effect
      mesh.position.x += Math.sin(time * frequency + index) * amplitude;
      mesh.position.y += Math.sin(time * frequency + index * 1.5) * amplitude;

      // Spinning in all directions (x, y, z)
      const spinSpeed = 0.5; // Speed of spinning (you can adjust this)
      mesh.rotation.x += spinSpeed * 0.01; // Rotate around X axis
      mesh.rotation.y += spinSpeed * 0.01; // Rotate around Y axis
      mesh.rotation.z += spinSpeed * 0.01; // Rotate around Z axis
    });
  });

  return (
      <group>
        {corridorRef.current.map((mesh, index) => (
            <primitive object={mesh} key={index} />
        ))}
      </group>
  );
};

export default Cards;
