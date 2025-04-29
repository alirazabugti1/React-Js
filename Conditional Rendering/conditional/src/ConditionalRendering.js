import React,{useState} from 'react';

function ConditionalRendering() {
    
    const [buttontext,setbuttontext]= useState(false);

  return (
    <div>
      <button onClick={()=> setbuttontext(!buttontext)}>{buttontext?'Login':'Logout'}</button>
      <div>
        <p>{buttontext?'Welcome':'Not welcome'}</p>
      </div>
    </div>
  )
}

export default ConditionalRendering
