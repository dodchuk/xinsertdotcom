"use client";

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import LogoSVG from '@/ui/Logo/logo.svg';
import styles from './loading.module.scss';

const Loading = () => {
  const [width, set] = useState(0)
  const logoRef = useRef(null);
  useEffect(() => {
    setTimeout(() => set(100), 80)
  }, [])
  return (
      <div className={ styles.loading }>
        <div className={ styles.topLevel } />
        <div className={ styles.logo } ref={ logoRef }>
          <div className={ styles.logoContainer }>
            <Link href="/">
              <LogoSVG />
            </Link>
          </div>
        </div>
        <div className={ styles.loadingBarContainer }>
          <div className={ styles.loadingBar } style={ { width: width + '%' } } />
        </div>
      </div>
  );
};

export default Loading;