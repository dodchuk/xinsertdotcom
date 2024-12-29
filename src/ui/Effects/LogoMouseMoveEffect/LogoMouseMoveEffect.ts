'use client';

import { useEffect } from 'react';
const LogoMouseMoveEffect = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth } = window;
      const mediaQueries = window?.matchMedia('(max-width: 1100px)');

      // Calculate percentages for CSS variables
      const xPercent = (clientX / innerWidth) * 100;
      const yPercent = (clientY / innerWidth) * 100;
      const logoElement = document?.getElementById("logo");
      if (logoElement) {
        logoElement.style.fill = '#000000';

        if (xPercent < 46) {
          logoElement.style.fill = '#ffffff';
        }

        if (mediaQueries?.matches && yPercent < 20) {
          logoElement.style.fill = '#ffffff';
        }
      }
    };

    // Attach event listener
    window.addEventListener("mouseover", handleMouseMove);

    return () => {
      // Cleanup event listener on unmount
      window.removeEventListener("mouseover", handleMouseMove);
    };
  }, []);

  return null;
};

export default LogoMouseMoveEffect;
