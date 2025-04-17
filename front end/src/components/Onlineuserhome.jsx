import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import birthDeathImage from '../assets/online2.webp'; 
import "../Styles/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      {/* Navigation Bar */}
      <AppBar position="static" className="appbar">
  <Toolbar className="toolbar">
    <Typography variant="h6" className="title">
      ONLINE BIRTH AND DEATH CERTIFICATE SYSTEM
    </Typography>
    <div className="nav-buttons">

      <Button className="nav-button" style={{ color: "white" }} onClick={() => navigate('/birth-certificates')}>
        Birth Certificates
      </Button>
      <Button className="nav-button" style={{ color: "white" }} onClick={() => navigate('/death-certificates')}>
        Death Certificates
      </Button>
      <Button className="nav-button" style={{ color: "white" }} onClick={() => navigate('/CertificatesStatus')}>
      Certificates Status
      </Button>
      <Button className="logout-button" style={{ color: "white" }} onClick={handleLogout}>
        Logout
      </Button>
    </div>
  </Toolbar>
</AppBar>


      {/* Content Section */}
      <Container maxWidth="lg" className="content-container">
        <Grid container spacing={3} alignItems="center">
          {/* Image Section */}
          <Grid item xs={12} md={6} className="image-section fade-in">
            <img
              src={birthDeathImage}
              alt="Birth and Death Certificate System"
              className="dashboard-image"
            />
          </Grid>

          {/* Text Section */}
          <Grid item xs={12} md={6} className="text-card slide-up">
            <Typography variant="h4" className="heading" gutterBottom>
              Effortless Online Birth & Death Certificate System
            </Typography>
            <Typography variant="body1" className="description" paragraph>
              Apply for birth and death certificates online with ease. Our system ensures
              quick and secure processing, eliminating the hassle of paperwork and long
              queues at government offices.
            </Typography>
            <Typography variant="body1" className="description" paragraph>
              With just a few clicks, you can submit applications, track status, and download
              approved certificates without any complications.
            </Typography>

            {/* Get Started Button */}
            <Button
              variant="contained"
              color="primary"
              size="large"
              className="get-started-button"
              onClick={() => navigate("/birth-certificates")}
            >
              Get Started
            </Button>
          </Grid>
        </Grid>
      </Container>

      {/* Footer Section */}
      <footer className="footer fade-in">
        <Typography variant="body2">
          © 2025 Online Birth and Death Certificate System. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
};

export default Dashboard;
