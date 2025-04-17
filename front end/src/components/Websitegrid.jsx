import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from './Websitenavbar';
// import im from "../assets/blo.jpg";
import { Haris } from './website';
import RecipeReviewCard from './Websitecard';
import RecipeReviewCard2 from './Card2';
import RecipeReviewCard3 from './Card3';


import BasicPagination from './Websitefootl';
import CustomizedTabs from './Websitetab';

import CopyrightIcon from '@mui/icons-material/Copyright';
import r from '../assets/pex.jpg'
import TwitterIcon from '@mui/icons-material/Twitter';
import { Facebook, Instagram } from '@mui/icons-material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Haris>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <ResponsiveAppBar/>
        </Grid>
        <Grid item xs={8}> 
        
   
      
      
        </Grid>
        <Grid item xs={6} >
          {/* <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around',textAlign:'center'}}> */}
         <img src={r} style={{height:'100vh',width:'100vw'}}></img>
         {/* </div> */}
        </Grid>
        <Grid item xs={12}>
        
         <CustomizedTabs/>
        
          
       
            <div className='ak'  >
              <RecipeReviewCard/>
              <RecipeReviewCard2/>
              <RecipeReviewCard3/>
              
                
             {/* <img src={im} style={{width:'500px'}}></img> */}
             </div>
        </Grid>
        <Grid item xs={12}><div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',marginBottom:'40px',marginTop:'40px'}}>
        <BasicPagination/>
        </div>
        </Grid>
       
        <Grid item xs={12} >
        <div className='twenty'style={{color:'whitesmoke',padding:'20px',backgroundColor:'#005076'}}>
          <h2 style={{display:'flex',flexWrap:'wrap',justifyContent:'center',marginBottom:'30px',color:'white'}}>Listed Propertys</h2>
          
         <div className='ten' style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',textDecoration:'underline',cursor:'pointer',color:'white'}}>
          <h4>Mobile Versions </h4>
          <h4>Make changes to your booking online</h4>
          <h4>customer service help</h4>
         
          
         
          </div>
          </div>
        </Grid>
        
        <Grid item xs={4} style={{padding:'50px',textAlign:'center',color:'white',cursor:'pointer',backgroundColor:'#005076'}}>
          
          
            <p style={{padding:'5px'}}>Countries</p>
            <p style={{padding:'5px'}}>Region</p>
            <p style={{padding:'5px'}}>Cities</p>
            <p style={{padding:'5px'}}>Hotels</p>
            <p style={{padding:'5px'}}>Airports</p>
            <p style={{padding:'5px'}}>Districts</p>
          
        </Grid>
        
        <Grid item xs={4} style={{padding:'50px',textAlign:'center',cursor:'pointer',backgroundColor:'#005076'}}>
         <h2 style={{color:'white',marginBottom:'30px'}}>Follows on</h2>
          <TwitterIcon style={{color:'white',padding:'5px'}}/>
          <Instagram style={{color:'white',padding:'5px'}}/>
          <Facebook style={{color:'white',padding:'5px'}}/>
        </Grid>
        <Grid item xs={4} style={{padding:'40px',textAlign:'center',color:'white',cursor:'pointer',backgroundColor:'#005076'}}>
         
          <p style={{padding:'5px'}}>Apartments</p>
            <p style={{padding:'5px'}} >Villas</p>
            <p style={{padding:'5px'}}>Cities</p>
            <p style={{padding:'5px'}}>Hostel</p>
            <p style={{padding:'5px'}}>Guesthouse</p>
        </Grid>
        <Grid item xs={12} style={{backgroundColor:'#005076'}}>
          <h4 style={{textAlign:'center', textDecoration:'underline',color:'white',marginTop:'10px',cursor:'pointer',}}>Extranet Login</h4>
          <p style={{textAlign:'center',color:'white'}}>Copyright © 1996–2024 Booking.com™. All rights reserved.
 <CopyrightIcon/></p>
 <p style={{textAlign:'center',marginTop:'10px',color:'white'}}>Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.</p>
        </Grid>
        
      </Grid>
      </Haris>
    </Box>
  );
}
