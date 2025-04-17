import React, { useState } from 'react'

 function Condition() {
  const [isloged,setisloged]=useState(false)
 
  function Login(){
    setisloged(false)
  }
  function Logout(){
    setisloged(true)
    
  }
  console.log(isloged);
  var st=String(isloged)
  return(
  <>
  {isloged?(
  
    <div>
        <h1>Hellow Welcome User</h1>
        <button onClick={Login}> Logout</button>
        <p>{st}</p>
        
    </div>
  )

  :(
    <div>
        <h1>Thankyou You are Logout</h1>
        <button onClick={Logout}> Login</button>
        <p>{st}</p>

        
    </div>)}
     </>
     )
    

  
 }
export default Condition
