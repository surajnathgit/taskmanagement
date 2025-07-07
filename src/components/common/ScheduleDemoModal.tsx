"use client";
import React, { useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Button,
  TextField,
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  MenuItem,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface ScheduleDemoModalProps {
  open: boolean;
  onClose: () => void;
}

const ScheduleDemoModal = ({ open, onClose }: ScheduleDemoModalProps) => {
  // const [snackbarOpen, setSnackbarOpen] = useState(false);
  // const [snackbarMessage, setSnackbarMessage] = useState("");
  // const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");
  const [loading, setLoading] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    phoneNumber: "",
    companyName: "",
    jobTitle: "",
    industryType: "",
    otherIndustry: "",
    numberOfEmployees: "",
    howDidYouHearAboutUs: "",
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "phoneNumber" && /[^0-9]/.test(value)) {
    return;
  }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, consent: e.target.checked }));
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      workEmail: "",
      phoneNumber: "",
      companyName: "",
      jobTitle: "",
      industryType: "",
      otherIndustry: "",
      numberOfEmployees: "",
      howDidYouHearAboutUs: "",
      consent: false,
    });
  };

  const handleCancel = () => {
    resetForm();
    onClose();
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();   
  setLoading(true);
  const startTime = Date.now();

  const payload = {
    OtherIndustry: formData.otherIndustry,
    companyName: formData.companyName,
    consent: formData.consent,
    fullName: formData.fullName,
    howDidYouHearAboutUs: formData.howDidYouHearAboutUs,
    industryType: formData.industryType,
    jobTitle: formData.jobTitle,
    numberOfEmployees: formData.numberOfEmployees,
    phoneNumber: formData.phoneNumber,
    workEmail: formData.workEmail,
  };

  console.log("Sending payload:", payload);

  try {
    const response = await axios.post(
      "https://api.recruitexe.com/v1/api/demo/createBookDemo",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Success:", response.data);

    const elapsed = Date.now() - startTime;
    const delay = 1300; 
    const remaining = delay - elapsed;

    setTimeout(() => {
      setLoading(false);
      setSuccessDialogOpen(true);

      setTimeout(() => {
        setSuccessDialogOpen(false);
        onClose();
        resetForm();
      }, 3000);
    }, remaining > 0 ? remaining : 0);
  } catch (error: any) {
    console.error("API Error:", error.response?.data || error.message);
  } 
};

  return (
    <>
<Dialog open={open} onClose={handleCancel} maxWidth="sm" fullWidth >
  <form onSubmit={handleSubmit}>
      <DialogTitle>
        <Typography variant="h6" fontWeight="bold" sx={{ color: "#4d36ff" }}>
          Schedule a Demo
        </Typography>
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Work Email"
              name="workEmail"
              type="email"
              value={formData.workEmail}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone Number"
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
              fullWidth
              required
              inputProps={{
                inputMode: "numeric",
                maxLength: 10,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Job Title"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Industry Type"
              name="industryType"
              select
              value={formData.industryType}
              onChange={handleSelectChange}
              fullWidth
              required
            >
              <MenuItem value="IT">IT</MenuItem>
              <MenuItem value="Finance">Finance</MenuItem>
              <MenuItem value="Healthcare">Healthcare</MenuItem>
              <MenuItem value="Education">Education</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
          </Grid>

          {formData.industryType === "Other" && (
            <Grid item xs={12}>
              <TextField
                label="Other Industry"
                name="otherIndustry"
                value={formData.otherIndustry}
                onChange={handleChange}
                fullWidth
                required
                placeholder="Please specify"
              />
            </Grid>
          )}

          <Grid item xs={12} sm={6}>
            <TextField
              label="Number of Employees"
              name="numberOfEmployees"
              select
              value={formData.numberOfEmployees}
              onChange={handleSelectChange}
              fullWidth
              required
            >
              <MenuItem value="1-10">1-10</MenuItem>
              <MenuItem value="11-50">11-50</MenuItem>
              <MenuItem value="51-200">51-200</MenuItem>
              <MenuItem value="201-500">201-500</MenuItem>
              <MenuItem value="501+">501+</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="How did you hear about us?"
              name="howDidYouHearAboutUs"
              select
              value={formData.howDidYouHearAboutUs}
              onChange={handleChange}
              fullWidth
              required
            >
            <MenuItem value="HR Conclave">HR Conclave</MenuItem>
            <MenuItem value="LinkedIn">LinkedIn</MenuItem>
            <MenuItem value="Google">Google</MenuItem>
            <MenuItem value="Referral">Referral</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.consent}
                  onChange={handleCheckboxChange}
                  required
              />}
              label="I agree to be contacted by TaskMaster for demo and updates"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={handleCancel} sx={{color: '#900BFF'}}>
          Cancel
        </Button>
        <Button 
          variant="contained" 
          type="submit" 
          color="primary"
          disabled={loading}
          >
          {loading ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CircularProgress size={18} sx={{ color: "#fff" }} />
              <Typography variant="body2" sx={{ color: "#fff" }}>
                Booking Demo...
              </Typography>
           </Box>
        ) : (
          "Book Demo"
        )}
        </Button>
      </DialogActions>
      </form>
    </Dialog>

      <Dialog 
      open={successDialogOpen} 
      onClose={() => setSuccessDialogOpen(false)}
      componentsProps={{
    backdrop: {
      sx: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(6px)',
      },
    },
  }}>
    <Box
      sx={{
        p: 4,
        textAlign: "center",
        minWidth: 300,
        maxWidth: 400,
      }}
    >
      <Box
        sx={{
          width: 60,
          height: 60,
          mx: "auto",
          mb: 2,
          backgroundColor: "#00C292",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" sx={{ color: "white" }}>✔</Typography>
      </Box>
      <Typography variant="h6" gutterBottom>
        Thank You!
      </Typography>
      <Typography variant="body1" color="textSecondary">
        Demo Booked Successfully!
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }} color="text.secondary">
        This popup will close automatically in 3 seconds
      </Typography>
    </Box>
  </Dialog>
</>
  );
};

export default ScheduleDemoModal;
