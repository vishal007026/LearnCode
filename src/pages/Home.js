import React from 'react';
import { motion } from 'framer-motion';
import {
  Container,
  Paper,
  Typography,
  Button,
  Box,
  Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <Box sx={{ 
          my: 8, 
          textAlign: 'center',
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Typography 
              variant="h1" 
              component="h1" 
              gutterBottom
              sx={{ 
                fontWeight: 'bold',
                fontSize: { xs: '2.5rem', md: '4rem' },
                mb: 4
              }}
            >
              Master Coding Skills
              <br />
              <span style={{ color: '#2196f3' }}>One Step at a Time</span>
            </Typography>
            <Typography 
              variant="h5" 
              color="textSecondary" 
              paragraph
              sx={{ mb: 4 }}
            >
              Join our interactive learning platform and transform your programming journey
              with hands-on practice and expert guidance.
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/practice')}
                sx={{ 
                  mr: 2,
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem'
                }}
              >
                Start Learning
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate('/course')}
                sx={{ 
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem'
                }}
              >
                View Courses
              </Button>
            </Box>
          </motion.div>
        </Box>

        {/* Features Section */}
        <Box sx={{ my: 8 }}>
          <Typography 
            variant="h3" 
            textAlign="center" 
            gutterBottom
            sx={{ mb: 6 }}
          >
            Why Choose Our Platform?
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                >
                  <Paper 
                    elevation={3} 
                    sx={{ 
                      p: 4, 
                      height: '100%',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-8px)'
                      }
                    }}
                  >
                    <Typography variant="h2" sx={{ mb: 2 }}>
                      {feature.icon}
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                      {feature.title}
                    </Typography>
                    <Typography color="textSecondary">
                      {feature.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Stats Section */}
        <Box sx={{ my: 8, py: 6, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
          <Grid container spacing={4} justifyContent="center">
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index} textAlign="center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 * index }}
                >
                  <Typography variant="h3" color="primary" gutterBottom>
                    {stat.value}
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    {stat.label}
                  </Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box sx={{ my: 8, textAlign: 'center' }}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 6,
              backgroundImage: 'linear-gradient(135deg, #2196f3 0%, #1976d2 100%)',
              color: 'white'
            }}
          >
            <Typography variant="h4" gutterBottom>
              Ready to Start Your Coding Journey?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Join thousands of students who are already learning to code with us
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/register')}
              sx={{ 
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                backgroundColor: 'white',
                color: '#1976d2',
                '&:hover': {
                  backgroundColor: '#f5f5f5'
                }
              }}
            >
              Get Started Now
            </Button>
          </Paper>
        </Box>
      </motion.div>
    </Container>
  );
}

const features = [
  {
    icon: '🎯',
    title: 'Interactive Learning',
    description: 'Learn through hands-on coding exercises and real-world projects. Our interactive platform provides immediate feedback to help you improve.'
  },
  {
    icon: '🚀',
    title: 'Structured Path',
    description: 'Follow our carefully designed curriculum that takes you from basics to advanced concepts with clear progression and achievable milestones.'
  },
  {
    icon: '🎓',
    title: 'Expert Support',
    description: 'Get help when you need it with our community of learners and experienced mentors who are ready to answer your questions.'
  }
];

const stats = [
  {
    value: '10K+',
    label: 'Active Students Learning'
  },
  {
    value: '500+',
    label: 'Coding Exercises'
  },
  {
    value: '50+',
    label: 'Course Modules'
  },
  {
    value: '95%',
    label: 'Success Rate'
  }
];

export default Home;