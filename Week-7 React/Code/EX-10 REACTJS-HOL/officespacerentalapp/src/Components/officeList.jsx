import React from 'react';

const offices = [
  {
    name: 'Central Plaza',
    rent: 55000,
    address: '123 Main St, Mumbai',
    image: 'https://via.placeholder.com/250x150?text=Central+Plaza',
  },
  {
    name: 'Tech Tower',
    rent: 75000,
    address: '45 Silicon Valley Rd, Bangalore',
    image: 'https://via.placeholder.com/250x150?text=Tech+Tower',
  },
  {
    name: 'Green Workspace',
    rent: 48000,
    address: '88 Eco Park, Pune',
    image: 'https://via.placeholder.com/250x150?text=Green+Workspace',
  },
];

const OfficeList = () => {
  return (
    <div style={{ padding: 16, maxWidth: 900, margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 24 }}>Office Space Rental</h1>

      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        {offices.map((office, idx) => {
          const rentStyle = {
            color: office.rent < 60000 ? 'red' : 'green',
            fontWeight: 600,
          };

          return (
            <div
              key={idx}
              style={{
                border: '1px solid #ddd',
                borderRadius: 8,
                padding: 12,
                width: 280,
                boxSizing: 'border-box',
                boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
                background: '#fff',
              }}
            >
              <h2 style={{ marginTop: 0, fontSize: 18 }}>{office.name}</h2>

              <img
                src={office.image}
                alt={office.name}
                style={{ width: '100%', height: 'auto', borderRadius: 4, marginBottom: 8 }}
              />

              <p style={{ margin: '6px 0' }}>
                <strong>Address:</strong> {office.address}
              </p>
              <p style={{ margin: '6px 0' }}>
                <strong>Rent:</strong>{' '}
                <span style={rentStyle}>₹{office.rent.toLocaleString()}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OfficeList;
