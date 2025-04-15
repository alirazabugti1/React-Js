import React, { useState ,useMemo} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  //jab count me koi change ho phr hi re render karo na k kisi or event pe
const calculate=useMemo(()=>{
return count*count;
},[count]);

  return (
    <div>

      <h1>Count: {count}</h1>
      
      <p>Result: {calculate}</p>

      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      
      <button onClick={() => setToggle(!toggle)}>Toggle State</button>
      
    </div>
  );
}

export default App;
