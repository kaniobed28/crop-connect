import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';

const ProduceCard = ({ produce, onRequest }) => {
  return (
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
          onClick={() => onRequest(produce)}
        >
          Request
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProduceCard;