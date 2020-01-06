import React from 'react';
import Letter from './Letter.js';
import styles from './Header.css';
import '../index.css';

const Header = () => {

  const fname = 'Samuel Nickilaus ';
  const lname = 'McLain-Jespersen';

  const fletters = fname.split('').map((letter, i) => {
    return (
      <div key={`f${i}`}>
        <Letter id={`f${i}`} size={'2.2em'} letter={letter} />
      </div>
    );
  });

  const lletters = lname.split('').map((letter, i) => {
    return (
      <div key={`l${i}`} >
        <Letter id={`l${i}`} size={'2.2em'} letter={letter} />
      </div>
    );
  });


  return (
    <>
      <div className={styles.Banner}>
        <div className={styles.name}>
          {fletters}
        </div>
        <div className={styles.name}>
          {lletters}
        </div>
      </div>
      <div style={{ color: 'white' }}>
        <a href="http://twitter.com/forloopsforlife">twitter</a> • <a href="https://www.linkedin.com/in/sam-mclain-jespersen/">linkedin</a> • <a href="https://github.com/samjespersen">github</a>
      </div >
      <div className={styles.Header}>
        <div style={{ textAlign: 'center', fontSize: '1.4em' }}>
          <p><b>Full Stack Web Developer
            <br /> OSINT Specialist
            <br /> Researcher</b>
          <br />
          <br /> <em>Portland, OR</em></p>
        </div>
      </div>

    </>
  );

};

export default Header;
