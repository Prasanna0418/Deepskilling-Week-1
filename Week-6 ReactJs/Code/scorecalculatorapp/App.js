import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore
        name="Lakshmi"
        school="Little Lilly High School"
        total={680}
        goal={7}
      />
    </div>
  );
}

export default App;
