import React, { useState } from 'react'

export default function Oneusestate() {

var a={
    name:" ",
    age: null,
    
}
const[person,setperson]=useState(a)


 function Input(e){
if(e.target.id=="name"){
    console.log("This is name");
}
else{
    if(e.target.id=="age"){
        console.log("this is age");
    }

else{
    console.log("this is phoneno");
}
}
}



  return (
    <>
    <div>
        <input type='text' onChange={Input} id='name'/>
    </div>
    <div>
    <input type='text' onChange={Input} id='age'/>
</div>
<div>
<input type='text' onChange={Input} id='phoneno'/>
</div>
</>
  )
}











  