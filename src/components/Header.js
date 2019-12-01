import React from 'react';
import Letter from './Letter.js';

const Header = () => {

  const name = 'Samuel Nickilaus McLain-Jespersen';

  let effect = 'changeColor';

  const letters = name.split('').map((letter, i) => {
    return (
      <div key={i}>
        <Letter letter={letter} effect={effect} />
      </div>
    );
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1em 10em' }}>
      {letters}
    </div>
  );

};

export default Header;
