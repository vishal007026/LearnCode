import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import LanguageSelection from './pages/LanguageSelection';
import Course from './pages/Course';
import Practice from './pages/Practice';
import Footer from './components/Footer';
import { AuthProvider, useAuth } from './context/AuthContext';
import './styles.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#61dafb',
    },
    secondary: {
      main: '#b3b3b3',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
});

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return children;
};

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={darkTheme}>
        <Router>
          <div className="app">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                  path="/language-selection"
                  element={
                    <ProtectedRoute>
                      <LanguageSelection />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/course/:languageId"
                  element={
                    <ProtectedRoute>
                      <Course />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/practice"
                  element={
                    <ProtectedRoute>
                      <Practice />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
