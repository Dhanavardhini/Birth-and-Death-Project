import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Typography,
  Button,
  TextField,
} from '@mui/material';

const AdminPage = () => {
  const [birthUsers, setBirthUsers] = useState([]);
  const [deathUsers, setDeathUsers] = useState([]);
  const [error, setError] = useState(null);
  const [editUserId, setEditUserId] = useState(null);
  const [editUserData, setEditUserData] = useState({});
  const navigate = useNavigate();

  const handleHome = () => navigate('/admin');
  const handleLogout = () => navigate('/');

  useEffect(() => {
    axios.post("http://localhost/onlinebackend/controllers/api/admin/get/birth.php")
      .then((response) => setBirthUsers(Array.isArray(response.data) ? response.data : []))
      .catch((error) => setError("Error fetching birth data: " + error.message));

    axios.post("http://localhost/onlinebackend/controllers/api/admin/get/death.php")
      .then((response) => setDeathUsers(Array.isArray(response.data) ? response.data : []))
      .catch((error) => setError("Error fetching death data: " + error.message));
  }, []);
  const handleStatusChange = (id, status, type) => {
    const url = type === 'birth'
      ? 'http://localhost/onlinebackend/controllers/api/admin/put/updateStatusBirth.php'
      : 'http://localhost/onlinebackend/controllers/api/admin/put/updateStatusDeath.php';

    axios.post(url, { id, status })
      .then(response => {
        if (response.data.message) {
          if (type === 'birth') {
            setBirthUsers(birthUsers.map(user => user.id === id ? { ...user, status } : user));
          } else {
            setDeathUsers(deathUsers.map(user => user.id === id ? { ...user, status } : user));
          }
        } else {
          setError('Error updating status.');
        }
      })
      .catch(error => setError('Error updating status: ' + error.message));
  };


  const handleDelete = (id, type) => {
    const url = type === 'birth'
      ? 'http://localhost/onlinebackend/controllers/api/admin/delete/birth.php'
      : 'http://localhost/onlinebackend/controllers/api/admin/delete/death.php';
    axios.post(url, { id })
      .then(response => {
        if (response.data.message) {
          type === 'birth'
            ? setBirthUsers(birthUsers.filter(user => user.id !== id))
            : setDeathUsers(deathUsers.filter(user => user.id !== id));
        } else {
          setError('Error deleting user.');
        }
      })
      .catch(error => setError('Error deleting user: ' + error.message));
  };

  const handleEditClick = (user) => {
    setEditUserId(user.id);
    setEditUserData(user);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = (type) => {
    const url = type === 'birth'
      ? 'http://localhost/onlinebackend/controllers/api/admin/put/birthupdate.php'
      : 'http://localhost/onlinebackend/controllers/api/admin/put/deathupdate.php';
    axios.post(url, editUserData)
      .then(response => {
        if (response.data.message) {
          if (type === 'birth') {
            setBirthUsers(birthUsers.map(user => (user.id === editUserData.id ? editUserData : user)));
          } else {
            setDeathUsers(deathUsers.map(user => (user.id === editUserData.id ? editUserData : user)));
          }
          setEditUserId(null);
        } else {
          setError('Error updating user.');
        }
      })
      .catch(error => setError('Error updating user: ' + error.message));
  };

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
        {[{ title: 'Application: Birth User Details', users: birthUsers, type: 'birth' }, { title: 'Application: Death User Details', users: deathUsers, type: 'death' }].map(({ title, users, type }) => (
          <div key={type}>
            <Typography variant="h5" gutterBottom>{title}</Typography>
            {error && <Typography color="error">{error}</Typography>}
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>{type === 'birth' ? 'Date of Birth' : 'Date of Death'}</TableCell>
                    <TableCell>{type === 'birth' ? 'Place of Birth' : 'Place of Death'}</TableCell>
                    <TableCell>{type === 'birth' ? 'Parents Name' : 'Cause of Death'}</TableCell>
                    <TableCell align="center">Actions</TableCell>
                    <TableCell align="center">Status</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {users.map(user => (
                    <TableRow key={user.id}>
                      {editUserId === user.id ? (
                        <>
                          <TableCell><TextField name="name" value={editUserData.name} onChange={handleEditChange} /></TableCell>
                          <TableCell><TextField name="email" value={editUserData.email} onChange={handleEditChange} /></TableCell>
                          <TableCell><TextField name={type === 'birth' ? 'date_of_birth' : 'date_of_death'} value={editUserData[type === 'birth' ? 'date_of_birth' : 'date_of_death']} onChange={handleEditChange} /></TableCell>
                          <TableCell><TextField name={type === 'birth' ? 'place_of_birth' : 'place_of_death'} value={editUserData[type === 'birth' ? 'place_of_birth' : 'place_of_death']} onChange={handleEditChange} /></TableCell>
                          <TableCell><TextField name={type === 'birth' ? 'parents_name' : 'cause_of_death'} value={editUserData[type === 'birth' ? 'parents_name' : 'cause_of_death']} onChange={handleEditChange} /></TableCell>
                          <TableCell><Button variant="contained" color="primary" onClick={() => handleEditSubmit(type)}>Save</Button><Button variant="contained" color="secondary" onClick={() => setEditUserId(null)} style={{ marginLeft: '10px' }}>Cancel</Button></TableCell>
                          <TableCell align="center">--</TableCell>
                        </>
                      ) : (
                        <>
                          <TableCell>{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{type === 'birth' ? user.date_of_birth : user.date_of_death}</TableCell>
                          <TableCell>{type === 'birth' ? user.place_of_birth : user.place_of_death}</TableCell>
                          <TableCell>{type === 'birth' ? user.parents_name : user.cause_of_death}</TableCell>
                          <TableCell align="center"><Button variant="contained" color="primary" onClick={() => handleEditClick(user)}>Edit</Button><Button variant="contained" color="secondary" onClick={() => handleDelete(user.id, type)} style={{ marginLeft: '10px' }}>Delete</Button></TableCell>
                          <TableCell align="center">{user.status === 'pending' ? (<><Button    onClick={() => handleStatusChange(user.id, 'approved', type)} variant="contained" style={{ backgroundColor: 'green', color: 'white' }}>Approve</Button><Button onClick={() => handleStatusChange(user.id, 'canceled', type)} variant="contained" style={{ backgroundColor: 'red', color: 'white', marginLeft: '10px' }}>Reject</Button></>) : user.status}</TableCell>
                        </>
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        ))}
      </Container>
    </>
  );
};

export default AdminPage;
