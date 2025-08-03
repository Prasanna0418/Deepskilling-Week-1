import React from 'react';

const books = [
  { id: 1, title: 'Master React', price: 670, available: true },
  { id: 2, title: 'Deep Dive into Angular 11', price: 800, available: true },
  { id: 3, title: 'Mongo Essentials', price: 450, available: false },
];

const BookDetails = ({ showUnavailable }) => {
  // element variable with if/else
  let content;
  if (showUnavailable) {
    // show all books
    content = books.map(b => (
      <li key={b.id}>
        <div>{b.title}</div>
        <div>{b.price}</div>
        <div>{b.available ? 'Available' : 'Not Available'}</div>
      </li>
    ));
  } else {
    // show only available (filter + map)
    content = books
      .filter(b => b.available)
      .map(b => (
        <li key={b.id}>
          <div>{b.title}</div>
          <div>{b.price}</div>
        </li>
      ));
  }

  return (
    <div>
      <h2 style={{ marginBottom: 8 }}>Book Details</h2>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>{content}</ul>
    </div>
  );
};

export default BookDetails;


