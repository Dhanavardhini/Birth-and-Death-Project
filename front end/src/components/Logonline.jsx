import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../Styles/LoginPage.css"

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    setLoading(true);
    setError('');
  
    try {
      const response = await axios.post('http://localhost/onlinebackend/controllers/api/User/Get/user.php', {
        email: email,
        password: password,
      }, {
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.data.success === "Login successful") {
        navigate('/dashboard');
      } else {
        setError(response.data.message || 'Invalid login credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid password or Email.');
    } finally {
      setLoading(false);
    }
  };
  

  const handleRegister = () => {
    navigate('/reg');
  };

  return (
    <div className="admin-box">
      <div className="login-container">
        <h1 className="login-title">User Login</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="btn-div">
            <button type="submit" className="login-buttons" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>
          {error && <div className="error-message">{error}</div>}
        </form>
        <div className="register-link">
          <p style={{color:"black"}}>New user? <span onClick={handleRegister} className="register-text" style={{color:"black",cursor:"pointer"}}>Register here</span></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
