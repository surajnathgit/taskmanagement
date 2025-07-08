"use client"
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme
} from "@mui/material";
import { motion } from "framer-motion";
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

const ComparisonSection = () => {
    const theme = useTheme();

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #1a1a40 0%, #2d1b69 100%)",
        color: "white",
        py: { xs: 8, md: 12 },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
          <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            gutterBottom
            sx={{               background: "linear-gradient(90deg, #4E36FF 0%, #900BFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent", textAlign: 'center'}}
          >
             Transformation With Task Master
          </Typography>

          <Typography
            variant="body1"
            sx={{
              opacity: 0.85,
              mb: 6,
              textAlign: "center",
              maxWidth: 800,
              mx: "auto",
            }}
          >
          An enterprise-ready solution that goes beyond task tracking — optimized for productivity and clarity.
          </Typography>
          </motion.div>
        
<Grid container spacing={4}>
  {/* Before Implementation */}
  <Grid item xs={12} md={6}>
    <motion.div
    initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  whileHover={{
    y: -8,
    boxShadow: "0px 10px 30px rgba(78, 54, 255, 0.2)",
    transition: { duration: 0.3 },
  }}
  transition={{ duration: 0.8, delay: 0.1 }}
  viewport={{ once: true }}
  >
    <Paper
  sx={{
    background: "linear-gradient(135deg, rgba(78,54,255,0.08), rgba(78,54,255,0.05))",
    border: "1px solid rgba(78,54,255,0.25)",
    borderRadius: 3,
    p: 3,
    height: "100%",
    boxShadow: "0 4px 20px rgba(78,54,255,0.1)",
    overflow: 'hidden',
    textAlign: "left"
  }}
>
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
  <WarningAmberRoundedIcon sx={{ color: "#4E36FF", mr: 1, fontSize: 28 }} />
  <Typography variant="h5" fontWeight="bold" sx={{ color: "#4E36FF" }}>
    Before Implementation
  </Typography>
</Box>
      <Typography variant="subtitle2" sx={{ mb: 2, opacity: 0.7, color:'white',textAlign: 'left' }}>
        Manual Project Coordination
      </Typography>

      <Typography fontWeight="bold" sx={{ mb: 1, color: "white" }}>
        Current Challenges:
      </Typography>
      <ul style={{ paddingLeft: "1.2em", marginBottom: "1.5em", color: "rgba(255,255,255,0.85)" }}>
        {[
          "Email-based task assignments",
          "Spreadsheet project tracking",
          "Unclear task priorities",
          "Poor visibility into workloads",
          "Missed deadlines and deliverables",
          "Inefficient resource allocation",
        ].map((item, i) => (
          <motion.li
    key={i}
    style={{
      marginBottom: 6,
      listStyleType: "disc",
      color: "rgba(255,255,255,0.85)",
      cursor: "default",
    }}
    whileHover={{
      x: 6,
      color: "#FFFFFF",
      transition: { type: "tween", duration: 0.2 },
    }}
  >
{item}</motion.li>
        ))}
      </ul>

      <Box
        sx={{
          backgroundColor: "rgba(120, 87, 255, 0.07)",
          borderRadius: 2,
          p: 2.5,
          overflow: 'hidden',
        }}
      >
        <Typography fontWeight="bold" sx={{ mb: 1, color: '#4E36FF' }}>
          Key Pain Points:
        </Typography>
        <ul style={{ paddingLeft: "1.2em", color: "rgba(255,255,255,0.85)" }}>
          {[
            "30% of projects miss deadlines",
            "Limited visibility into team capacity",
            "Frequent task conflicts and overlaps",
            "Manual status reporting overhead",
          ].map((point, i) => (
            <li key={i} style={{ marginBottom: 6 }}>{point}</li>
          ))}
        </ul>
      </Box>
    </Paper>
    </motion.div>
  </Grid>

  {/* After Implementation */}
  <Grid item xs={12} md={6}>
     <motion.div
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    whileHover={{
    y: -8,
    boxShadow: "0px 10px 30px rgba(124, 58, 237, 0.2)",
    transition: { duration: 0.3 },
  }}
    transition={{ duration: 0.8, delay: 0.3 }}
    viewport={{ once: true }}
  >
    <Paper
  sx={{
    background: "linear-gradient(135deg, rgba(124,58,237,0.08), rgba(124,58,237,0.05))",
    border: "1px solid rgba(124,58,237,0.25)",
    borderRadius: 3,
    p: 3,
    height: "100%",
    boxShadow: "0 4px 20px rgba(124,58,237,0.1)",
    textAlign: "left",
    overflow: 'hidden',
  }}
>
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
  <CheckCircleOutlineRoundedIcon sx={{ color: "#7C3AED", mr: 1, fontSize: 28 }} />
  <Typography variant="h5" fontWeight="bold" sx={{ color: "#7C3AED" }}>
    After Implementation
  </Typography>
</Box>
      <Typography variant="subtitle2" sx={{ mb: 2, opacity: 0.7, color:'white' }}>
        AI-Optimized Task Management
      </Typography>

      <Typography fontWeight="bold" sx={{ mb: 1, color: "white" }}>
        New Capabilities:
      </Typography>
      <ul style={{ paddingLeft: "1.2em", marginBottom: "1.5em", color: "rgba(255,255,255,0.85)" }}>
        {[
          "Automated task assignment and prioritization",
          "Real-time project tracking and updates",
          "AI-driven priority optimization",
          "Complete workload visibility",
          "Proactive deadline management",
          "Intelligent resource allocation",
        ].map((item, i) => (
          <motion.li
    key={i}
    style={{
      marginBottom: 6,
      listStyleType: "disc",
      color: "rgba(255,255,255,0.85)",
      cursor: "default",
    }}
    whileHover={{
      x: 6,
      color: "#FFFFFF",
      transition: { type: "tween", duration: 0.2 },
    }}
  >
{item}</motion.li>
        ))}
      </ul>

      <Box
        sx={{
          backgroundColor: "rgba(97, 195, 255, 0.07)",
          borderRadius: 2,
          p: 2.5,
          overflow: 'hidden',
        }}
      >
        <Typography fontWeight="bold" sx={{ mb: 1, color: "#7C3AED" }}>
          Achieved Improvements:
        </Typography>
        <ul style={{ paddingLeft: "1.2em", color: "rgba(255,255,255,0.85)" }}>
          {[
            "95% on-time project delivery",
            "Complete team capacity visibility",
            "Optimized task distribution",
            "Automated status reporting",
          ].map((point, i) => (
            <li key={i} style={{ marginBottom: 6 }}>{point}</li>
          ))}
        </ul>
      </Box>
    </Paper>
    </motion.div>
  </Grid>
</Grid>
      </Container>
    </Box>
  )
}

export default ComparisonSection