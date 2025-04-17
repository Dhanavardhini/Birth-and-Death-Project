
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { useNavigate, useLocation } from 'react-router-dom';
import Certificate from './Onlinecertificate';        // Birth Certificate Component
import DeathCertificate from './Deathcertificate';    // Death Certificate Component
import React from 'react';
import Certificates from "./Onlinedeath";

export default function Cer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHome = () => navigate('/dashboard');
  const handleLogout = () => navigate('/');

  const { state } = location;
  const selectedUser = state?.user;
  const certificateType = state?.type;

  console.log("Selected User:", selectedUser);
  console.log("Certificate Type:", certificateType);

  if (!selectedUser || !certificateType) {
    return (
      <Container style={{ marginTop: '20px' }}>
        <Typography variant="h6" color="error">
          Invalid Certificate Data or Missing User Info
        </Typography>
      </Container>
    );
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Online Birth and Death Certificate System
          </Typography>
          <Button color="inherit" onClick={handleHome}>Home</Button>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>

      <Container style={{ marginTop: '20px' }}>
        {/* Render Birth Certificate */}
        {certificateType === 'birth' && (
          <Certificate
            fullName={selectedUser.name || 'N/A'}
            dateOfBirth={selectedUser.date_of_birth || 'N/A'}
            parentsDetails={selectedUser.parents_name || 'N/A'}
            placeOfBirth={selectedUser.place_of_birth || 'N/A'}
            email={selectedUser.email || 'N/A'}
          />
        )}

        {/* Render Death Certificate */}
        {certificateType === 'death' && (
          <Certificates
            deceasedName={selectedUser.name || 'N/A'}
            dateOfDeath={selectedUser.date_of_death || 'N/A'}
            causeOfDeath={selectedUser.cause_of_death || 'N/A'}
            placeOfDeath={selectedUser.place_of_death || 'N/A'}
            email={selectedUser.email || 'N/A'}
          />
        )}
      </Container>
    </>
  );
}

