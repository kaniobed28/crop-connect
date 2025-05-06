import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DeliveryService = () => {
  return (
    <>
      <Header />

      {/* Hero Section for Delivery Service Page */}
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
            Delivery Service
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, mb: 3 }}
          >
            Efficient and reliable delivery of produce from farmers to buyers.
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
            Request Delivery
          </Button>
        </Container>
      </Box>

      {/* How It Works Section */}
      <Container sx={{ py: { xs: 4, md: 8 } }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, textAlign: 'center', color: '#2e7d32' }}
        >
          How It Works
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              step: '1. List Your Produce',
              description: 'Farmers list their produce on the CropConnect Market page, specifying quantity and location.',
            },
            {
              step: '2. Buyer Places Order',
              description: 'Buyers browse available produce and place orders directly through the platform.',
            },
            {
              step: '3. Schedule Delivery',
              description: 'Once an order is confirmed, schedule a delivery with our partners, Yango and Bolt.',
            },
            {
              step: '4. Track & Receive',
              description: 'Track the delivery in real-time and receive your produce efficiently.',
            },
          ].map((step, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h5" sx={{ color: '#2e7d32', mb: 1 }}>
                    {step.step}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {step.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Delivery Partners Section */}
      <Box sx={{ backgroundColor: '#f5f5f5', py: { xs: 4, md: 8 } }}>
        <Container>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, textAlign: 'center', color: '#2e7d32' }}
          >
            Our Delivery Partners
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                name: 'Yango',
                description: 'Yango ensures fast and reliable delivery of produce to buyers across regions.',
                logo: '/assets/partner-yango.jpg', // Placeholder image
              },
              {
                name: 'Bolt',
                description: 'Bolt provides efficient logistics support to get your produce to market on time.',
                logo: '/assets/partner-bolt.jpg', // Placeholder image
              },
              {
                name: 'Kobo360',
                description: 'Kobo360 offers seamless logistics solutions in Nigeria, connecting farmers to buyers with real-time tracking.',
                logo: '/assets/partner-kobo360.jpg', // Placeholder image
              },
            ].map((partner, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box
                      component="img"
                      src={partner.logo}
                      alt={partner.name}
                      sx={{
                        width: '100px',
                        height: '100px',
                        mb: 2,
                        objectFit: 'contain',
                      }}
                    />
                    <Typography variant="h6" sx={{ color: '#2e7d32' }}>
                      {partner.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {partner.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact/Support Section */}
      <Container sx={{ py: { xs: 4, md: 6 }, textAlign: 'center' }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, color: '#2e7d32' }}
        >
          Need Delivery Support?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Contact our team for assistance with scheduling or tracking your delivery.
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Email: support@cropconnect.com | Phone: +233 (0)30 394 2319
        </Typography>
      </Container>

      <Footer />
    </>
  );
};

export default DeliveryService;