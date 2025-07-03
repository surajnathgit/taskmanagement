// // src/components/common/DemoRequestModal.tsx
// 'use client';
// import { useState } from 'react';
// import { 
//   Box, 
//   Button, 
//   Modal, 
//   Typography, 
//   TextField, 
//   Grid, 
//   FormControl, 
//   InputLabel, 
//   Select, 
//   MenuItem, 
//   FormControlLabel, 
//   Checkbox, 
//   FormGroup,
//   CircularProgress,
//   useTheme,
//   IconButton,
//   Paper,
//   Stepper,
//   Step,
//   StepLabel,
//   SelectChangeEvent,
//   Alert
// } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import CloseIcon from '@mui/icons-material/Close';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import PersonIcon from '@mui/icons-material/Person';
// import BusinessIcon from '@mui/icons-material/Business';
// import InterestsIcon from '@mui/icons-material/Interests';
// import { motion, AnimatePresence } from 'framer-motion';
// import dayjs from 'dayjs';

// interface DemoRequestModalProps {
//   open: boolean;
//   onClose: () => void;
// }

// // Form data interface
// interface FormData {
//   name: string;
//   companyName: string;
//   email: string;
//   phone: string;
//   businessSize: string;
//   interests: {
//     aiAutomation: boolean;
//     workflow: boolean;
//     compliance: boolean;
//     reporting: boolean;
//   };
//   demoDate: dayjs.Dayjs | null;
//   message: string;
// }

// // Error state interface
// interface FormErrors {
//   name: boolean;
//   email: boolean;
//   phone: boolean;
// }

// // Step interface
// interface FormStep {
//   label: string;
//   icon: React.ReactNode;
//   content: React.ReactNode;
// }

// // Google Sheets submission URL - Replace with your deployed Google Apps Script web app URL
// const GOOGLE_SHEETS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwvf4GF-PdtwpLix-BAwBA8Zr9pQIS0Y5xLOHq2r--THUod7nvjs92N89kDt2tUoe_eQw/exec";

// // Main component
// const DemoRequestModal: React.FC<DemoRequestModalProps> = ({ open, onClose }) => {
//   const theme = useTheme();
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [activeStep, setActiveStep] = useState(0);
  
//   // Form data state
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     companyName: '',
//     email: '',
//     phone: '',
//     businessSize: '',
//     interests: {
//       aiAutomation: false,
//       workflow: false,
//       compliance: false,
//       reporting: false,
//     },
//     demoDate: null,
//     message: '',
//   });
  
//   // Error state
//   const [errors, setErrors] = useState<FormErrors>({
//     name: false,
//     email: false,
//     phone: false,
//   });

//   // Handle form changes
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
    
//     // Clear error when user types
//     if (name in errors) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: false
//       }));
//     }
//   };

//   const handleSelectChange = (e: SelectChangeEvent) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       interests: {
//         ...prev.interests,
//         [name]: checked
//       }
//     }));
//   };

//   const handleDateChange = (newDate: dayjs.Dayjs | null) => {
//     setFormData(prev => ({
//       ...prev,
//       demoDate: newDate
//     }));
//   };

//   // Form navigation handlers
//   const handleNext = () => {
//     if (activeStep === 0) {
//       // Validate first step fields
//       const newErrors = {
//         name: !formData.name.trim(),
//         email: !/^\S+@\S+\.\S+$/.test(formData.email),
//         phone: !/^[0-9+\s-]{10,15}$/.test(formData.phone),
//       };
      
//       setErrors(newErrors);
      
//       if (Object.values(newErrors).some(Boolean)) {
//         return;
//       }
//     }
    
//     setActiveStep((prevStep) => prevStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevStep) => prevStep - 1);
//   };

//   // Prepare form data for submission
//   const prepareFormDataForSubmission = () => {
//     // Convert interests object to string for easier storage in Google Sheets
//     const interestsArray = Object.entries(formData.interests)
//       .filter(([_, value]) => value === true)
//       .map(([key, _]) => {
//         switch(key) {
//           case 'aiAutomation': return 'AI Process Automation';
//           case 'workflow': return 'Workflow Optimization';
//           case 'compliance': return 'Compliance & Reporting';
//           case 'reporting': return 'Financial Automation';
//           default: return key;
//         }
//       });
    
//     return {
//       timestamp: new Date().toISOString(),
//       name: formData.name,
//       companyName: formData.companyName,
//       email: formData.email,
//       phone: formData.phone,
//       businessSize: formData.businessSize,
//       interests: interestsArray.join(', '),
//       demoDate: formData.demoDate ? formData.demoDate.format('YYYY-MM-DD') : '',
//       message: formData.message,
//     };
//   };




// // Updated handleSubmit function for Google Sheets integration
// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   setLoading(true);
//   setError(null);
  
//   const submissionData = prepareFormDataForSubmission();
  
//   try {
//     // Create a form data object to send to Google Apps Script
//     const formData = new FormData();
//     formData.append('data', JSON.stringify(submissionData));
    
//     // Send to Google Apps Script as form data
//     const response = await fetch(GOOGLE_SHEETS_SCRIPT_URL, {
//       method: 'POST',
//       body: formData,
//     });
    
//     // Get the response text
//     const text = await response.text();
    
//     // Check if the response contains HTML (error page)
//     if (text.includes('<!DOCTYPE html>') || text.includes('<html>')) {
//       console.error('Received HTML error response:', text);
//       throw new Error('Server returned an error page. Data may still have been saved.');
//     }
    
//     // Try to parse as JSON
//     let result;
//     try {
//       result = JSON.parse(text);
//     } catch (e) {
//       // If can't parse as JSON, check if it contains success message
//       result = { 
//         success: text.toLowerCase().includes('success') && !text.toLowerCase().includes('false'),
//         message: text
//       };
//     }
    
//     if (result.success) {
//       setSuccess(true);
//     } else {
//       throw new Error(result.message || result.error || 'Failed to submit form');
//     }
//   } catch (error) {
//     console.error('Error submitting form:', error);
//     // Set a user-friendly error message while also checking if data was saved
//     if (error instanceof Error) {
//       setError(error.message);
//     } else {
//       setError('Failed to submit form. Please try again or contact support.');
//     }
//   } finally {
//     setLoading(false);
//   }
// };

//   // Reset the form when modal is closed
//   const handleModalClose = () => {
//     if (!loading) {
//       onClose();
//       // Reset after animation completes
//       setTimeout(() => {
//         setActiveStep(0);
//         setFormData({
//           name: '',
//           companyName: '',
//           email: '',
//           phone: '',
//           businessSize: '',
//           interests: {
//             aiAutomation: false,
//             workflow: false,
//             compliance: false,
//             reporting: false,
//           },
//           demoDate: null,
//           message: '',
//         });
//         setSuccess(false);
//         setError(null);
//       }, 300);
//     }
//   };

//   // Define steps for the multi-step form
//   const steps: FormStep[] = [
//     {
//       label: 'Personal Info',
//       icon: <PersonIcon />,
//       content: (
//         <Grid container spacing={3}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               name="name"
//               label="Full Name"
//               variant="outlined"
//               fullWidth
//               required
//               value={formData.name}
//               onChange={handleChange}
//               error={errors.name}
//               helperText={errors.name ? "Name is required" : ""}
//               disabled={loading}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               name="email"
//               label="Email Address"
//               variant="outlined"
//               fullWidth
//               required
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               error={errors.email}
//               helperText={errors.email ? "Valid email is required" : ""}
//               disabled={loading}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               name="phone"
//               label="Phone Number"
//               variant="outlined"
//               fullWidth
//               required
//               value={formData.phone}
//               onChange={handleChange}
//               error={errors.phone}
//               helperText={errors.phone ? "Valid phone number is required" : ""}
//               disabled={loading}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               name="companyName"
//               label="Company Name"
//               variant="outlined"
//               fullWidth
//               value={formData.companyName}
//               onChange={handleChange}
//               disabled={loading}
//             />
//           </Grid>
//         </Grid>
//       ),
//     },
//     {
//       label: 'Business Details',
//       icon: <BusinessIcon />,
//       content: (
//         <Grid container spacing={3}>
//           <Grid item xs={12} sm={6}>
//             <FormControl fullWidth>
//               <InputLabel id="business-size-label">Business Size</InputLabel>
//               <Select
//                 labelId="business-size-label"
//                 name="businessSize"
//                 value={formData.businessSize}
//                 label="Business Size"
//                 onChange={handleSelectChange}
//                 disabled={loading}
//               >
//                 <MenuItem value="1-10">1-10 employees</MenuItem>
//                 <MenuItem value="11-50">11-50 employees</MenuItem>
//                 <MenuItem value="51-200">51-200 employees</MenuItem>
//                 <MenuItem value="201-500">201-500 employees</MenuItem>
//                 <MenuItem value="501+">501+ employees</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//               <DatePicker
//                 label="Preferred Demo Date"
//                 value={formData.demoDate}
//                 onChange={handleDateChange}
//                 slotProps={{
//                   textField: {
//                     fullWidth: true,
//                     variant: 'outlined',
//                     disabled: loading,
//                   },
//                 }}
//               />
//             </LocalizationProvider>
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               name="message"
//               label="Additional Information"
//               variant="outlined"
//               fullWidth
//               multiline
//               rows={3}
//               value={formData.message}
//               onChange={handleChange}
//               disabled={loading}
//             />
//           </Grid>
//         </Grid>
//       ),
//     },
//     {
//       label: 'Areas of Interest',
//       icon: <InterestsIcon />,
//       content: (
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <Typography variant="subtitle1" fontWeight="medium" sx={{ mb: 2 }}>
//               What aspects of AI automation are you most interested in?
//             </Typography>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   name="aiAutomation"
//                   checked={formData.interests.aiAutomation}
//                   onChange={handleCheckboxChange}
//                   disabled={loading}
//                 />
//               }
//               label="AI Process Automation"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   name="workflow"
//                   checked={formData.interests.workflow}
//                   onChange={handleCheckboxChange}
//                   disabled={loading}
//                 />
//               }
//               label="Workflow Optimization"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   name="compliance"
//                   checked={formData.interests.compliance}
//                   onChange={handleCheckboxChange}
//                   disabled={loading}
//                 />
//               }
//               label="Compliance & Reporting"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   name="reporting"
//                   checked={formData.interests.reporting}
//                   onChange={handleCheckboxChange}
//                   disabled={loading}
//                 />
//               }
//               label="Financial Automation"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Box 
//               sx={{ 
//                 mt: 4, 
//                 p: 3, 
//                 borderRadius: 2, 
//                 bgcolor: 'rgba(78, 54, 255, 0.05)',
//                 border: '1px dashed rgba(78, 54, 255, 0.3)',
//               }}
//             >
//               <Typography variant="body2" color="text.secondary">
//                 Based on your selections, our team will prepare a custom demo showcasing the specific features 
//                 that would benefit your business the most. You'll get to see how our AI solutions can transform your operations.
//               </Typography>
//             </Box>
//           </Grid>
//         </Grid>
//       ),
//     },
//   ];

//   return (
//     <Modal
//       open={open}
//       onClose={handleModalClose}
//       aria-labelledby="demo-request-modal"
//       closeAfterTransition
//       sx={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: 2,
//       }}
//     >
//       <Paper
//         component={motion.div}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 20 }}
//         transition={{ duration: 0.3 }}
//         elevation={6}
//         sx={{
//           width: { xs: '95%', sm: 650 },
//           maxWidth: '100%',
//           maxHeight: { xs: '90vh', sm: '85vh' },
//           overflowY: 'auto',
//           borderRadius: 2,
//           position: 'relative',
//           bgcolor: 'background.paper',
//         }}
//       >
//         {/* Close button */}
//         <IconButton
//           sx={{
//             position: 'absolute',
//             top: 16,
//             right: 16,
//             zIndex: 10,
//           }}
//           onClick={handleModalClose}
//           disabled={loading}
//         >
//           <CloseIcon />
//         </IconButton>
        
//         {/* Content container */}
//         <Box sx={{ position: 'relative', zIndex: 1, p: { xs: 3, sm: 4 } }}>
//           {success ? (
//             /* Success state */
//             <Box sx={{ textAlign: 'center', py: 4, position: 'relative' }}>
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ duration: 0.4 }}
//               >
//                 <Box
//                   sx={{
//                     width: 80,
//                     height: 80,
//                     borderRadius: '50%',
//                     background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     mb: 3,
//                     mx: 'auto',
//                     boxShadow: `0 6px 20px rgba(78, 54, 255, 0.2)`,
//                   }}
//                 >
//                   <CheckCircleIcon sx={{ fontSize: 40, color: 'white' }} />
//                 </Box>
//               </motion.div>
              
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.2, duration: 0.4 }}
//               >
//                 <Typography variant="h4" fontWeight="bold" mb={2}>
//                   Thank You!
//                 </Typography>
                
//                 <Typography variant="body1" color="text.secondary" mb={4} sx={{ maxWidth: 450, mx: 'auto' }}>
//                   Your demo request has been submitted successfully. Our team will contact you shortly to schedule your personalized AI demo.
//                 </Typography>
                
//                 <Button
//                   variant="contained"
//                   onClick={handleModalClose}
//                   sx={{
//                     mt: 2,
//                     py: 1.5,
//                     px: 4,
//                     background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
//                   }}
//                 >
//                   Close
//                 </Button>
//               </motion.div>
//             </Box>
//           ) : (
//             /* Form state */
//             <>
//               {/* Header */}
//               <Box sx={{ mb: 4 }}>
//                 <Typography
//                   variant="h5"
//                   component="h2"
//                   fontWeight="bold"
//                   sx={{
//                     background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
//                     WebkitBackgroundClip: 'text',
//                     WebkitTextFillColor: 'transparent',
//                     mb: 1,
//                   }}
//                 >
//                   Book Your Free AI Demo
//                 </Typography>
                
//                 <Typography variant="body1" color="text.secondary">
//                   Fill out the form below and one of our AI experts will schedule a personalized demo tailored to your business needs.
//                 </Typography>
//               </Box>
              
//               {/* Error message if any */}
//               {error && (
//                 <Alert 
//                   severity="error" 
//                   sx={{ mb: 3 }}
//                   onClose={() => setError(null)}
//                 >
//                   {error}
//                 </Alert>
//               )}
              
//               {/* Stepper */}
//               <Box sx={{ mb: 4 }}>
//                 <Stepper activeStep={activeStep} alternativeLabel>
//                   {steps.map((step, index) => (
//                     <Step key={step.label}>
//                       <StepLabel 
//                         StepIconProps={{
//                           sx: {
//                             color: activeStep >= index ? 'primary.main' : 'grey.400',
//                           },
//                         }}
//                       >
//                         {step.label}
//                       </StepLabel>
//                     </Step>
//                   ))}
//                 </Stepper>
//               </Box>
              
//               {/* Step content */}
//               <Box sx={{ minHeight: 250 }}>
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={activeStep}
//                     initial={{ opacity: 0, x: 10 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -10 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <Box component="form" onSubmit={handleSubmit}>
//                       {steps[activeStep].content}
                      
//                       {/* Navigation buttons */}
//                       <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
//                         <Button
//                           disabled={activeStep === 0 || loading}
//                           onClick={handleBack}
//                           startIcon={<ArrowBackIcon />}
//                           sx={{ visibility: activeStep === 0 ? 'hidden' : 'visible' }}
//                         >
//                           Back
//                         </Button>
                        
//                         {activeStep === steps.length - 1 ? (
//                           <Button
//                             variant="contained"
//                             color="primary"
//                             type="submit"
//                             disabled={loading}
//                             sx={{
//                               py: 1.2,
//                               px: 4,
//                               background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
//                             }}
//                           >
//                             {loading ? (
//                               <CircularProgress size={24} color="inherit" />
//                             ) : (
//                               'Submit Request'
//                             )}
//                           </Button>
//                         ) : (
//                           <Button
//                             variant="contained"
//                             color="primary"
//                             onClick={handleNext}
//                             endIcon={<ArrowForwardIcon />}
//                             sx={{
//                               py: 1.2,
//                               px: 4,
//                               background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
//                             }}
//                           >
//                             Continue
//                           </Button>
//                         )}
//                       </Box>
//                     </Box>
//                   </motion.div>
//                 </AnimatePresence>
//               </Box>
//             </>
//           )}
//         </Box>
//       </Paper>
//     </Modal>
//   );
// };

// export default DemoRequestModal;

