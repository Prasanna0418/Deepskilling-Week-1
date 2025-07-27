import React from 'react';
import '../Stylesheets/mystyle.css';  // importing the stylesheet

function CalculateScore(props) {
  const average = props.total / props.goal;

  return (
    <div className="score-box">
      <h2>Student Score Details</h2>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>School:</strong> {props.school}</p>
      <p><strong>Total Score:</strong> {props.total}</p>
      <p><strong>Score:</strong> {average.toFixed(2)}</p>
    </div>
  );
}

export default CalculateScore;
