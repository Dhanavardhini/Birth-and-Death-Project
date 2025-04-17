import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  TextField,
  Button,
  Alert,
  Paper,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CertificateVerify = () => {
  const [certificateNumber, setCertificateNumber] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setCertificateNumber(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setVerificationResult(null);

    // Simulate an API call to verify the certificate
    try {
      const result = await verifyCertificate(certificateNumber);
      setVerificationResult(result);
    } catch (error) {
      setVerificationResult({ success: false, message: 'Verification failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const verifyCertificate = (number) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (number === '12345') {
          resolve({ success: true, message: 'Certificate is valid.' });
        } else {
          reject(new Error('Invalid certificate number.'));
        }
      }, 1000);
    });
  };

  const handleHome = () => {
    navigate('/dashboard'); // Redirects to the dashboard page
  };

  const handleLogout = () => {
    navigate('/'); // Redirects to the login page
  };

  return (
    <div>
      {/* Navbar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Online Birth and Death System
          </Typography>
          <Button color="inherit" onClick={handleHome}>
            Home
          </Button>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" style={{ marginTop: '20px' }}>
        <Paper elevation={3} style={{ padding: '20px', borderRadius: '8px' }}>
          <Typography variant="h4" gutterBottom align="center">
            Certificate Verification
          </Typography>
          <Typography variant="body1" paragraph align="center">
            Verify birth and death certificates using the certificate number below.
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Certificate Number"
              value={certificateNumber}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
              {loading ? 'Verifying...' : 'Verify Certificate'}
            </Button>
          </form>

         
          {verificationResult && (
            <Box mt={2} display="flex" justifyContent="center">
              <Alert
                severity={verificationResult.success ? 'success' : 'error'}
                style={{ width: '100%', textAlign: 'center' }} 
              >
                {verificationResult.message}
              </Alert>
            </Box>
          )}
        </Paper>
      </Container>
      
    </div>
  );
};

export default CertificateVerify;
