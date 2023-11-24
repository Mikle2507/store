import React from 'react';
import styles from './index.module.scss';

export const Burger = () => {
  return (
    <button className={styles.element}>
      <span  className={styles.element__line}></span>
    </button>
  );
};
