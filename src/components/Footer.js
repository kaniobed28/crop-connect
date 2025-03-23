import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'grey.200', py: { xs: 2, md: 4 }, textAlign: 'center' }}>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ fontSize: { xs: '0.8rem', md: '1rem' } }}
      >
        © 2025 CropConnect. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;