import React, { useState } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MarketHero from '../components/MarketHero';
import ProduceCard from '../components/ProduceCard';
import RequestFormDialog from '../components/RequestFormDialog';
import MarketOpportunities from '../components/MarketOpportunities';

const Market = () => {
  // State to manage dialog visibility and selected produce
  const [open, setOpen] = useState(false);
  const [selectedProduce, setSelectedProduce] = useState(null);
  const [formData, setFormData] = useState({
    quantity: '',
    contactName: '',
    contactEmail: '',
  });

  // Produce data
  const produceItems = [
    {
      name: 'Maize',
      quantity: '500 Tons',
      price: 'GHS 1,200/Ton',
      location: 'ADUM',
      image: '/assets/maize.png',
    },
    {
      name: 'Tomatoes',
      quantity: '200 Tons',
      price: 'GHS 1,800/Ton',
      location: 'Bantama',
      image: '/assets/tomatoes.png',
    },
    {
      name: 'Onions',
      quantity: '150 Tons',
      price: 'GHS 1,600/Ton',
      location: 'Deduako',
      image: '/assets/onions.png',
    },
    {
      name: 'Peppers',
      quantity: '100 Tons',
      price: 'GHS 2,000/Ton',
      location: 'Tafo',
      image: '/assets/peppers.png',
    },
  ];

  // Handle opening the dialog
  const handleOpen = (produce) => {
    setSelectedProduce(produce);
    setOpen(true);
  };

  // Handle closing the dialog
  const handleClose = () => {
    setOpen(false);
    setSelectedProduce(null);
    setFormData({ quantity: '', contactName: '', contactEmail: '' });
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
      <MarketHero />
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
          {produceItems.map((produce, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ProduceCard produce={produce} onRequest={handleOpen} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <RequestFormDialog
        open={open}
        selectedProduce={selectedProduce}
        formData={formData}
        onClose={handleClose}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
      <MarketOpportunities />
      <Footer />
    </>
  );
};

export default Market;
