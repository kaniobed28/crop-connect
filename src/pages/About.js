import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Header />

      {/* Hero Section for About Page */}
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
            About CropConnect
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, mb: 3 }}
          >
            Bridging the gap between farmers and buyers for a sustainable future.
          </Typography>
        </Container>
      </Box>

      {/* Mission Section */}
      <Container sx={{ py: { xs: 4, md: 8 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, color: '#2e7d32' }}
            >
              Our Mission
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              At CropConnect, we aim to empower farmers by providing direct access to buyers and ensuring fair prices for their produce. We strive to create a transparent and efficient agricultural ecosystem that supports sustainable farming and food security.
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
              Learn More
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/assets/cropconnect.jpg" // Placeholder image
              alt="Farmer working in field"
              sx={{
                width: '100%',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Impact Section */}
      <Box sx={{ backgroundColor: '#f5f5f5', py: { xs: 4, md: 8 } }}>
        <Container>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, textAlign: 'center', color: '#2e7d32' }}
          >
            Our Impact
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: 'Farmers Supported',
                value: '750+',
                description: 'We’ve empowered hundreds of farmers with access to markets and resources.',
              },
              {
                title: 'Produce Sold',
                value: '1,200+ Tons',
                description: 'Helped farmers sell their produce directly to buyers efficiently.',
              },
              {
                title: 'Communities Impacted',
                value: '30+',
                description: 'Supported rural communities through sustainable agriculture.',
              },
            ].map((impact, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Card sx={{ height: '100%', textAlign: 'center' }}>
                  <CardContent>
                    <Typography variant="h5" sx={{ color: '#2e7d32', mb: 1 }}>
                      {impact.value}
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ color: '#2e7d32' }}>
                      {impact.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {impact.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Partners Section */}
      <Container sx={{ py: { xs: 4, md: 8 } }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, textAlign: 'center', color: '#2e7d32' }}
        >
          Our Partners
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              name: 'Ministry of Food and Agriculture',
              description: 'The Ministry of Food and Agriculture (MoFA) partners with CropConnect to support farmers with policy guidance, resources, and access to agricultural programs, ensuring sustainable growth and food security.',
              logo: '/assets/mofa.png', // Placeholder image
            },
            {
              name: 'Yango & Bolt',
              description: 'Yango and Bolt provide delivery services to ensure efficient transportation of produce from farmers to buyers, enhancing our supply chain.',
              logo: '/assets/yangobolt.png', // Placeholder image
            },
            {
              name: 'MasterCard',
              description: 'MasterCard supports CropConnect by enabling secure and seamless payment solutions for farmers and buyers on our platform.',
              logo: '/assets/mastercard.png', // Placeholder image
            },
            {
              name: 'KIC Innovation',
              description: 'KIC Innovation collaborates with CropConnect to drive agricultural innovation, providing farmers with access to modern farming techniques and technologies.',
              logo: '/assets/kic.png', // Placeholder image
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

      {/* Team Section */}
      <Container sx={{ py: { xs: 4, md: 8 } }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, textAlign: 'center', color: '#2e7d32' }}
        >
          Meet Our Team
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              name: 'Esther Ohene-waa Atuobi',
              role: 'Co-founder',
              description: 'Passionate about agriculture and technology, Esther leads CropConnect with a vision for sustainable farming.',
            },
            {
              name: 'Juan Vázquez',
              role: 'Founder',
              description: 'Juan drives the development of our platform to make it user-friendly for farmers and buyers.',
            },
            {
              name: 'Maryna Aleksiieva',
              role: 'Market Strategy',
              description: 'Maryna ensures smooth operations and farmer support across all regions.',
            },
          ].map((member, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box
                    component="img"
                    src={`/assets/team-member-${index + 1}.jpg`} // Placeholder image
                    alt={member.name}
                    sx={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      mb: 2,
                      objectFit: 'cover',
                    }}
                  />
                  <Typography variant="h6" sx={{ color: '#2e7d32' }}>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>
                    {member.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default About;