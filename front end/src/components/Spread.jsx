import React, { useState } from 'react'
import Child from "./Spreadchild"

 function Output() {
    const a={myname:"",myage:null}

    const[name2,setperson]=useState(a)
    // console.log(name2);
    function Akshu(event){
        if(event.target.id=="age"){
            setperson({...name2,myage:event.target.value})
            console.log(name2);
        }
        else{
            setperson({...name2,myname:event.target.value})
            console.log(name2);
        }
    }
      return (
        <>
        <div>
            <label htmlFor="">Name  </label>
            <input type='text' placeholder='Enter your name' id="name" onChange={Akshu}/>   
        </div>
        <br></br>
        <div>
        <label htmlFor="">Age  </label>
        <input type='number' placeholder='Enter your Age' id="age" onChange={Akshu}/>
       <Child N={name2.myname} M={name2.myage}/>
       
    </div>
    </>
      )
    }
    export default Output
    
    