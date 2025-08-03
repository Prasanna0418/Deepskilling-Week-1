import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('Euro');

  // increment logic + static hello message
  const increment = () => {
    setCount(prev => prev + 1);
  };
  const sayHello = () => {
    console.log('Hello Members!');
    alert('Hello Members!');
  };
  const handleIncrement = () => {
    increment();
    sayHello();
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const handleSynthetic = (e) => {
    e.preventDefault();
    alert('I was clicked');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // example conversion: amount * 8 (to match screenshot: 80 -> 640)
    const rupees = parseFloat(amount);
    if (isNaN(rupees)) return;
    const converted = rupees * 8;
    alert(`Converting to ${currency} Amount is ${converted}`);
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      {/* counter/buttons */}
      <div style={{ marginBottom: 30 }}>
        <div style={{ marginBottom: 4 }}>Count: {count}</div>
        <button onClick={handleIncrement} style={{ display: 'block', marginBottom: 4 }}>
          Increment
        </button>
        <button onClick={decrement} style={{ display: 'block', marginBottom: 4 }}>
          Decrement
        </button>
        <button onClick={() => sayWelcome('Welcome!')} style={{ display: 'block', marginBottom: 4 }}>
          Say welcome
        </button>
        <button onClick={handleSynthetic} style={{ display: 'block' }}>
          Click on me
        </button>
      </div>

      {/* Currency converter */}
      <div>
        <h1 style={{ color: 'green', fontSize: 36, margin: '8px 0' }}>Currency Convertor!!!</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 8 }}>
            <label>
              Amount:{' '}
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                style={{ marginLeft: 4 }}
              />
            </label>
          </div>
          <div style={{ marginBottom: 8 }}>
            <label>
              Currency:{' '}
              <input type="text" value={currency} readOnly style={{ marginLeft: 4 }} />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
