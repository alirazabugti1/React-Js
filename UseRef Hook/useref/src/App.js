import React, { useRef, useEffect } from 'react';

function App() {
  const countRef = useRef(0);

  useEffect(() => {
    console.log('Re Render horha hon abhi dekho!');
  });

  const incrementCount = () => {
    countRef.current += 1;
    console.log('Updated count:', countRef.current);
  };

  return (
    <div>
      <div>
        <button onClick={incrementCount}>Increment</button>
      </div>
      <p>count: {countRef.current}</p>
    </div>
  );
}

export default App;
