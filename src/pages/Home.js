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
            Welcome to CropConnect
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, mb: 3 }}
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
                px: 3,
                py: 1,
                '&:hover': { backgroundColor: '#1b5e20' },
              }}
              href="/market"
            >
              Trade Produce
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: '#2e7d32',
                color: '#2e7d32',
                borderRadius: '20px',
                px: 3,
                py: 1,
                '&:hover': { backgroundColor: '#e8f5e9' },
              }}
              href="/services"
            >
              Explore Services
            </Button>
          </Box>
        </Container>
      </Box>

      {/* About Our Startup Section */}
      <Container sx={{ py: { xs: 4, md: 8 } }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, textAlign: 'center', color: '#2e7d32' }}
        >
          About Our Startup
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto', mb: 4 }}
        >
          CropConnect is a startup dedicated to transforming agriculture by bridging the gap between farmers and buyers. Our mission is to empower farmers with direct access to markets, ensure fair prices for their produce, and create a transparent and efficient agricultural ecosystem. Through our platform, we support sustainable farming practices, enhance food security, and foster economic growth in rural communities.
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="outlined"
            sx={{
              borderColor: '#2e7d32',
              color: '#2e7d32',
              borderRadius: '20px',
              px: 3,
              py: 1,
              '&:hover': { backgroundColor: '#e8f5e9' },
            }}
            href="/about"
          >
            Learn More About Us
          </Button>
        </Box>
      </Container>

      {/* Objectives Section (Emulating GhAAP Goals) */}
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
              {
                title: 'Promote Exports',
                description: 'Link farmers to global markets to increase agricultural exports.',
                icon: '/assets/icon-exports.png',
              },
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
                        width: '50px',
                        height: '50px',
                        mb: 2,
                        objectFit: 'contain',
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
              image: '/assets/service-buyer.jpg',
              action: 'Join as a Buyer',
              link: '/market',
            },
            {
              title: 'Become a Supplier',
              description: 'Supply inputs to farmers and access a ready market through our platform.',
              image: '/assets/service-supplier.jpg',
              action: 'Join as a Supplier',
              link: '#',
            },
            {
              title: 'Become a Partner',
              description: 'Collaborate with CropConnect to support farmers and buyers in the agricultural ecosystem.',
              image: '/assets/service-partner.jpg',
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