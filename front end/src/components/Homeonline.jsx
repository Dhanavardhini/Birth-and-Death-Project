// HomePage.js
import React from 'react';
import { Button, Card, CardContent, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/birth.jpg';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Card
        elevation={3}
        style={{
          borderRadius: '10px',
          padding: '20px',
          width: '90%',
          maxWidth: '400px',
          backgroundColor: 'rgba(255, 255, 255, 0.85)', // semi-transparent background for better readability
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            style={{
              fontWeight: 'bold',
              color: '#00796b',
            }}
          >
            Welcome to Our System
          </Typography>
          <Typography
            variant="body1"
            align="center"
            gutterBottom
            style={{ marginBottom: '20px', color: '#555' }}
          >
            Please select your role to login
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/admin-login')}
                style={{ borderRadius: '5px' }}
              >
                Admin Login
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate('/user-login')}
                style={{ borderRadius: '5px' }}
              >
                User Login
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;
