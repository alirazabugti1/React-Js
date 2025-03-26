import React, { useState } from 'react'
import Student from './Student';
function App()
{
  const [show,setshow]=useState(true);

  return (
    <div>
      {show && <Student name='Ali Raza '/>}
      <button onClick={()=>setshow(!show)}> {show ? "Remove Student" : "Show Student"}</button>
    </div>
  )
}

export default App
