import React from 'react';
import FlightList from './FlightList';

const UserPage = ({ onLogout, username }) => {
  return (
    <div>
      <h2>Welcome, {username}</h2>
      <p>Select your flight and proceed to booking.</p>
      <FlightList canBook={true} />
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default UserPage;

