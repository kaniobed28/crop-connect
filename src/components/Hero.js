import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

const HeroBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(/assets/famer.jpg)`,
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  [theme.breakpoints.down('sm')]: {
    height: '50vh', // Shorter on mobile
  },
}));

const HeroContent = styled(Box)({
  position: 'relative',
  zIndex: 1,
  px: 2, // Padding for small screens
});

const Hero = () => {
  return (
    <HeroBox>
      <HeroContent>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } }}
        >
          Connecting Farmers & Buyers
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' } }}
        >
          Fresh produce, direct from the farm to your table.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mt: 2, fontSize: { xs: '0.9rem', md: '1rem' } }}
        >
          Get Started
        </Button>
      </HeroContent>
    </HeroBox>
  );
};

export default Hero;