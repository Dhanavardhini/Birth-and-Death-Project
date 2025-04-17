import React, { useEffect, useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Margin } from '@mui/icons-material';
export default function Head() {
    const[newdata,setdata]=useState()
    const a=[{name:"aks"},{age:2}]
    useEffect(()=>{
        const fetchdata=async()=>{
            const response=await fetch("https://jsonplaceholder.typicode.com/posts")
            const data=await response.json()
            setdata(data)
        }
        fetchdata()
    },[])

console.log(newdata);

  return (
newdata?(
    <div  className='wrapper'>
        {
            newdata.map((posts,index)=>(
                <div className='har'
                key={index}>
                     
                     <span><FavoriteBorderIcon style={{color:'black'} }/></span>
                    <span>< AddShoppingCartIcon style={{marginLeft:150,}}/></span>
                    <h3>{posts.id}. {posts.title}</h3>
                    <p>{posts.body}</p>
                   
                   
                       
                    
                    </div>
            ))
        }
    </div>
)
:(
    <div>
        <h1>Error page</h1>
    </div>
)
  )
}
