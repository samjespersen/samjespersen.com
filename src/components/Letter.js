import React, { useState } from 'react';
import styles from './Letter.css';
const randomColor = require('randomcolor');
const randomFont = require('random-font');

const Letter = ({ id, letter, size }) => {
  const start = {
    color: '#E5ECE9',
    fontFamily: 'Solway',
    fontWeight: 590,
    fontSize: `${size}`
  };

  const randomStyle = () => {
    const color = randomColor();
    const font = randomFont();

    return `color: ${color}; font-family: ${font}; font-weight: 550; font-size: ${size}`;

  };



  const [classes, setClasses] = useState(`${styles.Letter}`);
  const [animated, setAnimated] = useState(false);

  const fall = () => {
    if (!animated) {
      const newStyle = randomStyle();

      setClasses(`${styles.Letter} ${styles.fall}`);

      setAnimated(true);

      setTimeout(() => {
        document.getElementById(id).style = newStyle;
        setClasses(`${styles.Letter} ${styles.rise}`);

        setTimeout(() => {
          setAnimated(false);
          setClasses(`${styles.Letter}`);
        }, 300);

      }, 500);
    }
  };

  return (
    <div onMouseEnter={fall}>
      <pre id={id} className={classes} style={start}>{letter}</pre>
    </div >
  );
};

export default Letter;
