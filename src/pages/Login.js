import React, { useState } from 'react';
import { Container, Paper, TextField, Button, Typography, Box, Alert, Link } from '@mui/material';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Basic validation
      if (!formData.email || !formData.password) {
        setError('All fields are required');
        return;
      }

      // Check user credentials
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.email === formData.email && u.password === formData.password);

      if (!user) {
        setError('Invalid email or password');
        return;
      }

      // Login using AuthContext
      await login(user);

      // Get last visited course from localStorage
      const lastCourse = localStorage.getItem(`lastCourse_${user.email}`);
      
      // Redirect to last visited course or language selection
      if (lastCourse) {
        navigate(`/course/${lastCourse}`);
      } else {
        navigate('/language-selection');
      }
    } catch (err) {
      setError('An error occurred during login');
      console.error('Login error:', err);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Login
          </Typography>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              margin="normal"
              required
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
            >
              Login
            </Button>
            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Link component={RouterLink} to="/register">
                Don't have an account? Register here
              </Link>
            </Box>
          </form>
        </Paper>
      </Box>
    </Container>
  );
}

export default Login;
