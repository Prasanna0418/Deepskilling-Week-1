import React, { useState } from 'react';
import ListOfPlayers from './Components/ListofPlayers';
import IndianPlayers from './Components/IndianPlayers';

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>Cricket App</h1>
      <button
        onClick={() => setFlag(f => !f)}
        style={{ padding: '8px 14px', marginBottom: 15, cursor: 'pointer' }}
      >
        Show {flag ? 'Indian Players' : 'List of Players'} (flag: {flag.toString()})
      </button>

      {flag ? <ListOfPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;

