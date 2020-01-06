import React from 'react';
import Header from './Header.js';
import Tools from './Tools.js';
import styles from './App.css';
import Methods from './Methods.js';
import PortfolioMazeApi from './Portfolio-maze-api.js';
import PortfolioMazeRace from './Portfolio-maze-race.js';
import Portfolio from './PortfolioHeader.js';

const App = () => {

  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.firstRow}>
        <Tools />
        <Methods />
      </div>
      <br />
      <Portfolio />
      <br />
      <div className={styles.firstRow}>
        <PortfolioMazeApi />
        <PortfolioMazeRace />
      </div>
    </div>
  );

};

export default App;
