import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <>
      <Header />

      {/* Hero Section for Services Page */}
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
            CropConnect Services
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, mb: 3 }}
          >
            Join our platform as a farmer, buyer, supplier, or partner to grow your agricultural business.
          </Typography>
        </Container>
      </Box>

      {/* Farmer Services Section */}
      <Container sx={{ py: { xs: 4, md: 8 } }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, textAlign: 'center', color: '#2e7d32' }}
        >
          Services for Farmers
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: 'Market Linkages',
              description: 'Connect with buyers and off-takers to sell your produce at fair prices.',
              image: '/assets/market-linkages.png', // Placeholder image
            },
            {
              title: 'E-Extension Services',
              description: 'Receive agronomic advice and best practices through digital channels.',
              image: '/assets/e-extension.png', // Placeholder image
            },
            {
              title: 'Traceability',
              description: 'Track your inputs and produce from farm to market for transparency.',
              image: '/assets/traceability.png', // Placeholder image
            },
          ].map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box
                  component="img"
                  src={service.image}
                  alt={service.title}
                  sx={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover',
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom sx={{ color: '#2e7d32' }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2 }}>
                  <Button variant="outlined" color="primary" size="small">
                    Learn More
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Resources for Farmers Section */}
      <Box sx={{ backgroundColor: '#f5f5f5', py: { xs: 4, md: 8 } }}>
        <Container>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, textAlign: 'center', color: '#2e7d32' }}
          >
            Resources for Farmers
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: 'Crop Calendar',
                description: 'View planting and harvesting schedules for your crops.',
              },
              {
                title: 'Agricultural Statistics',
                description: 'Access data on rainfall, production, and market demand.',
              },
              {
                title: 'Educational Content',
                description: 'Learn modern farming techniques and best practices.',
              },
            ].map((resource, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom sx={{ color: '#2e7d32' }}>
                      {resource.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {resource.description}
                    </Typography>
                  </CardContent>
                  <Box sx={{ p: 2 }}>
                    <Button variant="outlined" color="primary" size="small">
                      Explore
                    </Button>
                  </Box>
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
          Need Assistance?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Contact our team for help with joining as a farmer, buyer, supplier, or partner.
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Email: support@cropconnect.com | Phone: +233 (0)30 394 2319
        </Typography>
      </Container>

      <Footer />
    </>
  );
};

export default Services;