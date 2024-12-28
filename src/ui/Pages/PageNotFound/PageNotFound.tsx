'use client';

import React, { useState, useEffect } from 'react';
import mobile from '@/infrastructure/browser/mobile';
import logo from '@/ui/Logo/logo.svg';
import cn from 'classnames';
import xinsertLogo from '@/ui/Logo/logoSimple.svg';
import styles from './pagenotfound.module.scss';

const getColor = (colors: string[][]) => {
  const [background, logo] = colors[Math.floor(Math.random() * colors.length)];
  return { background, logo };
};

const getLogo = (logos: [string, string][]) => {
  const [logo, className] = logos[Math.floor(Math.random() * logos.length)];
  return { logo, className };
};

const logos: [string, string][] = [
  [logo, styles.logo],
  [xinsertLogo, cn(styles.logo, styles.xinsertLogo)]
];

const palettes: string[][] = [
  ['#f8fa00', '#000'],
  ['#7BE166', '#F79FF2'],
  ['#B1F93B', '#FFF'],
  ['#000', '#f8fa00'],
  ['#1900A0', '#38FF12'],
  ['#FFF100', '#FF00E3'],
  ['#FFEA00', '#1F04AA'],
  ['#FF8700', '#000'],
  ['#DC0000', '#FFF'],
  ['#000', '#1E41FF'],
  ['#F0D787', '#FFF']
];

const PageNotFound: React.FC = () => {
  const [colors, setColors] = useState(getColor(palettes));

  const handleClick = () => {
    const newColors = getColor(palettes);
    setColors(newColors);
    document.body.style.background = newColors.background;
  };

  useEffect(() => {
    document.body.style.background = colors.background;

    document.addEventListener('keypress', handleClick);
    if (mobile.any()) {
      document.addEventListener('touchstart', handleClick);
      document.addEventListener('touchmove', (event) => {
        // @ts-ignore
        if (event.scale !== 1) {
          event.preventDefault();
        }
      }, { passive: false });
    } else {
      document.addEventListener('click', handleClick);
    }

    return () => {
      document.removeEventListener('keypress', handleClick);
      document.removeEventListener('touchstart', handleClick);
      document.removeEventListener('touchmove', handleClick);
      document.removeEventListener('click', handleClick);
    };
  }, [colors]);

  const logo = getLogo(logos);

  return (
    <div className={styles.static}>
      <div className={styles.staticContainer}>
        <div className={logo.className} style={{ fill: colors.logo }}>
          <logo.logo />
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
