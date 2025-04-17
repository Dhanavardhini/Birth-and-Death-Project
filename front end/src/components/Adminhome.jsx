import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Image from "../assets/birth.jpg"
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActionArea
} from '@mui/material';

const Adminhomepage = () => {
  const navigate = useNavigate();
  const [deathUserCount, setDeathUserCount] = useState();
  const [birthUserCount, setBirthUserCount] = useState();

  useEffect(() => {
    axios.post('http://localhost/onlinebackend/controllers/api/admin/Get/death.php')
      .then((response) => {
        setDeathUserCount(response.data.length);
      })
      .catch((error) => {
        console.error('Error fetching death user count:', error);
      });

    axios.post('http://localhost/onlinebackend/controllers/api/User/Get/birth.php')
      .then((response) => {
        setBirthUserCount(response.data.length);
      })
      .catch((error) => {
        console.error('Error fetching birth user count:', error);
      });
  }, []);

  const handleHome = () => {
    // navigate('/');
  };

  const handleUserDetails = () => {
    navigate('/user-details');
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <>
<div className='x' style={{ backgroundImage: `url(${Image})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Online Birth and Death Certificate System
          </Typography>
          <Button color="inherit" onClick={handleHome}>
            Home
          </Button>
          <Button color="inherit" onClick={handleUserDetails}>
            User Details
          </Button>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Container style={{ marginTop: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Admin Management
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h6" align="center">
                    Online Death User: {deathUserCount}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h6" align="center">
                    Online Birth User: {birthUserCount}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
      </div>
    </>
  );
};

export default Adminhomepage;
