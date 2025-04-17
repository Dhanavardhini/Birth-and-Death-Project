import React, { useState } from 'react'
import Child from './Studentchild'

 function Marks() {
    const a={myname:"",
    tamil:null,
    english:null,
    maths:null,
    science:null,
    social:null
}
    const[name1,setperson]=useState(a)
    // console.log(myname)
    
    function Animal(event){
        if(event.target.id=="name"){
            setperson({...name1,myname:event.target.value})
        }
        else if(event.target.id=="tamil"){
            setperson({...name1,tamil:event.target.value})
        }
        else if(event.target.id=="english"){
            setperson({...name1,english:event.target.value})
        }
        else if(event.target.id=="maths"){
            setperson({...name1,maths:event.target.value})
        }
        else if(event.target.id=="science"){
            setperson({...name1,science:event.target.value})
        }
        else {
            setperson({...name1,social:event.target.value})
        }
    }
   

  return (
    <>
    <div>
        <label htmlFor=''>Name: </label>
        <input type='text' placeholder='enter your name' id="name" onChange={Animal}/>
    </div><br></br>
    <div>
        <label htmlFor=''>Tamil:  </label>
        <input type='number' placeholder='' id="tamil" onChange={Animal}/>
    </div><br></br>
    <div>
        <label htmlFor=''>English:  </label>
        <input type='number' placeholder='' id="english" onChange={Animal}/>
    </div><br></br>
    <div>
        <label htmlFor=''>Maths: </label>
        <input type='number' placeholder='' id="maths" onChange={Animal}/>
    </div><br></br>
    <div>
        <label htmlFor=''>Science: </label>
        <input type='number' placeholder='' id="science" onChange={Animal}/>
    </div><br></br>
   
    <div>
    <label htmlFor=''>Social:  </label>
        <input type='number' placeholder='' id="social" onChange={Animal}/>
        <br></br><br></br><br></br>
        <Child z={name1.myname} b={name1.tamil} c={name1.english} d={name1.maths} e={name1.science} f={name1.social} />
        </div>
    </>
  )
}



export default Marks
