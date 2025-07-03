"use client";
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  Typography,
} from "@mui/material";

interface ScheduleDemoModalProps {
  open: boolean;
  onClose: () => void;
}

const ScheduleDemoModal = ({ open, onClose }: ScheduleDemoModalProps) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Typography variant="h6" fontWeight="bold" sx={{color: '#4d36ff'}}>
          Schedule a Demo
        </Typography>
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Name" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Email" type="email" fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Company Name (optional)" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Phone Number" type="tel" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Date"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Message/Query" multiline rows={4} fullWidth />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        {/* <Button onClick={onClose} variant="outlined" color="inherit">
          Cancel
        </Button> */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            onClose();
          }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ScheduleDemoModal;
