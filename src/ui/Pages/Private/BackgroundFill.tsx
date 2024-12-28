import React from 'react';
import styles from './snap.module.scss';

type TProps = {
  color?: string
}

const BackgroundFill = ({
  color,
}: TProps) => {
  return (
    <div
      className={ styles.backgroundFill }
      style={ {
        ...color && { backgroundColor: color },
      } }
    />
  );
};

export default BackgroundFill;
