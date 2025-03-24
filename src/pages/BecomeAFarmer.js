import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Alert,
  CircularProgress,
} from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BecomeAFarmer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
  });
  const [formStatus, setFormStatus] = useState(null); // null, 'loading', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('loading');
    setErrorMessage('');

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.location) {
      setFormStatus('error');
      setErrorMessage('Please fill in all fields.');
      return;
    }

    // Simulate API call (replace with actual API integration)
    setTimeout(() => {
      // For demo purposes, assume success
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', location: '' }); // Reset form
    }, 1000);
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
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
            Become a Farmer with CropConnect
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, mb: 3 }}
          >
            Subscribe to join our Farmer Program and gain access to inputs, markets, and resources.
          </Typography>
        </Container>
      </Box>

      {/* Subscription Form Section */}
      <Container sx={{ py: { xs: 4, md: 8 } }}>
        <Box sx={{ maxWidth: 600, mx: 'auto' }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, textAlign: 'center', color: '#2e7d32' }}
          >
            Subscribe Now
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ textAlign: 'center', mb: 4 }}
          >
            Fill in your details to register your interest. An agent will contact you to finalize your registration.
          </Typography>

          {formStatus === 'success' && (
            <Alert severity="success" sx={{ mb: 3 }}>
              Thank you for subscribing! We’ll contact you soon to complete your registration.
            </Alert>
          )}
          {formStatus === 'error' && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {errorMessage}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Farm Location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: '#2e7d32',
                    color: '#fff',
                    borderRadius: '20px',
                    px: 4,
                    py: 1,
                    '&:hover': { backgroundColor: '#1b5e20' },
                  }}
                  disabled={formStatus === 'loading'}
                  startIcon={formStatus === 'loading' ? <CircularProgress size={20} color="inherit" /> : null}
                >
                  {formStatus === 'loading' ? 'Submitting...' : 'Subscribe'}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
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
          Our team is here to help with your subscription process.
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Email: support@cropconnect.com | Phone: +233 (0)30 394 2319
        </Typography>
      </Container>

      <Footer />
    </>
  );
};

export default BecomeAFarmer;