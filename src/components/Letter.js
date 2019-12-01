import React from 'react';
import styles from './Letter.css';

const Letter = ({ letter, effect }) => {
  return (
    <div className={`${styles[effect]} ${styles.Letter}`}><pre>{letter}</pre></div>
  );
};

export default Letter;
