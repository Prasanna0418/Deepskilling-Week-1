import React from 'react';


const players = [
  { name: 'Sachin Tendulkar', score: 98 },
  { name: 'Virat Kohli', score: 85 },
  { name: 'MS Dhoni', score: 65 },
  { name: 'Rohit Sharma', score: 72 },
  { name: 'Rahul Dravid', score: 67 },
  { name: 'Sourav Ganguly', score: 90 },
  { name: 'Yuvraj Singh', score: 55 },
  { name: 'Anil Kumble', score: 75 },
  { name: 'VVS Laxman', score: 69 },
  { name: 'Zaheer Khan', score: 80 },
  { name: 'Harbhajan Singh', score: 60 },
];

const ListOfPlayers = () => {
  
  const allPlayers= players.map((p, i) => (
    <li key={i}>
      Mr. {p.name} - {p.score}
    </li>
  ));

  
  const lowScorers = players
    .filter(p => p.score <= 70)
    .map((p, i) => (
      <li key={i}>
        Mr. {p.name} - {p.score}
      </li>
    ));

  return (
    <div style={{ padding: 12, border: '1px solid #999', borderRadius: 6, marginBottom: 20 }}>
      <h2>List of Players</h2>

      <div>
        <h4>All Players:</h4>
        <ul>{allPlayers}</ul>
      </div>

      <div style={{ marginTop: 10 }}>
        <h4>Players with score 70 or less:</h4>
        <ul>{lowScorers}</ul>
      </div>
    </div>
  );
};

export default ListOfPlayers;
