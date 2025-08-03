import React, { useState } from 'react';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';

function App() {
  const [user, setUser] = useState(null); // null = guest

  const handleLogin = () => {
    setUser({ name: 'Alice' }); // dummy user
  };

  const handleLogout = () => {
    setUser(null);
  };

  // element variable for conditional rendering
  let content;
  if (user) {
    content = <UserPage onLogout={handleLogout} username={user.name} />;
  } else {
    content = <GuestPage onLogin={handleLogin} />;
  }

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 20, fontFamily: 'Arial, system-ui' }}>
      <h1>Flight Ticket Booking</h1>
      {content}
    </div>
  );
}

export default App;

