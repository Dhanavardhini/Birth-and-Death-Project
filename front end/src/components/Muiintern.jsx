import * as React from 'react';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
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
];

export default function TableRowHead() {
  return (
    <>
    <Sheet variant="outlined">
      <Table>
        <thead>
          <tr>
            <th >Name </th>
            <th>Tamil</th>
            <th>English</th>
            <th>Maths</th>
            <th>Avg</th>
            <th>Total</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.Name}>
              <th scope="row">{row.Name}</th>
              <td>{row.Tamil}</td>
              <td>{row.english}</td>
              <td>{row.maths}</td>
              <td>{row.avg}</td>
              <td>{row.total}</td>
              <td>{row.Rank}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Sheet>
    <BasicButtons/>
    </>
  );
}
