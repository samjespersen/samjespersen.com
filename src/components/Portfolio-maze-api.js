import React from 'react';
import styles from './Tools.css';
import Letter from './Letter';

const PortfolioMazeApi = () => {

  const header = 'Maze API';

  const letters = header.split('').map((letter, i) => {
    return (
      <div key={`port1${i}`}>
        <Letter id={`port1${i}`} size={'1.5em'} letter={letter} />
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
        <div style={{ height: '150px', width: '100%' }}><img src='src/assets/maze-api.png' style={{ height: '100%', width: '100%' }} /></div>
      </div>
      <div style={{ margin: 'auto', width: '70%', color: '#E5ECE9', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <p style={{ color: '#E5ECE9', marginTop: '0px' }}><a href="https://maze-api.herokuapp.com">Deployed Website</a></p>
        <p style={{ color: '#E5ECE9', marginTop: '0px' }}><a href="https://github.com/maze-api/maze-api">Github</a></p>
      </div>
    </div>
  );

};

export default PortfolioMazeApi;
