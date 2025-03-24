import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Market = () => {
  return (
    <>
      <Header />

      {/* Hero Section for Market Page */}
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

      {/* Available Produce Section */}
      <Container sx={{ py: { xs: 4, md: 8 } }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, textAlign: 'center', color: '#2e7d32' }}
        >
          Available Produce
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ textAlign: 'center', mb: 4 }}
        >
          Browse maize and vegetables available in our designated warehouses, ready for purchase.
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              name: 'Maize',
              quantity: '500 Tons',
              price: 'GHS 1,200/Ton',
              location: 'Ashanti Region',
              image: '/assets/maize.png',
            },
            {
              name: 'Tomatoes',
              quantity: '200 Tons',
              price: 'GHS 1,800/Ton',
              location: 'Greater Accra Region',
              image: '/assets/tomatoes.png',
            },
            {
              name: 'Onions',
              quantity: '150 Tons',
              price: 'GHS 1,600/Ton',
              location: 'Northern Region',
              image: '/assets/onions.png',
            },
            {
              name: 'Peppers',
              quantity: '100 Tons',
              price: 'GHS 2,000/Ton',
              location: 'Volta Region',
              image: '/assets/peppers.png',
            },
          ].map((produce, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%' }}>
                <Box
                  component="img"
                  src={produce.image}
                  alt={produce.name}
                  sx={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover',
                  }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#2e7d32' }}>
                    {produce.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Quantity: {produce.quantity}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: {produce.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Location: {produce.location}
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
                  >
                    Buy Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Market Opportunities Section */}
      <Box sx={{ backgroundColor: '#f5f5f5', py: { xs: 4, md: 8 } }}>
        <Container>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, textAlign: 'center', color: '#2e7d32' }}
          >
            Market Opportunities
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ textAlign: 'center', mb: 4 }}
          >
            Connect with external commodity trading platforms to expand your market reach.
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                name: 'Global AgriTrade',
                description: 'A leading platform for international agricultural trade.',
                link: '#',
              },
              {
                name: 'FarmLink Market',
                description: 'Connecting farmers with regional buyers for bulk purchases.',
                link: '#',
              },
              {
                name: 'AgriExchange',
                description: 'A marketplace for trading agricultural commodities globally.',
                link: '#',
              },
            ].map((platform, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ color: '#2e7d32' }}>
                      {platform.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {platform.description}
                    </Typography>
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: '#2e7d32',
                        color: '#2e7d32',
                        borderRadius: '20px',
                        px: 2,
                        py: 0.5,
                        '&:hover': { backgroundColor: '#e8f5e9' },
                      }}
                      href={platform.link}
                    >
                      Visit Platform
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default Market;