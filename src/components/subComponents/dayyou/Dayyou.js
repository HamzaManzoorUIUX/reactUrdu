import React, { useState, useEffect } from 'react';

export default function Dayyou() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount('Hamza')}>
        Click me{count}
      </button>
    </div>
  );
}