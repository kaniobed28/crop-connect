import React from 'react';
import { Container, Typography, Button, Box, Grid, Card, CardContent, Divider } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Farmer = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section for Farmer Page */}
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
            Empowering Farmers with CropConnect
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, mb: 3 }}
          >
            Join our Farmer Program to access inputs, markets, and resources for sustainable farming.
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
            Register Now
          </Button>
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
              title: 'Access to Inputs',
              description: 'Get quality seeds, fertilizers, and pesticides through our trusted suppliers.',
            },
            {
              title: 'Mechanization Services',
              description: 'Request tractors and equipment for efficient farming operations.',
            },
            {
              title: 'Market Linkages',
              description: 'Connect with buyers and off-takers to sell your produce at fair prices.',
            },
            {
              title: 'E-Extension Services',
              description: 'Receive agronomic advice and best practices through digital channels.',
            },
            {
              title: 'Traceability',
              description: 'Track your inputs and produce from farm to market for transparency.',
            },
            {
              title: 'Insurance Support',
              description: 'Protect your farm with affordable agricultural insurance plans.',
            },
          ].map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
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

      {/* Resources Section */}
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
          Need Support?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Contact our team for assistance with registration, services, or resources.
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Email: support@cropconnect.com | Phone: +233 (0)30 394 2319
        </Typography>
      </Container>

      <Footer />
    </>
  );
};

export default Farmer;