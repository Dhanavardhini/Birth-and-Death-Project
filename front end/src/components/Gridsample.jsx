
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import UnderlineInput from './Gridinput';
import { Aaa } from './Example';
import SearchAppBar from './Gridinavbar';
import IconLabelButtons from './Gridbutton';
import Har from './Map';
import nav45 from '../assets/nature.jpg'
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
      <Aaa>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className='aa'>
        <SearchAppBar/>
        </div>
        </Grid>
        <Grid item xs={12}>
        <div className='in'>
          <img src={nav45} style={{width:'300px', marginLeft:'300px'}} ></img>
          <Har>
          <UnderlineInput/>
          </Har>
        </div>
        </Grid>
        <Grid item xs={12 }>
          <div className='yy'>
          <IconLabelButtons/>
          </div>
         
        </Grid>
        <Grid item xs={8}>
          
        </Grid>
      </Grid>
      </Aaa>
    </Box>
  );
}
