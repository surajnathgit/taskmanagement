"use client"
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

const rolesReduced = [
  { title: "Project Coordinators", description: "Task assignment and tracking automated", impact: "-60%" },
  { title: "Administrative Assistants", description: "Task follow-up and status reporting automated", impact: "-70%" },
  { title: "Status Report Compilers", description: "Automated real-time reporting eliminates manual compilation", impact: "-95%" },
];

const newRoles = [
  { title: "AI Task Optimization Specialist", description: "Optimizes AI task allocation algorithms" },
  { title: "Workflow Automation Designer", description: "Creates efficient automated task workflows" },
  { title: "Productivity Intelligence Analyst", description: "Analyzes task data to identify optimization opportunities" },
];

const netImpact = [
  { title: "-75%", description: "Average Role Reduction" },
  { title: "+3", description: "New Specialized Roles" },
  { title: "Upskilling", description: "Focus on Higher-Value Work" },
];

const WorkforceShiftSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #1a1a40 0%, #2d1b69 100%)",
        color: "white",
        py: { xs: 8, md: 12 },
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
                      variant="h2"
                      fontWeight="bold"
                      gutterBottom
                      sx={{    background: "linear-gradient(90deg, #4E36FF 0%, #900BFF 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                       textAlign: 'center',               fontSize: { xs: "1.8rem", sm: "2.4rem", md: "2.75rem" }
}}
                    >
            Role Shifts Powered by Task Master
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "center",fontSize: { xs: '1rem', sm: '1.3rem', md: '1.4rem'},lineHeight: 1.5,mb: 6, opacity: 0.8, maxWidth: 750, mx: "auto", fontWeight: '600' }}>
            See how roles evolve with Task Master — reducing outdated functions and enabling future-ready positions.
          </Typography>
        </motion.div>

{/* Roles reduces or replaced*/}
    <Box sx={{ mb: 10, px:{xs: 0, md: 1}, overflow:'hidden' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
    <Typography variant="h4" fontWeight="bold" sx={{ mb: 3, color: theme.palette.secondary.main }}>
      Roles Reduced or Replaced
    </Typography>
    </motion.div>

    <Grid container spacing={2}>
      {rolesReduced.map((item, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx} sx={{ display: 'flex' }}>
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + idx * 0.2,
                    ease: "easeOut",
                  }}
            style={{ borderRadius: '16px', width: '100%' }}       
          >
          <Card
            sx={{
              backgroundColor: "rgba(124, 58, 237, 0.08)" ,      
              backdropFilter: "blur(10px)",                     
              WebkitBackdropFilter: "blur(10px)",          
              borderRadius: 2,
              py: 2,
              px: 1,
              overflow:'hidden',
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              transition: "all 0.3s ease",
              '&:hover': {
                backgroundColor: "rgba(124, 58, 237, 0.15)",
              },
            }}
          >
            <CardContent sx={{ flexGrow: 1}}>
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "absolute", top: 8, right: 8 }}
            >
            <Chip
              label={item.impact}
              size="small"
              sx={{
                fontWeight: 'bold',
                backgroundColor: theme.palette.primary.main,
                color: 'white',
              }}
            />
            </motion.div>
            <Typography fontWeight="bold" sx={{ color: "white",mb:1 }}>{item.title}</Typography>
            <Typography variant="body2" sx={{ opacity: 0.85, color: 'white' }}>{item.description}</Typography>
            </CardContent>
          </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Box>

{/* New Roles Introduced */}
  <Box sx={{ mb: 10, px:{xs: 0, md: 1}, overflow:'hidden' }}>
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
>
    <Typography variant="h4" fontWeight="bold" sx={{ mb: 3, color: theme.palette.primary.main }}>
      New Roles Introduced
    </Typography>
    </motion.div>

    <Grid container spacing={2}>
      {newRoles.map((item, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx} sx={{ display: 'flex' }}>
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + idx * 0.2,
                    ease: "easeOut",
                  }}
            style={{ borderRadius: '16px', width: '100%' }}       
          >
          <Card
            sx={{
              backgroundColor: "rgba(124, 58, 237, 0.08)" ,
              backdropFilter: "blur(10px)",                     
              WebkitBackdropFilter: "blur(10px)",          
              borderRadius: 2,
              py: 2,
              px:1,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              transition: "all 0.3s ease",
              '&:hover': {
                backgroundColor: "rgba(124, 58, 237, 0.15)",
              },
            }}
          >
            <CardContent sx={{ flexGrow: 1}}>
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "absolute", top: 8, right: 8 }}
            >
            <Chip
              label="New"
              size="small"
              sx={{
                fontWeight: 'bold',
                backgroundColor: theme.palette.secondary.main,
                color: 'white',
              }}
            />
            </motion.div>
            <Typography fontWeight="bold" sx={{ color: "white", mb: 1}}>{item.title}</Typography>
            <Typography variant="body2" sx={{ opacity: 0.85, color:'white' }}>{item.description}</Typography>
            </CardContent>
          </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Box>

{/* Net Impact Summary (No Chip) */}
  <Box sx={{ mb: 4, mt: 4, px:{xs: 0, md: 1}, overflow:'hidden' }}>
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  viewport={{ once: true }}
>
    <Typography variant="h4" fontWeight="bold" sx={{ mb: 3, color: theme.palette.secondary.main }}>
      Net Impact Summary
    </Typography>
            </motion.div>

    <Grid container spacing={2}>
      {netImpact.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.2,
                    ease: "easeOut",
                  }}
            style={{ borderRadius: '16px', width: '100%' }}       
          >
          <Card
            sx={{
              backgroundColor: "rgba(124, 58, 237, 0.08)" ,
              backdropFilter: "blur(10px)",                     
              WebkitBackdropFilter: "blur(10px)",          
              borderRadius: 2,
              overflow:'hidden',
              py: 2,
              px:1,
              width: "100%",
              height: '100%',
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              transition: "all 0.3s ease",
              '&:hover': {
                backgroundColor: "rgba(124, 58, 237, 0.15)",
              },
            }}
          >
            <CardContent sx={{ flexGrow: 1}}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ background: "linear-gradient(90deg, #4E36FF, #FF6B6B)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 1 
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "white", opacity: 0.85 }}
            >
              {item.description}
            </Typography>
            </CardContent>
          </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Box>
      </Container>
    </Box>
  );
};

export default WorkforceShiftSection;
