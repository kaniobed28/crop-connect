import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'grey.200', py: 4, textAlign: 'center' }}>
      <Typography variant="body2" color="text.secondary">
        © 2025 FarmLink. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;