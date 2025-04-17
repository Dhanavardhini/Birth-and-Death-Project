import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, TextField, Card, CardContent, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Certificate from './Onlinedeath';  // Ensure you have a certificate component

const DeathCertificatePage = () => {
  const navigate = useNavigate();
  const [deceasedName, setDeceasedName] = useState('');
  const [email, setEmail1] = useState('');
  const [dateOfDeath, setDateOfDeath] = useState('');
  const [causeOfDeath, setCauseOfDeath] = useState('');
  const [parentsDetails, setParentsDetails] = useState('');
  // const [isSubmitted, setIsSubmitted] = useState(false); // Track submission status

  const handleHome = () => {
    navigate('/dashboard'); 
  };

  const handleLogout = () => {
    navigate('/'); 
  };

  const handleSubmit = async () => {
    if (!deceasedName || !dateOfDeath || !causeOfDeath || !parentsDetails || !parentsDetails || !email) {
      alert('Please fill out all fields before submitting.');
      return;
    }
    const payload = {
      name: deceasedName,
      date_of_death: dateOfDeath,
      place_of_death: causeOfDeath,
      cause_of_death: parentsDetails,
      email:email,
    };

    try {
      const response = await axios.post(
        'http://localhost/onlinebackend/controllers/api/User/post/death.php',
        payload
      );
      console.log('Response:', response.data);
      alert('Death Certificate Application Submitted Successfully!');
      // setIsSubmitted(true); 
       navigate('/CertificatesStatus');
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Error submitting application. Please try again.');
    }
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Online Birth and Death Certificate System
          </Typography>
          <Button color="inherit" onClick={handleHome}>
            Home
          </Button>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* {isSubmitted ? (
        <Certificate
          deceasedName={deceasedName}
          dateOfDeath={dateOfDeath}
          causeOfDeath={causeOfDeath}
          parentsDetails={parentsDetails}
          email={email}
        />
      ) : ( */}
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
          <Grid item xs={12} sm={8} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" align="center" gutterBottom>
                  Apply for Death Certificate
                </Typography>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={deceasedName}
                  onChange={(e) => setDeceasedName(e.target.value)} required
                />

<TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={email}
                  onChange={(e) => setEmail1(e.target.value)} required
                />
                <TextField
                  label="Date of Death"
                  type="date"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={dateOfDeath}
                  onChange={(e) => setDateOfDeath(e.target.value)} required
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  label="Place of Death"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={causeOfDeath} required
                  onChange={(e) => setCauseOfDeath(e.target.value)}
                />
                <TextField
                  label="Cause of Death"
                  variant="outlined"
                  fullWidth
                  margin="normal" required
                  value={parentsDetails}
                  onChange={(e) => setParentsDetails(e.target.value)}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleSubmit}
                  style={{ marginTop: '16px' }}
                >
                  Submit Application
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      // )}
    </div>
  );
};

export default DeathCertificatePage;

