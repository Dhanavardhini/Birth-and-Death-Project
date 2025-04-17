// import React, { useState } from 'react';
// import { Button, TextField, Card, CardContent, Typography, Grid } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import adminlogin from '../assets/adminlogin.jpg'

// const AdminLoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     if (!username || !password) {
//       alert('Please enter both username and password.');
//       return;
//     }

//     // Static login credentials
//     if (username === 'admin@gmail.com' && password === 'admin123') {
//       navigate('/admin');
//     } else {
//       setError('Invalid username or password.');
//     }
//   };

//   return (
//     <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh',backgroundImage:{adminlogin}  }}>
//       <Grid item xs={12} sm={6} md={4}>
//         <Card>
//           <CardContent>
//             <Typography variant="h4" align="center" gutterBottom>
//               Admin Login
//             </Typography>
//             {error && <Typography color="error" align="center">{error}</Typography>}
//             <TextField
//               label="Username"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <TextField
//               label="Password"
//               type="password"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <Button
//               variant="contained"
//               color="primary"
//               fullWidth
//               onClick={handleLogin}
//             >
//               Login
//             </Button>
//           </CardContent>
//         </Card>
//       </Grid>
//     </Grid>
//   );
// };

// export default AdminLoginPage;


import React, { useState } from 'react';
import { Button, TextField, Card, CardContent, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import adminlogin from '../assets/adminlogin.jpg';

const AdminLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }

    // Static login credentials
    if (username === 'admin@gmail.com' && password === 'admin123') {
      navigate('/admin');
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <Grid 
      container 
      justifyContent="center" 
      alignItems="center" 
      style={{ 
        minHeight: '100vh', 
        backgroundImage: `url(${adminlogin})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Grid item xs={12} sm={6} md={4}>
        <Card style={{ backgroundColor: '#F2EFE7' }}> {/* ✅ Background color applied to Card */}
          <CardContent>
            <Typography variant="h4" align="center" gutterBottom>
              Admin Login
            </Typography>
            {error && <Typography color="error" align="center">{error}</Typography>}
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
            >
              Login
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AdminLoginPage;
