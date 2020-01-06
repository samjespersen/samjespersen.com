import React from 'react';
import styles from './Tools.css';
import Letter from './Letter';

const PortfolioMazeRace = () => {

  const header = 'Basic Ass Maze Game';

  const letters = header.split('').map((letter, i) => {
    return (
      <div key={`port2${i}`}>
        <Letter id={`port2${i}`} size={'1.5em'} letter={letter} />
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
      <div className={styles.Portfolio}>
        <div style={{ height: '150px', width: '100%' }}><img src='/maze-race.png' style={{ height: '100%', width: '100%' }} /></div>
      </div>
      <div style={{ margin: 'auto', width: '70%', color: '#E5ECE9', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <p style={{ color: '#E5ECE9', marginTop: '0px' }}><a href="https://maze-race.netlify.com">Deployed Website</a></p>
        <p style={{ color: '#E5ECE9', marginTop: '0px' }}><a href="https://github.com/Team-Amazing-Race/">Github</a></p>
      </div>
    </div>
  );

};

export default PortfolioMazeRace;
