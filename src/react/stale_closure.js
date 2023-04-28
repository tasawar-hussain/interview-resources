import './styles.css';
import React, { useEffect, useState } from 'react';

// Compare count value in DOM and in console
// Why we have different count values

export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      console.log(`Count is  ${count}`);
    }, 3000);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
