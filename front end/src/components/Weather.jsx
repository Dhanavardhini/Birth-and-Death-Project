import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Grid } from '@mui/material';
import snow from "../assets/snow.jpg"




export default function Weather() {
  
    const [location, setlocation]=useState();
    const[value,setvalue]=useState()
    const[id,setid]=useState()
    const[wind,setwind]=useState()
    const[speed,setspeed]=useState()
    const[lon,setlon]=useState()
    const[temp,settemp]=useState()


const fetchdata=async()=>{
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=99ed8109be9313a5cd83c79def0f7be2&units=metric`)
    const datas=await response.json()
    console.log(datas)
   
    setvalue(datas.main.humidity);
    setid(datas.wind.speed);
    setwind(datas.name);
    setspeed(datas.coord.lat);
    setlon(datas.coord.lon);
    settemp(datas.main.temp);

}

  const Hand = (event) => {
    setlocation(event.target.value);
  };
  
  return (
    <>
   
    
   
        <input type="text" 
onChange={Hand}  style={{padding:'5px'}} /> 
<SearchIcon onClick={fetchdata}/>
<p>{location}</p>
<p>{value}</p>
<p>{id}</p>
<p>{wind}</p>
<p>{speed}</p>
<p>{lon}</p>
<p>{temp}</p>























































    </>
  )
}
