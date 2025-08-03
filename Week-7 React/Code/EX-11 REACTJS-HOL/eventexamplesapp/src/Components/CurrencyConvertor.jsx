import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const rupeeValue = parseFloat(rupees);
    if (!isNaN(rupeeValue)) {
      const euroValue = (rupeeValue * 0.011).toFixed(2); // Example rate
      setEuros(euroValue);
    }
  };

  return (
    <div style={{ padding: 20, border: '1px solid #ccc' }}>
      <h2>Currency Converter</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Amount in INR:
          <input
            type="number"
            value={rupees}
            onChange={(e) => setRupees(e.target.value)}
            style={{ marginLeft: 10 }}
          />
        </label>
        <button type="submit" style={{ marginLeft: 10 }}>Convert</button>
      </form>
      {euros && (
        <p>
          {rupees} INR = {euros} EUR
        </p>
      )}
    </div>
  );
}

export default CurrencyConvertor;
