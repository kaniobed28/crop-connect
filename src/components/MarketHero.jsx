import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

const MarketHero = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#e8f5e9',
        py: { xs: 4, md: 6 },
        textAlign: 'center',
      }}
    >
      <Container>
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontSize: { xs: '2rem', md: '3rem' }, color: '#2e7d32' }}
        >
          CropConnect Market
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, mb: 3 }}
        >
          A platform to trade your produce and connect with buyers seamlessly.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#2e7d32',
            color: '#fff',
            borderRadius: '20px',
            px: 3,
            py: 1,
            '&:hover': { backgroundColor: '#1b5e20' },
          }}
        >
          List Your Produce
        </Button>
      </Container>
    </Box>
  );
};

export default MarketHero;