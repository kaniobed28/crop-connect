import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';

const MainContent = () => {
  return (
    <Container sx={{ py: { xs: 4, md: 8 } }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}
          >
            For Farmers
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Sell your produce directly to buyers, eliminate middlemen, and get fair prices for your hard work.
          </Typography>
          <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
            Learn More
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}
          >
            For Buyers
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Source fresh, quality produce directly from local farmers and support sustainable agriculture.
          </Typography>
          <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainContent;