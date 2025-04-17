import React, { useState } from 'react'
import SortIcon from '@mui/icons-material/Sort';
import "../Style.css/Intern.css"
import Dropdown from './Drop';



 function Study() {

    const a=[
    {Name:"Akshaya",Age:23,Gender:'Female',Department:"It",Tamil:78,english:90,maths:80,total:248,avg:82.6,Rank:1},
    {Name:"Haris",Age:29,Gender:'male',Department:"Maths",Tamil:87,english:76,maths:67,total:220,avg:72.5,Rank:2},
    {Name:"Banu",Age:19,Gender:'Female',Department:"Chemistry",Tamil:65,english:45,maths:74,total:230,avg:60,Rank:6},
    {Name:"kavitha",Age:20,Gender:'Female',Department:"Physics",Tamil:45,english:65,maths:43,total:150,avg:54.3,Rank:8},
    {Name:"Aarthi",Age:21,Gender:'Female',Department:"Biologhy",Tamil:63,english:87,maths:76,total:190,avg:42,Rank:10},
    {Name:"Radha",Age:25,Gender:'Female',Department:"Computerscience",Tamil:87,english:97,maths:56,total:200,avg:50,Rank:9},
    {Name:"Makesh",Age:23,Gender:'male',Department:"English",Tamil:90,english:73,maths:50,total:213,avg:71,Rank:3},
    {Name:"Ramu",Age:26,Gender:'male',Department:"Chemistry",Tamil:76,english:56,maths:76,total:208,avg:69.3,Rank:4},
    {Name:"deepa",Age:28,Gender:'Female',Department:"Computerscience",Tamil:56,english:64,maths:65,total:185,avg:61.3,Rank:5},
    {Name:"Elakkiya",Age:25,Gender:'Female',Department:"Bca",Tamil:43,english:35,maths:100,total:178,avg:59.3,Rank:7},
    {Name:"Sakthi",Age:28,Gender:'Female',Department:"English",Tamil:54,english:35,maths:94,total:178,avg:50.3,Rank:17},
    {Name:"Nivetha",Age:20,Gender:'Female',Department:"Computerscience",Tamil:74,english:67,maths:88,total:178,avg:65.3,Rank:12},
    {Name:"Anu",Age:22,Gender:'Female',Department:"B.com",Tamil:89,english:56,maths:90,total:178,avg:68.3,Rank:18},
    {Name:"Hariprasad",Age:26,Gender:'male',Department:"Biologhy",Tamil:43,english:35,maths:50,total:178,avg:40.3,Rank:15},
    {Name:"Bharathi",Age:21,Gender:'Female',Department:"Biologhy",Tamil:90,english:54,maths:60,total:178,avg:60.3,Rank:20},
    {Name:"Iswarya",Age:29,Gender:'Female',Department:"Physics",Tamil:45,english:79,maths:40,total:178,avg:52.3,Rank:19},
    {Name:"Zoya",Age:30,Gender:'Female',Department:"Tamil",Tamil:78,english:76,maths:60,total:178,avg:57.3,Rank:14},
    {Name:"Kathir",Age:35,Gender:'male',Department:"Tamil",Tamil:67,english:56,maths:100,total:178,avg:52.3,Rank:16},
    {Name:"Surya",Age:32,Gender:'male',Department:"Physics",Tamil:83,english:93,maths:55,total:178,avg:54.3,Rank:11},
    {Name:"Ragul",Age:25,Gender:'male',Department:"Physics",Tamil:43,english:85,maths:74,total:178,avg:64,Rank:13},

]

 

   const [mark,setmark]=useState(a)
   const Animal =()=>{
    const  marks=[...mark].sort((a,b)=>a.Name.localeCompare(b.Name));
    setmark(marks);
 }
 const Rank = () => {
    const Ranks = [...mark].sort((a, z) => a.Rank - z.Rank);
    setmark(Ranks);
}
     const [search,setsearch]=useState("")
     const box=(event)=>{
        setsearch(event.target.value);
    }
   
 const[department,setdepartment]=useState("")
 const change=(event)=>{
    setdepartment(event.target.value)
 }

 const departments = [...new Set(a.map(student => student.Department))];

 const filter = mark.filter(
    (student) =>
        student.Name.toLowerCase().includes(search.toLowerCase()) &&
            (department === "" || student.Department === department)
    );


return(
           <>
        <div className='y'>
           
            <h1 style={{display:'flex',flexWrap:'wrap',justifyContent:'center',marginTop:'10px'}}>Students Marks</h1>
            <table style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
                <table border={1} style={{}}>
                <thead>
                    <tr>
                        <th rowSpan={2}>Name</th>
                        <th rowSpan={2}>age</th>
                        <th rowSpan={2}>gender</th>
                        <th rowSpan={2}>Department</th>
                        <th rowSpan={2}>tamil</th>
                        <th rowSpan={2}>english</th>
                        <th rowSpan={2}>maths</th>
                        <th rowSpan={2}>total</th>
                        <th rowSpan={2}>avg</th>
                        <th rowSpan={2}>Rank</th>
                        j
                    </tr>
                </thead>
                <tbody>
                {filter.map((a, index) => (
                            <tr key={index}>
                                <td rowSpan={1}  colSpan={1} style={{textAlign:'center'}}>{a.Name}</td>
                                <td rowSpan={1} colSpan={1}style={{textAlign:'center'}}> {a.Age} </td>
                                <td rowSpan={1} colSpan={1} style={{textAlign:'center'}}>{a.Gender}</td>
                                <td rowSpan={1} colSpan={1} style={{textAlign:'center'}} >{a.Department}</td>
                                <td rowSpan={1} colSpan={1} style={{textAlign:'center'}}>{a.Tamil}</td>
                                <td rowSpan={1} colSpan={1} style={{textAlign:'center'}}>{a.english}</td>
                                <td  rowSpan={1} colSpan={1}style={{textAlign:'center'}}>{a.maths}</td>
                                <td  rowSpan={1} colSpan={1}style={{textAlign:'center'}}>{a.total}</td>
                                <td  rowSpan={1} colSpan={1}style={{textAlign:'center'}}>{a.avg}</td>
                                <td rowSpan={1} colSpan={2} style={{textAlign:'center'}} >{a.Rank}</td>
                            </tr>
                        ))}

                </tbody>
            </table>
            </table>
            <div className='gg' style={{textAlign:'center',display:'flex',flexWrap:'wrap',justifyContent:'center',marginTop:'20px'}}>
            <button onClick={Animal} style={{fontSize:'large',borderRadius:'10px',padding:'5px',display:'flex',flexWrap:'wrap',justifyContent:'center',color:'white',border:'none'}} >SortList <SortIcon/></button>
           
            </div>
           <button onClick={Rank} style={{fontSize:'large',borderRadius:'10px',padding:'5px',display:'flex',flexWrap:'wrap',justifyContent:'center',color:'white',border:'none',marginLeft:'720px',marginTop:'10px'}}> Ranks<SortIcon/></button>

            <div className='b' style={{display:'flex',flexWrap:'wrap',justifyContent:'center',marginTop:'10px'}}>
            <input type='text' placeholder='search name' value={search} onChange={box} style={{textAlign:'center'}} 
            ></input>
            <Dropdown options={departments}  selectedOption={department} onOptionChange={change} />
            </div>  
        </div> 
        </>
    )
}
export default Study

 