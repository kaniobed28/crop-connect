import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />

      {/* Hero Section for Home Page */}
      <Box
  sx={{
    position: 'relative',
    backgroundImage: 'url(/assets/famer.jpg)', // Replace with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#e8f5e9',
    minHeight: '80vh', // Ensures the image covers the full screen height
    py: { xs: 4, md: 6 },
    textAlign: 'center',
  }}
>
  {/* Overlay to enhance text visibility */}
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay
    }}
    />
    
    <Container sx={{ position: 'relative', zIndex: 1 }}>
      <Typography
      variant="h3"
      gutterBottom
      sx={{
        fontSize: { xs: '3rem', md: '4rem' },
        fontWeight: 'bold',
        color: '#ffffff',
        textShadow: '3px 3px 6px rgba(0,0,0,0.7)',
      }}
      >
      Welcome to CropConnect
      </Typography>
      <Typography
      variant="h6"
      color="text.secondary"
      sx={{
        fontSize: { xs: '1.5rem', md: '2rem' },
        fontWeight: 'bold',
        mb: 3,
        color: '#ffffff',
        textShadow: '2px 2px 5px rgba(0,0,0,0.6)',
      }}
      >
      A digital platform connecting farmers and buyers to trade produce and access market opportunities.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
      <Button
        variant="contained"
        sx={{
        backgroundColor: '#2e7d32',
        color: '#fff',
        borderRadius: '20px',
        px: 4,
        py: 1.5,
        fontWeight: 'bold',
        fontSize: '1rem',
        '&:hover': { backgroundColor: '#1b5e20' },
        }}
        href="/market"
      >
        Trade Produce
      </Button>
      <Button
        variant="contained"
        sx={{
        backgroundColor: '#2e7d32',
        color: '#fff',
        borderRadius: '20px',
        px: 4,
        py: 1.5,
        fontWeight: 'bold',
        fontSize: '1rem',
        '&:hover': { backgroundColor: '#1b5e20' },
        }}
        href="/services"
      >
        Explore Services
      </Button>
      </Box>
    </Container>
    </Box>
      <Box sx={{ backgroundColor: '#f5f5f5', py: { xs: 4, md: 8 } }}>
        <Container>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, textAlign: 'center', color: '#2e7d32' }}
          >
            Our Goals
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: 'Ensure Food Availability',
                description: 'Connect farmers with buyers to ensure a steady supply of fresh produce.',
                icon: '/assets/icon-food-availability.png',
              },
              {
                title: 'Reduce Food Price Inflation',
                description: 'Facilitate fair pricing by enabling direct trade between farmers and buyers.',
                icon: '/assets/icon-price-inflation.png',
              },
              {
                title: 'Promote Import Substitution',
                description: 'Support local farmers to reduce reliance on imported agricultural products.',
                icon: '/assets/icon-import-substitution.png',
              },
              // {
              //   title: 'Promote Exports',
              //   description: 'Link farmers to global markets to increase agricultural exports.',
              //   icon: '/assets/icon-exports.png',
              // },
              {
                title: 'Job Creation',
                description: 'Empower rural communities by creating opportunities in the agricultural sector.',
                icon: '/assets/icon-job-creation.png',
              },
              {
                title: 'Ensure Food Security',
                description: 'Build a resilient agricultural ecosystem for sustainable food production.',
                icon: '/assets/icon-food-security.png',
              },
            ].map((goal, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ height: '100%', textAlign: 'center' }}>
  <CardContent>
    <Box
      component="img"
      src={goal.icon}
      alt={goal.title}
      sx={{
        width: '100%',           // Stretch to full width
        height: '120px',         // Increased height
        mb: 2,
        objectFit: 'contain',    // Ensures the image scales without distortion
      }}
    />
    <Typography variant="h6" sx={{ color: '#2e7d32', mb: 1 }}>
      {goal.title}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {goal.description}
    </Typography>
  </CardContent>
</Card>

              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services We Offer Section */}
      <Container sx={{ py: { xs: 4, md: 8 } }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, textAlign: 'center', color: '#2e7d32' }}
        >
          Services We Offer
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: 'Become a Farmer',
              description: 'We help farms grow by providing access to markets, inputs, and delivery services.',
              image: '/assets/becomeafarmer.png',
              action: 'Join as a Farmer',
              link: '/become-a-farmer', // Updated link to BecomeAFarmer page
            },
            {
              title: 'Become a Buyer',
              description: 'Access organic and quality products directly from farmers at competitive prices.',
              image: '/assets/buy.png',
              action: 'Join as a Buyer',
              link: '/market',
            },
            {
              title: 'Become a Supplier',
              description: 'Partner with Farmers to prodce and distribute agriculture produce  through our platform.',
              image: '/assets/supply.png',
              action: 'Join as a Supplier',
              link: '#',
            },
            {
              title: 'Become a Partner',
              description: 'Collaborate with CropConnect to support farmers and buyers in the agricultural industy.',
              image: '/assets/partner.png',
              action: 'Join as a Partner',
              link: '#',
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

      {/* Call-to-Action Section */}
      <Box sx={{ backgroundColor: '#f5f5f5', py: { xs: 4, md: 6 }, textAlign: 'center' }}>
        <Container>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, color: '#2e7d32' }}
          >
            Ready to Trade?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Join CropConnect to trade your produce or access market opportunities on other commodity trading platforms.
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
            href="/market"
          >
            Get Started
          </Button>
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
          Contact our team for help with trading, market access, or joining our platform.
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Email: support@cropconnect.com | Phone: +233 (0)30 394 2319
        </Typography>
      </Container>

      <Footer />
    </>
  );
};

export default Home;