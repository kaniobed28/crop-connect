import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

// Custom styled components
const HeroBox = styled(Box)({
  backgroundImage: `url(/assets/famer.jpg)`, // Path relative to /public
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '60vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  textAlign: 'center',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay for readability
  },
});

const HeroContent = styled(Box)({
  position: 'relative',
  zIndex: 1,
});

const Hero = () => {
  return (
    <HeroBox>
      <HeroContent>
        <Typography variant="h2" gutterBottom>
          Connecting Farmers & Buyers
        </Typography>
        <Typography variant="h5" gutterBottom>
          Fresh produce, direct from the farm to your table.
        </Typography>
        <Button variant="contained" color="secondary" size="large" sx={{ mt: 2 }}>
          Get Started
        </Button>
      </HeroContent>
    </HeroBox>
  );
};

export default Hero;