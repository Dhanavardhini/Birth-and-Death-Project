import { useEffect, useState } from "react";
import React from 'react'

export  function Use() {
    const[count,setcount]=useState(0)
    useEffect(()=>{
        console.log("UseEffect is Running");
    },[Changecount])
function Changecount(){
    setcount((prev)=>prev+1)
    console.log("Clicked")
}
function Handlechange(){
    console.log("hellow");
}
  return (
    <>
    <div>
    <h1>Hi</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tempora illum dolore at, doloribus architecto nostrum voluptas! Voluptatibus quod, incidunt accusamus dolor et, soluta eius at asperiores cumque sunt sint!</p>
    <h1>{count}</h1>
    <button onClick={Handlechange}>Submit</button>
    <button onClick={Changecount}>Count</button>
    </div></>
  )
}
export default Use
