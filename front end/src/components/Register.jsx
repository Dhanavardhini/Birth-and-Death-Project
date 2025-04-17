import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../Styles/Reg.css";

function Register() {
  const [formData, setFormData] = useState({
    user_name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost/onlinebackend/controllers/api/User/post/user.php', formData);
      console.log('Response:', response.data); 
      if (response.data.success) {
        alert('User registered successfully!');
         
      } else {
        alert( response.data.message);
      }
      navigate('/user-login')
    } 
    catch (error) {
      console.error('Error during registration:', error);
      alert('Failed to register. Please try again.');
    }
  };

  return (
    <div className="admin-boxx">
      <div className="login-container">
        <h1 className="login-titles">New Register</h1>
        <form className="login-forms" onSubmit={handleSubmit}>
          <div className="form-group">
            
            <label htmlFor="username">Name</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="btn-div">
            <button type="submit" className="login-buttonf">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

