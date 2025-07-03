'use client';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { motion } from 'framer-motion';

const features = [
  {
    title: "AI-Powered Task Prioritization",
    description:
      "Automatically rank and prioritize tasks based on urgency & team workload.",
  },
  {
    title: "Smart Deadline Suggestions",
    description:
      "Automatically rank and prioritize tasks based on urgency & team workload.",
  },
  {
    title: "Collaborative Workspaces",
    description:
      "Automatically rank and prioritize tasks based on urgency & team workload.",
  },
  {
    title: "Progress & Milestone Tracking",
    description:
      "Automatically rank and prioritize tasks based on urgency & team workload.",
  },
  {
    title: "Custom Workflows",
    description:
      "Automatically rank and prioritize tasks based on urgency & team workload.",
  },
  {
    title: "Performance Analytics",
    description:
      "Automatically rank and prioritize tasks based on urgency & team workload.",
  },
];

const commonGradients = [
  'linear-gradient(135deg, #4E36FF 0%, #7C3AED 100%)',
  'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
  'linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)',
  'linear-gradient(135deg, #45B7D1 0%, #2196F3 100%)',
  'linear-gradient(135deg, #F7931E 0%, #FF9800 100%)',
  'linear-gradient(135deg, #96CEB4 0%, #4CAF50 100%)',
  'linear-gradient(135deg, #D63384 0%, #E91E63 100%)',
  'linear-gradient(135deg, #20C997 0%, #17A2B8 100%)',
];

const FeaturePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };
    
  const floatingBubblesVariants = {
    animate: {
      y: [0, -15, 0],
      transition: { duration: 5, ease: "easeInOut", repeat: Infinity }
    }
  };

  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #0a0a23 0%, #1a1a40 50%, #2d1b69 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0
        }}
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: Math.random() * 8 + 4,
              height: Math.random() * 8 + 4,
              borderRadius: '50%',
              background: commonGradients[i % commonGradients.length],
              opacity: 0.3,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              scale: [1, Math.random() + 0.5, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </Box>

      {/* Existing Animated Background Elements */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden' }}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            variants={floatingBubblesVariants}
            animate="animate"
            custom={i}
            style={{
              position: 'absolute',
              width: `${30 + Math.random() * 70}px`,
              height: `${30 + Math.random() * 70}px`,
              borderRadius: '50%',
              background: 'rgba(78, 54, 255, 0.05)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              zIndex: 0
            }}
          />
        ))}
      </Box>
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        > */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            {/* <motion.div variants={headingVariants}> */}
              <Typography 
                variant="h2" 
                fontWeight="bold" 
                sx={{ 
                  mb: 3,
                  color: 'white',
                  background: 'linear-gradient(135deg, #4E36FF 0%, #900BFF 100%)',
                  WebkitBackgroundClip: 'text',
                }}
              >
                Key Features
              </Typography>
            {/* </motion.div> */}
          </Box>
          
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                {/* <motion.div
                  variants={itemVariants}
                  whileHover={{ 
                    y: -15,
                    boxShadow: '0 20px 40px rgba(78, 54, 255, 0.15)',
                    transition: { duration: 0.3 } 
                  }}
                > */}
                  <Card 
                    elevation={0}
                    sx={{ 
                      height: '300px',
                      borderRadius: 3,
                      overflow: 'hidden',
                      border: '1px solid rgba(255,255,255,0.1)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(20px)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'primary.main',
                        borderRadius: 3,
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          mb: 2,
                          color: 'primary.main'
                        }}
                      >
                        {/* <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        > */}
                          <CheckCircleOutlineIcon sx={{ mr: 1, fontSize: 28 }} />
                        {/* </motion.div> */}
                        <Typography variant="h5" fontWeight="bold" color="white">
                          {feature.title}
                        </Typography>
                      </Box>
                      <Typography variant="body1" color="rgba(255, 255, 255, 0.8)">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                {/* </motion.div> */}
              </Grid>
            ))}
          </Grid>
        {/* </motion.div> */}
      </Container>
    </Box>
  );
};

export default FeaturePage;