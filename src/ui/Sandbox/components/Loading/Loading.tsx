import React, { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useTransition, animated } from 'react-spring';
import Link from 'next/link';
import LogoSVG from '@/ui/Logo/logo.svg';
import styles from './loading.module.scss';

const Loading = () => {
  const logoRef = useRef(null);
  const [finished, set] = useState(false);
  const [width, setWidth] = useState(0);
  const docElementMax = document.documentElement
      ? Math.max(
          document.documentElement.scrollWidth,
          document.documentElement.offsetWidth,
          document.documentElement.clientWidth
      )
      : 0;

  useEffect(() => {
    THREE.DefaultLoadingManager.onProgress = (url, itemsLoaded, itemsTotal) =>
        setWidth((itemsLoaded / itemsTotal) * docElementMax);
  }, []);
  THREE.DefaultLoadingManager.onLoad = () => set(true);

  const props = useTransition(finished, null, {
    from: { opacity: 1, width: 0 },
    leave: { opacity: 0 },
    update: { width },
  });

  return (
      <>
        { props.map(
            ({ item: finished, key, props: { opacity, width } }) =>
                !finished && (
                    <animated.div className={ styles.loading } key={ key } style={ { opacity } }>
                      <div className={ styles.topLevel } />
                      <div className={ styles.logo } ref={ logoRef }>
                        <div className={ styles.logoContainer }>
                          <Link href="/">
                            <LogoSVG />
                          </Link>
                        </div>
                      </div>
                      <div className={ styles.loadingBarContainer }>
                        <animated.div className={ styles.loadingBar } style={ { width } } />
                      </div>
                    </animated.div>
                ),
        ) }
      </>
  );
};

export default Loading;
