import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
} from '@mui/material';

const RequestFormDialog = ({ open, selectedProduce, formData, onClose, onInputChange, onSubmit }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Request {selectedProduce?.name}</DialogTitle>
      <DialogContent>
        <Box sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Quantity Requested (Tons)"
            name="quantity"
            value={formData.quantity}
            onChange={onInputChange}
            margin="normal"
            type="number"
          />
          <TextField
            fullWidth
            label="Contact Name"
            name="contactName"
            value={formData.contactName}
            onChange={onInputChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Contact Email"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={onInputChange}
            margin="normal"
            type="email"
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} sx={{ color: '#2e7d32' }}>
          Cancel
        </Button>
        <Button
          onClick={onSubmit}
          variant="contained"
          sx={{ backgroundColor: '#2e7d32', '&:hover': { backgroundColor: '#1b5e20' } }}
        >
          Submit Request
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RequestFormDialog;