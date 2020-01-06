import React from 'react';
import styles from './Tools.css';
import Letter from './Letter';

const Methods = () => {

  const header = 'Methodology';

  const letters = header.split('').map((letter, i) => {
    return (
      <div key={`p${i}`}>
        <Letter id={`p${i}`} size={'1.5em'} letter={letter} />
      </div>
    );
  });

  return (
    <div>
      <div className={styles.Banner}>
        <div className={styles.name}>
          {letters}
        </div>
      </div>
      <div className={styles.Tools}>
        <p>
          <b>Slow is smooth. Smooth is fast.</b>
          <br />
          <br /><b>Unit Testing</b>: Using test driven development from start to finish in order to ensure clean and accessible code.
          <br /><b>Pair Programming</b>: Partnering with team members decreases errors and increases comradery.
        </p>
      </div>
    </div>
  );

};

export default Methods;
