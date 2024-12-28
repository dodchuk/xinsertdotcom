// @ts-nocheck
'use client';

// Global
import './index.css';

import React, { Suspense, useState, useEffect } from 'react';
import cn from 'classnames';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { Stars, Sky, /* Stats */ } from '@react-three/drei';
import Loading from './components/Loading/Loading';
import Moon from './components/Moon/Moon';
import Building from './components/Building/Building';
import Ground from './components/Ground/Ground';
import Art from './components/Art/Art';
import Furniture from './components/Furniture/Furniture';
import Camera from './components/Camera/Camera';
import Player from './components/Player/Player';
import Lights from './components/Lights/Lights';

import styles from './sandbox.module.scss';
import LogoSVG from '@/ui/Logo/logo.svg';
import isServer from "@/infrastructure/isServer";

export const App = () => {
  return (
      <>
        <Canvas
            onCreated={ ({ gl }) => {
              gl.shadowMap.enabled = true;
              gl.shadowMap.type = THREE.PCFSoftShadowMap;
            } }
        >
          <Camera fov={ 60 } />
          <>
            <Stars />
            <Sky />
            <Suspense fallback={null}>
              <Moon />
            </Suspense>
          </>
          <Lights
              night={ false }
              performance
          />
          <Physics gravity={ [0, -30, 0] }>
            <Suspense fallback={ null }>
              <Ground />
              <Building />
              <Art />
              <Furniture />
            </Suspense>
            <Player />
          </Physics>
        </Canvas>
      </>
  );
};

export const Overlay = () => {
  if (isServer()) {
    return;
  }
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const handleLockchange = () => {
      if (document.pointerLockElement === null) {
        setReady(false);
      } else {
        setReady(true);
      }
    };

    document.addEventListener('pointerlockchange', handleLockchange);

    return () => {
      document.removeEventListener('pointerlockchange', handleLockchange);
    };
  }, []);

  return (
      <>
        <App />
        <div className={ cn(styles.overlay, {
          [styles.isOverlayHidden]: ready
        }) }>
          <div className={ styles.logo }>
            <div className={ styles.logoContainer }>
              <LogoSVG />
            </div>
          </div>
          <div className={ styles.start }>Тицяй, щоб взаємодіяти</div>
        </div>
        <Loading />
      </>
  );
};
