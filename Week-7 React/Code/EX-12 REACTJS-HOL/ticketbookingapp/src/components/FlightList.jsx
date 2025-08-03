import React from 'react';

const flights = [
  { id: 1, from: 'Mumbai', to: 'Delhi', time: '09:00 AM', price: 4500 },
  { id: 2, from: 'Bangalore', to: 'Chennai', time: '01:30 PM', price: 3200 },
  { id: 3, from: 'Kolkata', to: 'Hyderabad', time: '06:15 PM', price: 5800 },
];

const FlightList = ({ canBook }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: 12, borderRadius: 6, marginBottom: 12 }}>
      <h3>Available Flights</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {flights.map(f => (
          <li key={f.id} style={{ marginBottom: 10 }}>
            <div>
              <strong>{f.from}</strong> → <strong>{f.to}</strong> at {f.time} | Price: ₹{f.price}
            </div>
            {canBook ? (
              <button style={{ marginTop: 4, padding: '4px 10px' }}>Book Now</button>
            ) : (
              <div style={{ fontSize: 12, color: '#555' }}>Login to book</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightList;
