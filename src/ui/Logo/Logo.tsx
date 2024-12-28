import React from 'react';
import LogoSVG from './logo.svg';
import Link from 'next/link';
import styles from './logo.module.scss';
import LogoMouseMoveEffect from '../Effects/LogoMouseMoveEffect';

const LogoComponent = ({ locale }) => {
  return (
    <div className={ styles.logoWrp }>
      <div className={ styles.logo }>
        <Link href={ `/${ locale }` }>
          <LogoSVG id="logo" alt="X Insert" />
        </Link>
      </div>
      <LogoMouseMoveEffect />
    </div>
  );
};

export default LogoComponent;
