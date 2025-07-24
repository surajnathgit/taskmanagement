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
import CloseIcon from '@mui/icons-material/Close';

const FieldStyles = {
  '& .MuiOutlinedInput-root': {
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.07)', 
    color: '#fff',
    backdropFilter: 'blur(2px)',
    transition: 'all 0.2s ease-in-out',

    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    '&:hover fieldset': {
      borderColor: '#a08bff',
    },
    '&:hover': {
      boxShadow: '0 0 6px rgba(160, 139, 255, 0.2)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#c2b8ff',
    },
    '&.Mui-focused': {
      boxShadow: '0 0 10px rgba(160, 139, 255, 0.25)',
    },
    '& input:-webkit-autofill': {
      WebkitBoxShadow: 'rgba(255, 255, 255, 0.07)',
      WebkitTextFillColor: '#fff',
      transition: 'background-color 5000s ease-in-out 0s',
    },
    // '& input': {
    //   color: '#fff',
    // },
    // '& svg': {
    //   color: '#fff',
    // },
  },

  '& .MuiInputLabel-root': {
    color: 'rgba(255,255,255,0.6)',
  },
  '& label.Mui-focused': {
    color: '#c2b8ff',
  },
  '& .MuiSelect-icon': {
    color: '#fff',
  },
};

interface ScheduleDemoModalProps {
  open: boolean;
  onClose: () => void;
}

const ScheduleDemoModal = ({ open, onClose }: ScheduleDemoModalProps) => {
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
<Dialog open={open} onClose={handleCancel} maxWidth="sm" fullWidth 
PaperProps={{
    sx: {
       width: "750px", 
      maxWidth: "90vw",
      borderRadius: 5,
      boxShadow: 6,
      background: 'linear-gradient(to right top, #1b1466, #291b7a, #36228e, #432aa2, #5032b6)',
      color: '#fff'
    },
  }}
  componentsProps={{
    backdrop: {
      sx: {
        backgroundColor: 'rgba(0, 0, 0, 0.69)',
        backdropFilter: 'blur(10px)',
      },
    },
  }} >
  <form onSubmit={handleSubmit}>
      <DialogTitle sx={{pt:3}} >
      <Box display="flex" alignItems="center">
    <Box sx={{ flex: 1 }} />

    {/* Centered Title */}
    <Typography
      variant="h4"
      fontWeight="bold"
      sx={{
        fontSize: {xs: '1.25rem' ,sm: '1.75rem', md: '1.75rem' },
        color: 'white',
        textAlign: 'center',
      }}
    >
      Schedule a Demo
    </Typography>

    {/* Close Icon */}
    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
      <Button
        onClick={handleCancel}
        sx={{
          minWidth: 'auto',
          p: 1,
          borderRadius: 2,
          background: 'transparent',
          '&:hover': {
            backgroundColor: '#5643e6',
          },
        }}
      >
        <CloseIcon sx={{ color: 'white' }} />
      </Button>
    </Box>
  </Box>

  {/* Subheading */}
  <Typography
    variant="body1"
    sx={{ color: 'white', textAlign: 'center', mt: 1 }}
  >
    Let's schedule a personalized demo for your team
  </Typography>      
  </DialogTitle>
      <DialogContent sx={{mt: 1}} dividers>
        <Grid container spacing={3} sx={{pt:1}} >
          <Grid item xs={12} sm={6} >
            <TextField
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              fullWidth
              required
              variant="outlined"
              sx={FieldStyles}
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
              variant="outlined"
              sx={FieldStyles}

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
              variant="outlined"
              sx={FieldStyles}
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
              variant="outlined"
              sx={FieldStyles}
             
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
              variant="outlined"
              sx={FieldStyles}
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
              variant="outlined"
              sx={FieldStyles}
            >
              <MenuItem value="IT">IT</MenuItem>
              <MenuItem value="Finance">Finance</MenuItem>
              <MenuItem value="Healthcare">Healthcare</MenuItem>
              <MenuItem value="Education">Education</MenuItem>
              <MenuItem value="Manufacturing">Manufacturing</MenuItem>
              <MenuItem value="Retail">Retail</MenuItem>
              <MenuItem value="E-commerce">E-commerce</MenuItem>
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
                variant="outlined"
              sx={FieldStyles}
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
              variant="outlined"
              sx={FieldStyles}
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
              variant="outlined"
              sx={FieldStyles}
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
              />}
              label="I agree to be contacted by Task Master for demo and updates"
              required
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 4, pt:3 }}>
        <Button
  variant="contained"
  type="submit"
  fullWidth
  disabled={loading}
  sx={{
    py: 1.6,
    fontWeight: 'bold',
    fontSize: '1.1rem',
    borderRadius: 4,
    background: 'linear-gradient(to right, #7f00ff, #e100ff)', 
    color: '#fff',
    boxShadow: '0px 0px 12px rgba(128, 0, 255, 0.4)',
    '&:hover': {
      background: 'linear-gradient(to right, #7200e6, #c700e6)',
      boxShadow: '0px 0px 16px rgba(128, 0, 255, 0.6)',
    },
  }}
>
  {loading ? (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <CircularProgress size={18} sx={{ color: "#fff", fontWeight: 'bold' }} />
      <Typography variant="body2" sx={{ color: "#fff", fontSize: '1.1rem', fontWeight: 'bold' }}>
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

      {/* Thank You Dialog  */}
      <Dialog 
      open={successDialogOpen} 
      onClose={() => setSuccessDialogOpen(false)}
      componentsProps={{
    backdrop: {
      sx: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(10px)',
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