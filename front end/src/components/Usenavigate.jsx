import React from 'react'
import { useNavigate } from 'react-router-dom'


 function About() {
    const Swetha =useNavigate();
  return (
    <div>
        Products
        <br></br>
       <button onClick={()=>Swetha('/')}>Go to Home page</button>
    </div>
  )
}
export default About