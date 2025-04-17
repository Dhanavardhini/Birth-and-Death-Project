import * as React from 'react';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';
import Akshaya from './Ddd';
 
const Item = styled("div")(() => ({
  backgroundColor:"yellowgreen", 
  padding: "10px",
  textAlign: 'center',
  border:"3px solid white",
  color: "blue",
}));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow:1}}>
    
    <Akshaya>
      <h1>hi</h1>

        <Akshaya/>
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={6} md={8}>
        <Item>xs=6 md=8</Item>
      </Grid>
      <Grid xs={6} md={4}>
        <Item>xs=6 md=4</Item>
      </Grid>
      <Grid xs={6} md={4}>
        <Item>xs=6 md=4</Item>
      </Grid>
      <Grid xs={6} md={8}>
        <Item>xs=6 md=8</Item>
      </Grid>
    </Grid></Box>
    
  );
}
