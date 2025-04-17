import React, { useState } from 'react';
import { Button, TextField, Card, CardContent, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import a from "../assets/obcs.png"; // Ensure the image path is correct

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = () => {
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/dashboard');
  };

  return (
    <Grid 
      container 
      justifyContent="center" 
      alignItems="center" 
      style={{ 
        minHeight: '100vh', 
        backgroundImage: `url(${a})`, 
        backgroundSize: 'cover',       
        backgroundRepeat: 'no-repeat' 
      }}
    >
      <Grid item xs={12} sm={8} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom>
              Login
            </Typography>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleLogin}
              style={{ marginTop: '16px' }}
            >
              Login
            </Button>
            <Button
              color="secondary"
              fullWidth
              style={{ marginTop: '8px' }}
            >
              Forgot Password?
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
export default LoginPage;
