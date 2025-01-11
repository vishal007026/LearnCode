import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h6" color="primary" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We are dedicated to making programming education accessible and
                enjoyable for everyone. Join our community of learners today!
              </Typography>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography variant="h6" color="primary" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: contact@codelearning.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Phone: +1 (555) 123-4567
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Address: 123 Coding Street, Tech Valley, CA 94025
              </Typography>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Typography variant="h6" color="primary" gutterBottom>
                Follow Us
              </Typography>
              <Box sx={{ mt: 2 }}>
                <IconButton
                  component={Link}
                  href="https://github.com"
                  target="_blank"
                  color="inherit"
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  component={Link}
                  href="https://linkedin.com"
                  target="_blank"
                  color="inherit"
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  component={Link}
                  href="https://twitter.com"
                  target="_blank"
                  color="inherit"
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  component={Link}
                  href="mailto:contact@codelearning.com"
                  color="inherit"
                >
                  <EmailIcon />
                </IconButton>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
        
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/">
              Code Learning Platform
            </Link>{' '}
            {new Date().getFullYear()}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
