import { CenterFocusStrong, Height, Padding, Password } from '@mui/icons-material'
import React, { useState } from 'react'
import { border, color, height, textAlign } from '@mui/system'
import { green, yellow } from '@mui/material/colors'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import "../Style.css/Task.css"
import { Paper } from '@mui/material';
 function Idea() {
    const a={
        username:"",
        Password:"",      
    }
    const input={

       color:"black",
    }  
    const[namee,setvalue]=useState(a)
    function Arrow(event){
        if(event.target.id=="username"){
            setvalue({...namee,username:event.target.value})
        }       
        else{
            setvalue({...namee,Password:event.target.value})
        }
    }
    function Home(){
        setvalue(a)
    }
  return (
    <>
   
    <div className='har'>
    <h1>Login</h1>
    <div><h4>Welcome back!Login to access the Sweet Marketplace. Did you<p>Forget Your Password?</p></h4></div>
    <div >
        <input type='text' style={input} placeholder='Username' id='username' onChange={Arrow}/>       
        {/* {(namee && namee.username.length<15 && namee.username.length !=0)?(<h3>Welcome</h3>):(<h4>Error</h4>)} */}
     
        <p>{namee.username}</p>  
    </div>  
    <div>
        <input type='password' style={input} placeholder='Password' id='password' onChange={Arrow}/>
        {/* {(a.Password<10)?(<h3>Welcome</h3>):(<h4>Error</h4>)}  */}
        <p>{namee.Password}</p>      
    </div>
    <div>      
        <button onClick={Home}><span><ArrowForwardIcon style={{} }/></span> CONTINUE </button>       
    </div>
    </div>

    </>
  )
}
export default Idea

