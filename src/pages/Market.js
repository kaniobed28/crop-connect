import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Chip,
} from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Market = () => {
  // State to manage dialog visibility and selected produce
  const [open, setOpen] = useState(false);
  const [selectedProduce, setSelectedProduce] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    commodity: 'Cowpea',
    otherCommodity: '',
    quantity: '',
    qualitySpecs: '',
    additionalInfo: '',
  });

  // Handle opening the dialog
  const handleOpen = (produce) => {
    setSelectedProduce(produce);
    setOpen(true);
  };

  // Handle closing the dialog
  const handleClose = () => {
    setOpen(false);
    setSelectedProduce(null);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      commodity: 'Cowpea',
      otherCommodity: '',
      quantity: '',
      qualitySpecs: '',
      additionalInfo: '',
    });
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log('Form submitted:', { produce: selectedProduce, formData });
    handleClose();
  };

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
              location: 'ADUM',
              image: '/assets/maize.png',
              grade: 'A',
              certified: true,
            },
            {
              name: 'Tomatoes',
              quantity: '200 Tons',
              price: 'GHS 1,800/Ton',
              location: 'Bantama',
              image: '/assets/tomatoes.png',
              grade: 'B',
              certified: true,
            },
            {
              name: 'Onions',
              quantity: '150 Tons',
              price: 'GHS 1,600/Ton',
              location: 'Deduako',
              image: '/assets/onions.png',
              grade: 'A',
              certified: true,
            },
            {
              name: 'Peppers',
              quantity: '100 Tons',
              price: 'GHS 2,000/Ton',
              location: 'Tafo',
              image: '/assets/peppers.png',
              grade: 'C',
              certified: true,
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
                  <Typography variant="body2" color="text.secondary">
                    Location: {produce.location}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Grade: {produce.grade}
                  </Typography>
                  {produce.certified && (
                    <Chip
                      label="Certified"
                      size="small"
                      sx={{
                        mt: 1,
                        backgroundColor: '#2e7d32',
                        color: '#fff',
                      }}
                    />
                  )}
                  <Box sx={{ mt: 2 }}>
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
                      onClick={() => handleOpen(produce)}
                    >
                      Request
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Request Form Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Request {selectedProduce?.name}</DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Company / Business Name"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              margin="normal"
              type="email"
              required
            />
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              margin="normal"
              type="tel"
              required
            />
            <TextField
              fullWidth
              select
              label="Commodity"
              name="commodity"
              value={formData.commodity}
              onChange={handleInputChange}
              margin="normal"
              required
            >
              <MenuItem value="Cowpea">Cowpea</MenuItem>
              <MenuItem value="Other">Other (please specify)</MenuItem>
            </TextField>
            {formData.commodity === 'Other' && (
              <TextField
                fullWidth
                label="Other Commodity"
                name="otherCommodity"
                value={formData.otherCommodity}
                onChange={handleInputChange}
                margin="normal"
              />
            )}
            <TextField
              fullWidth
              label="Quantity (Tons)"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              margin="normal"
              type="number"
              required
            />
            <TextField
              fullWidth
              label="Quality Specifications"
              name="qualitySpecs"
              value={formData.qualitySpecs}
              onChange={handleInputChange}
              margin="normal"
              multiline
              rows={3}
              required
            />
            <TextField
              fullWidth
              label="Additional Information"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              margin="normal"
              multiline
              rows={3}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: '#2e7d32' }}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{ backgroundColor: '#2e7d32', '&:hover': { backgroundColor: '#1b5e20' } }}
          >
            Submit Request
          </Button>
        </DialogActions>
      </Dialog>

      {/* Subscription Section */}
      <Box sx={{ backgroundColor: '#f5f5f5', py: { xs: 4, md: 8 } }}>
        <Container>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, textAlign: 'center', color: '#2e7d32' }}
          >
            Subscription Plans
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ textAlign: 'center', mb: 4 }}
          >
            Unlock premium features with our subscription plans to enhance your trading experience.
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                name: 'Basic',
                features: [
                  'Access to local market listings',
                  'Basic crop price updates (daily or weekly)',
                  'Limited buyer/seller connections',
                  'Chat support (limited hours)',
                ],
                link: '#',
              },
              {
                name: 'Premium',
                features: [
                  'Unlimited product listings',
                  'Priority support',
                  'Advanced market analytics',
                  'Enhanced buyer/seller connections',
                ],
                link: '#',
              },
              {
                name: 'Enterprise',
                features: [
                  'Custom solutions',
                  'Dedicated account manager',
                  'Tailored market insights',
                  'Personalized support from assigned advisors',
                ],
                link: '#',
              },
            ].map((plan, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ color: '#2e7d32' }}>
                      {plan.name}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      {plan.features.map((feature, idx) => (
                        <Typography
                          key={idx}
                          variant="body2"
                          color="text.secondary"
                          sx={{ mt: 0.5 }}
                        >
                          • {feature}
                        </Typography>
                      ))}
                    </Box>
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
                      href={plan.link}
                    >
                      Choose Plan
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