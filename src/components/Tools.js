import React from 'react';
import styles from './Tools.css';
import Letter from './Letter';

const Tools = () => {

  const header = 'Tool Kit';

  const letters = header.split('').map((letter, i) => {
    return (
      <div key={`t${i}`}>
        <Letter id={`t${i}`} size={'1.5em'} letter={letter} />
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
          <b>Languages</b>: JavaScript (ES6), HTML/CSS, Python, Bash
          <br /><b>Frontend</b>: React (+ hooks), Redux (+ hooks)
          <br /><b>Backend</b>: Node, Express, RESTful APIs
          <br /><b>Databases</b>: PostgreSQL, MongoDB (& Mongoose)
          <br /><b>Testing</b>: Jest, Enzyme, QUnit
          <br /><b>Version Control</b>: Git, GitHub
        </p>
      </div>
    </div>
  );

};

export default Tools;
