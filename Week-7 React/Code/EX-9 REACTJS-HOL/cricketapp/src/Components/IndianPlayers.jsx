import React from 'react';

const IndianPlayers = () => {
  const oddTeam = ['Rohit Sharma', 'Virat Kohli', 'Sachin Tendulkar', 'Sourav Ganguly', 'Rahul Dravid'];
  const evenTeam = ['MS Dhoni', 'Ravichandran Ashwin', 'Anil Kumble', 'Yuvraj Singh', 'VVS Laxman'];

  const [firstOdd, secondOdd, ...othersOdd] = oddTeam;
  const [firstEven, secondEven, ...othersEven] = evenTeam;

  const T20players = ['Hardik Pandya', 'Jasprit Bumrah', 'KL Rahul'];
  const RanjiPlayers = ['Cheteshwar Pujara', 'Mayank Agarwal'];

  const merged = [...T20players, ...RanjiPlayers];

  return (
    <div style={{ padding: 12, border: '1px solid #999', borderRadius: 6 }}>
      <h2>Indian Players</h2>

      <div>
        <h4>Odd Team:</h4>
        <p>First: {firstOdd}</p>
        <p>Second: {secondOdd}</p>
        <p>Others: {othersOdd.join(', ')}</p>
      </div>

      <div style={{ marginTop: 10 }}>
        <h4>Even Team:</h4>
        <p>First: {firstEven}</p>
        <p>Second: {secondEven}</p>
        <p>Others: {othersEven.join(', ')}</p>
      </div>

      <div style={{ marginTop: 10 }}>
        <h4>Merged T20 + Ranji:</h4>
        <ul>
          {merged.map((name, idx) => (
            <li key={idx}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IndianPlayers;

