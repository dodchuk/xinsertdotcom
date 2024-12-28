'use client';

import { useEffect } from 'react';

const BackgroundMouseMoveEffect = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      // Calculate percentages for CSS variables
      const xPercent = (clientX / innerWidth) * 100;
      const yPercent = (clientY / innerHeight) * 100;

      // Update CSS variables
      document.body.style.setProperty("--mouse-x", `${xPercent}%`);
      document.body.style.setProperty("--mouse-y", `${yPercent}%`);
    };

    // Attach event listener
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      // Cleanup event listener on unmount
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
};

export default BackgroundMouseMoveEffect;
