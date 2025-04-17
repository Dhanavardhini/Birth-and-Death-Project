import * as React from 'react';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';
import { Akshaya } from './Ddd';
import InputColors from './New';


const Item = styled("div")(() => ({
  backgroundColor:
   "red",
  padding: "10px",
  textAlign: 'center',
  border:"2px solid yellow",
  color: "green",
}));

export default function BasicGrid() {
  return (<>
    
      <Akshaya>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aliquid cum odio, omnis ipsam, blanditiis iste vitae voluptatibus in officiis dolore nobis sit autem ratione voluptas dignissimos porro? Ullam, animi?</h1>
        <p className='anu'>Welcome to world</p>
        <h3 className='na'>Lorem and also</h3>
        <InputColors/>
       
      </Akshaya>
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={8}>
        <Item>xs=8</Item>
      </Grid>
      <Grid xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid xs={8}>
        <Item>xs=8</Item>
      </Grid>
    </Grid>
    </>

  );
}
