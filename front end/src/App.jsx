import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Logonline';
import Dashboard from './components/Onlineuserhome';
import BirthCertificatePage from './components/Bithcer';
import AdminPage from './components/Onlineadmin';
import CertificateVerify from './components/Certificaeverify';
import DeathCertificatePage from './components/Deathcertificate';
import HomePage from './components/Homeonline';
import AdminLoginPage from './components/Adminloonline';
// import EditUserPage from './components/Onlineedited';
import Register from './components/Register';
import Adminhomepage from './components/Adminhome';
import CertificatesStatus from './components/CertificatesStatus';
import Cer from './components/Cer';




function App() {
  return (
   
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user-login" element={<LoginPage />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path="/user-details" element={<AdminPage />} />
        <Route path="/admin" element={<Adminhomepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/birth-certificates" element={<BirthCertificatePage />} />
        <Route path="/death-certificates" element={<DeathCertificatePage />} />
        <Route path="/CertificatesStatus" element={< CertificatesStatus/>} />
        <Route path="/certificate-verify" element={<CertificateVerify />} />
        <Route path="/certificate" element={<Cer/>} />
      </Routes>
    </Router>


    // <Adminhomepage/>
  
  );
}

export default App;
