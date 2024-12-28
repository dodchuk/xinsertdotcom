'use client';

import React, { useEffect } from 'react';
import config from '@/ui/Pages/Project/config.json';

interface IProps {
  activeModel: string,
  children?: React.ReactNode
}

const ModelViewer = ({ activeModel, children }: IProps) => {
  useEffect(() => {
    import('@google/model-viewer');

    const modelViewer = document.querySelector('model-viewer');
    if (modelViewer) {
      const orbitCycle = [
        '45deg 55deg 4m',
        '-55deg 0deg 2m',
        modelViewer.cameraOrbit,
      ];

      setInterval(() => {
        const currentOrbitIndex = orbitCycle.indexOf(modelViewer.cameraOrbit);
        modelViewer.cameraOrbit =
          orbitCycle[(currentOrbitIndex + 1) % orbitCycle.length];
      }, 10000);
    }
  }, []);

  return (
    <model-viewer
      id="model-viewer"
      style={ {
        display: 'block',
        width: '100%',
        height: '100%',
      } }
      src={ config[activeModel].modelUrl }
      environment-image="/planet/earth/creature/environments/moon_4k.hdr"
      camera-orbit="180deg 90deg"
      shadow-intensity="1"
      camera-controls
      auto-rotate
      loading="lazy"
      touch-action="pan-y"
    >
      { children }
    </model-viewer>
  );
};

export default ModelViewer;