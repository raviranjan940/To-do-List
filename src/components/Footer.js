import React from 'react';
import { Box, Typography, IconButton, Link } from '@mui/material';
import { GitHub, Language, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 2,
        borderTop: '1px solid #ccc',
        backgroundColor: '#f5f5f5'
      }}
    >
      <Typography variant="body1" sx={{ mb: 1 }}>
        Made with ❤️ by Ravi Ranjan
      </Typography>
      <Box>
        <IconButton component={Link} href="https://github.com/raviranjan940" target="_blank">
          <GitHub />
        </IconButton>
        <IconButton component={Link} href="https://www.linkedin.com/in/raviranjan940/" target="_blank">
          <LinkedIn />
        </IconButton>
        <IconButton component={Link} href="https://raviranjan-940.netlify.app/" target="_blank">
          <Language />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
