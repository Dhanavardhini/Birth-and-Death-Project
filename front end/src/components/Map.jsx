import React, { useState } from 'react'
import Grid from '@mui/material/Grid'

 function  Todo() {
  const [values, setvalue]=useState();
  const [todo, settodo]=useState([]);
  const add=()=>{
    if(!values){
      alert("enter  the data")
    
     
    }
    else{
      settodo([...todo,values]);
      
      setvalue('');
    }
  };
  return(
    <Grid item xs={12}>
    <div className='app'>
      <div>
        <input onChange={(e)=>setvalue(e.target.value)}value={values}/>
        <button onClick={add}>add</button>
      </div>
      <div>
<ul>
  {todo.map((todos)=>{
    return(
    <li>{todos}</li>)
   })}
</ul>
      </div>
      </div>
      </Grid>
      
   
    
  )

}
export default Todo