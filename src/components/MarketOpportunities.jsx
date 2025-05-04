import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';

const MarketOpportunities = () => {
  const platforms = [
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
  ];

  return (
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
          {platforms.map((platform, index) => (
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
  );
};

export default MarketOpportunities;