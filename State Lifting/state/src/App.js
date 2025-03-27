import { useState } from 'react';
import './App.css';
import Field from './Field';
function App() {

  const [name,setnewname] = useState('');

  return (
    <div>

      <Field n={name} s={setnewname}/>

    </div>
  );
}

export default App;
