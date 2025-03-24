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

      {/* Services Section */}
      <Container sx={{ py: { xs: 4, md: 8 } }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, textAlign: 'center', color: '#2e7d32' }}
        >
          Get Involved
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: 'Become a Farmer',
              description: 'We help farms grow by providing access to markets, inputs, and delivery services.',
              image: '/assets/service-farmer.jpg', // Placeholder image
              action: 'Join as a Farmer',
              link: '/farmer', // Links to the Farmer page
            },
            {
              title: 'Become a Buyer',
              description: 'Access organic and quality products directly from farmers at competitive prices.',
              image: '/assets/service-buyer.jpg', // Placeholder image
              action: 'Join as a Buyer',
              link: '/market', // Links to the Market page
            },
            {
              title: 'Become a Supplier',
              description: 'Supply inputs to farmers and access a ready market through our platform.',
              image: '/assets/service-supplier.jpg', // Placeholder image
              action: 'Join as a Supplier',
              link: '#', // Placeholder link (can link to a supplier registration page)
            },
            {
              title: 'Become a Partner',
              description: 'Collaborate with CropConnect to support farmers and buyers in the agricultural ecosystem.',
              image: '/assets/service-partner.jpg', // Placeholder image
              action: 'Join as a Partner',
              link: '#', // Placeholder link (can link to a partner registration page)
            },
          ].map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%' }}>
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
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ color: '#2e7d32', mb: 1 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {service.description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#2e7d32',
                      color: '#fff',
                      borderRadius: '20px',
                      px: 2,
                      py: 0.5,
                      '&:hover': { backgroundColor: '#1b5e20' },
                    }}
                    href={service.link}
                  >
                    {service.action}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

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