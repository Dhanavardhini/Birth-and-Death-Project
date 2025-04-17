
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Endpoint } from './endpoit';

const UseRef = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const datas = {
      title: "another_title",
      views: 200
  }
    const api = async()=>{
       var ok = await axios.post(`${Endpoint}gym`,datas)
       console.log(ok);
      if(ok){
        console.log("success");
      }
    }
    
   
 

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Data from API</h1>
      <ul>
        {data.map((item )=> (
          <li key={item.id}>{item.name}</li>
        ))}
        <button onClick={api}>Clickkk</button>
      </ul>
    </div>
  );
};

export default UseRef;
