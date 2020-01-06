import React from 'react';
import Letter from './Letter.js';
import styles from './Header.css';
import '../index.css';

const Portfolio = () => {

  const header = 'Portfolio ';

  const letters = header.split('').map((letter, i) => {
    return (
      <div key={`h${i}`}>
        <Letter id={`h${i}`} size={'2.2em'} letter={letter} />
      </div>
    );
  });


  return (
    <>
      <div className={styles.Banner}>
        <div className={styles.name}>
          {letters}
        </div>
      </div >
    </>
  );

};

export default Portfolio;
