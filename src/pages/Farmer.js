import React, { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
} from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Farmer = () => {
  // State for Supply Offer dialog
  const [supplyDialogOpen, setSupplyDialogOpen] = useState(false);
  const [selectedInstitution, setSelectedInstitution] = useState(null);
  const [supplyFormData, setSupplyFormData] = useState({
    farmerName: '',
    email: '',
    phone: '',
    supply: '',
    quantity: '',
    deliveryDate: '',
    notes: '',
  });

  // State for Registration dialog
  const [registerDialogOpen, setRegisterDialogOpen] = useState(false);
  const [registerFormData, setRegisterFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    farmLocation: '',
    primaryCrops: '',
    farmSize: '',
    additionalInfo: '',
  });



  // Handle closing the Supply Offer dialog
  const handleSupplyDialogClose = () => {
    setSupplyDialogOpen(false);
    setSelectedInstitution(null);
    setSupplyFormData({
      farmerName: '',
      email: '',
      phone: '',
      supply: '',
      quantity: '',
      deliveryDate: '',
      notes: '',
    });
  };

  // Handle Supply Offer form input changes
  const handleSupplyInputChange = (e) => {
    const { name, value } = e.target;
    setSupplyFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Supply Offer form submission
  const handleSupplySubmit = () => {
    console.log('Supply offer submitted:', { institution: selectedInstitution, formData: supplyFormData });
    handleSupplyDialogClose();
  };

  // Handle opening the Registration dialog
  const handleRegisterDialogOpen = () => {
    setRegisterFormData({
      fullName: '',
      email: '',
      phone: '',
      farmLocation: '',
      primaryCrops: '',
      farmSize: '',
      additionalInfo: '',
    });
    setRegisterDialogOpen(true);
  };

  // Handle closing the Registration dialog
  const handleRegisterDialogClose = () => {
    setRegisterDialogOpen(false);
    setRegisterFormData({
      fullName: '',
      email: '',
      phone: '',
      farmLocation: '',
      primaryCrops: '',
      farmSize: '',
      additionalInfo: '',
    });
  };

  // Handle Registration form input changes
  const handleRegisterInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Registration form submission
  const handleRegisterSubmit = () => {
    console.log('Registration submitted:', { formData: registerFormData });
    handleRegisterDialogClose();
  };

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
            onClick={handleRegisterDialogOpen}
          >
            Register Now
          </Button>
        </Container>
      </Box>

      {/* Market Opportunities Section */}
      <Container sx={{ py: { xs: 4, md: 8 } }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, textAlign: 'center', color: '#2e7d32' }}
        >
          Current Demands
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ textAlign: 'center', mb: 4 }}
        >
          Connect with schools and restaurants needing agricultural supplies. Choose an institution you can supply based on their needs and availability dates.
        </Typography>
        <Grid container spacing={4}>
          {/* Institution list removed */}
        </Grid>
      </Container>

      {/* Supply Offer Dialog */}
      <Dialog open={supplyDialogOpen} onClose={handleSupplyDialogClose} maxWidth="sm" fullWidth>
        <DialogTitle>Offer Supply to {selectedInstitution?.name}</DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Farmer's Name"
              name="farmerName"
              value={supplyFormData.farmerName}
              onChange={handleSupplyInputChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Contact Email"
              name="email"
              value={supplyFormData.email}
              onChange={handleSupplyInputChange}
              margin="normal"
              type="email"
              required
            />
            <TextField
              fullWidth
              label="Contact Phone Number"
              name="phone"
              value={supplyFormData.phone}
              onChange={handleSupplyInputChange}
              margin="normal"
              type="tel"
              required
            />
            <TextField
              fullWidth
              select
              label="Available Supply"
              name="supply"
              value={supplyFormData.supply}
              onChange={handleSupplyInputChange}
              margin="normal"
              required
            >
              {selectedInstitution?.supplies.split(', ').map((supply) => (
                <MenuItem key={supply} value={supply}>
                  {supply}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              fullWidth
              label="Quantity Offered (Tons)"
              name="quantity"
              value={supplyFormData.quantity}
              onChange={handleSupplyInputChange}
              margin="normal"
              type="number"
              required
            />
            <TextField
              fullWidth
              label="Expected Delivery Date"
              name="deliveryDate"
              value={supplyFormData.deliveryDate}
              onChange={handleSupplyInputChange}
              margin="normal"
              type="date"
              InputLabelProps={{ shrink: true }}
              required
            />
            <TextField
              fullWidth
              label="Additional Notes"
              name="notes"
              value={supplyFormData.notes}
              onChange={handleSupplyInputChange}
              margin="normal"
              multiline
              rows={3}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSupplyDialogClose} sx={{ color: '#2e7d32' }}>
            Cancel
          </Button>
          <Button
            onClick={handleSupplySubmit}
            variant="contained"
            sx={{ backgroundColor: '#2e7d32', '&:hover': { backgroundColor: '#1b5e20' } }}
          >
            Submit Offer
          </Button>
        </DialogActions>
      </Dialog>

      {/* Registration Dialog */}
      <Dialog open={registerDialogOpen} onClose={handleRegisterDialogClose} maxWidth="sm" fullWidth>
        <DialogTitle>Register with CropConnect</DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Full Name"
              name="fullName"
              value={registerFormData.fullName}
              onChange={handleRegisterInputChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              value={registerFormData.email}
              onChange={handleRegisterInputChange}
              margin="normal"
              type="email"
              required
            />
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              value={registerFormData.phone}
              onChange={handleRegisterInputChange}
              margin="normal"
              type="tel"
              required
            />
            <TextField
              fullWidth
              label="Farm Location"
              name="farmLocation"
              value={registerFormData.farmLocation}
              onChange={handleRegisterInputChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Primary Crops"
              name="primaryCrops"
              value={registerFormData.primaryCrops}
              onChange={handleRegisterInputChange}
              margin="normal"
              required
              helperText="e.g., Maize, Tomatoes"
            />
            <TextField
              fullWidth
              label="Farm Size (Hectares)"
              name="farmSize"
              value={registerFormData.farmSize}
              onChange={handleRegisterInputChange}
              margin="normal"
              type="number"
            />
            <TextField
              fullWidth
              label="Additional Information"
              name="additionalInfo"
              value={registerFormData.additionalInfo}
              onChange={handleRegisterInputChange}
              margin="normal"
              multiline
              rows={3}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRegisterDialogClose} sx={{ color: '#2e7d32' }}>
            Cancel
          </Button>
          <Button
            onClick={handleRegisterSubmit}
            variant="contained"
            sx={{ backgroundColor: '#2e7d32', '&:hover': { backgroundColor: '#1b5e20' } }}
          >
            Submit Registration
          </Button>
        </DialogActions>
      </Dialog>

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