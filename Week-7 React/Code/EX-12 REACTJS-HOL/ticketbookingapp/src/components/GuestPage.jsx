import React from 'react';
import FlightList from './FlightList';

const GuestPage = ({ onLogin }) => {
  return (
    <div>
      <h2>Welcome, Guest</h2>
      <p>Browse available flights. You must login to book tickets.</p>
      <FlightList canBook={false} />
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default GuestPage;
