import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { Container } from '@mui/material';

function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                mr: 2,
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Code Learning Platform
            </Typography>
          </motion.div>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: 'flex', gap: 2 }}>
            {currentUser ? (
              <>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Button
                    component={RouterLink}
                    to="/language-selection"
                    color="inherit"
                  >
                    Languages
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Button
                    component={RouterLink}
                    to="/practice"
                    color="inherit"
                  >
                    Practice
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Button color="inherit" onClick={handleLogout}>
                    Logout
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Typography variant="body1" component="span" sx={{ ml: 2 }}>
                    {currentUser.username}
                  </Typography>
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Button
                    component={RouterLink}
                    to="/login"
                    color="inherit"
                  >
                    Login
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Button
                    component={RouterLink}
                    to="/register"
                    color="inherit"
                  >
                    Register
                  </Button>
                </motion.div>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
