import React from 'react';

const courses = [
  { id: 1, name: 'Angular', date: '4/5/2021', isLive: true },
  { id: 2, name: 'React', date: '6/3/2021', isLive: true },
  { id: 3, name: 'Vue', date: '7/1/2021', isLive: false },
];

const CourseDetails = ({ showOnlyLive }) => {
  // early return if nothing to display (prevent render)
  const filtered = showOnlyLive ? courses.filter(c => c.isLive) : courses;
  if (showOnlyLive && filtered.length === 0) {
    return null; // nothing rendered
  }

  return (
    <div>
      <h2 style={{ marginBottom: 8 }}>Course Details</h2>
      {filtered.map(c => (
        <div key={c.id} style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 24, fontWeight: 600 }}>{c.name}</div>
          <div style={{ fontSize: 14 }}>{c.date}</div>
          <div>{c.isLive ? <span style={{ color: 'blue' }}>(Live)</span> : <span>(Upcoming)</span>}</div>
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;
