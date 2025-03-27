import React from 'react'

function Field(props) {
  return (
    <div style={{alignItems:'center', justifyContent:'center',  height: '100vh', width: '100%',  display:'flex', flexDirection: 'column'}} >


        <input 
        type='text' value={props.n} onChange={(e)=>{props.s(e.target.value)}}>
        </input>

        <br/>
      
        
        <h1>Tumne Likha Hai: {props.n}</h1>
        
    </div>
  )
}

export default Field
