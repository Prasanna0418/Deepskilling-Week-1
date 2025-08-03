import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const sayHello = () => {
    console.log('Hello Members!');
    alert('Hello Members!');
  };

  const handleIncrementClick = () => {
    increment();
    sayHello();
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const handleSyntheticEvent = (e) => {
    e.preventDefault();
    alert('I was clicked');
    console.log(e); // SyntheticEvent object
  };

  return (
    <div style={{ padding: 20, border: '1px solid #ccc', marginBottom: 20 }}>
      <h2>Counter Example</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrementClick}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: 10 }}>Decrement</button>
      <br /><br />
      <button onClick={() => sayWelcome('Welcome!')}>Say Welcome</button>
      <br /><br />
      <button onClick={handleSyntheticEvent}>OnPress Synthetic Event</button>
    </div>
  );
}

export default Counter;
