import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField,
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    certificateType: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Registration Successful!');

    // Clear input fields
    setFormData({
      name: '',
      age: '',
      certificateType: '',
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Navbar */}
      <AppBar position="static" style={{ marginBottom: '20px' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Online Birth and Death Certificate System
          </Typography>
          {/* Home Button to navigate to Dashboard */}
          <Button color="inherit" onClick={() => navigate('/dashboard')}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate('/birth-certificates')}>
            Birth Certificates
          </Button>
          <Button color="inherit" onClick={() => navigate('/death-certificates')}>
            Death Certificates
          </Button>
          <Button color="inherit" onClick={() => navigate('/')}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Registration Form */}
      <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom>
                Register Form
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                  InputProps={{
                    style: { height: '40px' },
                  }}
                />
                <TextField
                  label="Age"
                  name="age"
                  type="number"
                  value={formData.age}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                  InputProps={{
                    style: { height: '40px' },
                  }}
                />
                <TextField
                  label="Certificate Type"
                  name="certificateType"
                  value={formData.certificateType}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                  InputProps={{
                    style: { height: '40px' },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{ marginTop: '16px' }}
                >
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default RegisterForm;
