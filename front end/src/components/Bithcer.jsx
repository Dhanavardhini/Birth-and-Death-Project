// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   TextField,
//   Card,
//   CardContent,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Certificate from "./Onlinecertificate";
// import "../Styles/Birth.css";

// const BirthCertificatePage = () => {
//   const navigate = useNavigate();
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [dateOfBirth, setDateOfBirth] = useState("");
//   const [parentsDetails, setParentsDetails] = useState("");
//   const [placeOfBirth, setPlaceOfBirth] = useState("");
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleHome = () => {
//     navigate("/dashboard");
//   };

//   const handleLogout = () => {
//     navigate("/");
//   };

//   const handleSubmit = async () => {
//     if (
//       !fullName ||
//       !email ||
//       !dateOfBirth ||
//       !placeOfBirth ||
//       !parentsDetails
//     ) {
//       alert("Please fill out all fields before submitting.");
//       return;
//     }

//     const payload = {
//       name: fullName,
//       email: email,
//       date_of_birth: dateOfBirth,
//       place_of_birth: placeOfBirth,
//       parents_name: parentsDetails,
//     };

//     try {
//       const response = await axios.post(
//         "http://localhost/onlinebackend/controllers/api/User/post/birth.php",
//         payload
//       );
//       console.log("Response:", response.data);
//       alert(response.data.message);
//       setIsSubmitted(true);
//     } catch (error) {
//       console.error("Error submitting application:", error);
//       alert("Error submitting application. Please try again.");
//     }
//   };

//   return (
//     <div className="page-container">
//       <AppBar position="static" className="appbar">
//         <Toolbar>
//           <Typography variant="h6" style={{ flexGrow: 1 }}>
//             Online Birth and Death Certificate System
//           </Typography>
//           <Button color="inherit" onClick={handleHome}>
//             Home
//           </Button>
//           <Button color="inherit" onClick={handleLogout}>
//             Logout
//           </Button>
//         </Toolbar>
//       </AppBar>

//       <div className="content-container">
//         {/* {isSubmitted ? (
//           <Certificate 
//             fullName={fullName} 
//             dateOfBirth={dateOfBirth} 
//             parentsDetails={parentsDetails} 
//             placeOfBirth={placeOfBirth} 
//             email={email} 
//           />
//         ) : ( */}
//         <Card className="card-container">
//           <CardContent>
//             <Typography variant="h5" align="center" gutterBottom>
//               Apply for Birth Certificate
//             </Typography>

//             <TextField
//               label="Full Name"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               required
//             />

//             <TextField
//               label="Email Id"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />

//             <TextField
//               label="Date of Birth"
//               type="date"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               value={dateOfBirth}
//               onChange={(e) => setDateOfBirth(e.target.value)}
//               InputLabelProps={{ shrink: true }}
//               required
//             />

//             <TextField
//               label="Place of Birth"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               value={placeOfBirth}
//               onChange={(e) => setPlaceOfBirth(e.target.value)}
//               required
//             />

//             <TextField
//               label="Father Name"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               value={parentsDetails}
//               onChange={(e) => setParentsDetails(e.target.value)}
//               required
//             />

//             <Button
//               variant="contained"
//               color="primary"
//               fullWidth
//               onClick={handleSubmit}
//               style={{ marginTop: "16px" }}
//             >
//               Submit Application
//             </Button>
//           </CardContent>
//         </Card>
//         {/* )} */}
//       </div>
//     </div>
//   );
// };

// export default BirthCertificatePage;

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, TextField, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../Styles/Birth.css";

const BirthCertificatePage = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [parentsDetails, setParentsDetails] = useState('');
  const [placeOfBirth, setPlaceOfBirth] = useState('');

  const handleHome = () => navigate('/dashboard');
  const handleLogout = () => navigate('/');

  const handleSubmit = async () => {
    if (!fullName || !email || !dateOfBirth || !placeOfBirth || !parentsDetails || !email) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    const payload = {
      name: fullName,
      date_of_birth: dateOfBirth,
      place_of_birth: placeOfBirth,
      parents_name: parentsDetails,
      email: email,
    };

    try {
      const response = await axios.post(
        'http://localhost/onlinebackend/controllers/api/User/post/birth.php',
        payload
      );
      console.log('Response:', response.data);
      alert('Application Submitted Successfully!');
      
      // ✅ Navigate to CertificatesStatus page after alert
      navigate('/CertificatesStatus');
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Error submitting application. Please try again.');
    }
  };

  return (
    <div className="page-container">
      <AppBar position="static" className="appbar">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Online Birth and Death Certificate System
          </Typography>
          <Button color="inherit" onClick={handleHome}>Home</Button>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>

      <div className="content-container " >
        <Card className="card-container">
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom>
              Apply for Birth Certificate
            </Typography>

            <TextField 
              label="Full Name" 
              variant="outlined" 
              fullWidth 
              margin="normal"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)} 
              required
            /> 

            <TextField 
              label="Email Id" 
              variant="outlined" 
              fullWidth 
              margin="normal"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
            />

            <TextField 
              label="Date of Birth" 
              type="date" 
              variant="outlined" 
              fullWidth 
              margin="normal"
              value={dateOfBirth} 
              onChange={(e) => setDateOfBirth(e.target.value)}
              InputLabelProps={{ shrink: true }} 
              required
            />

            <TextField 
              label="Place of Birth" 
              variant="outlined" 
              fullWidth 
              margin="normal"
              value={placeOfBirth} 
              onChange={(e) => setPlaceOfBirth(e.target.value)} 
              required
            />

            <TextField 
              label="Father Name" 
              variant="outlined" 
              fullWidth 
              margin="normal"
              value={parentsDetails} 
              onChange={(e) => setParentsDetails(e.target.value)} 
              required
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
      </div>
    </div>
  );
};

export default BirthCertificatePage;