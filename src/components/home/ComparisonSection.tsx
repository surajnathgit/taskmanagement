"use client"
import React, {useState} from "react";
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
import ScheduleDemoModal from "../common/ScheduleDemoModal";

const ComparisonSection = () => {
    const theme = useTheme();
    const [demoOpen, setDemoOpen] = useState(false);
    
  return (
    <>
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
              WebkitTextFillColor: "transparent", textAlign: 'center',
              fontSize: { xs: "1.8rem", sm: "2.4rem", md: "2.75rem" }
              }}
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
          The gap between doing tasks and mastering them — see the Task Master difference.
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
        borderRadius: 4,
        p: 3,
        height: "100%",
        boxShadow: "0 4px 20px rgba(78,54,255,0.1)",
        overflow: 'hidden',
        textAlign: "left",
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
      <Typography
        component="ul"
        variant="body1"
        sx={{
          pl: "1.2em",
          mb: "1.5em",
          color: "rgba(255,255,255,0.85)",
        }}
      >
        {[
          "Email-based task assignments",
          "Spreadsheet project tracking",
          "Unclear task priorities",
          "Poor visibility into workloads",
          "Missed deadlines and deliverables",
          "Inefficient resource allocation",
        ].map((item, i) => (
          <Typography
      component={motion.li}
      key={i}
      variant="body1"
      sx={{
        mb: 1,
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
      {item}
    </Typography>
    ))}
      </Typography>

      <Box
        sx={{
          backgroundColor: "rgba(120, 87, 255, 0.07)",
          borderRadius: 3,
          p: 2.5,
          overflow: 'hidden',
        }}
      >
        <Typography fontWeight="bold" sx={{ mb: 1, color: '#4E36FF' }}>
          Key Pain Points:
        </Typography>
        <Typography
        component="ul"
        variant="body1"
        sx={{
          pl: "1.2em",
          color: "rgba(255,255,255,0.85)",
        }}
      >
          {[
            "30% of projects miss deadlines",
            "Limited visibility into team capacity",
            "Frequent task conflicts and overlaps",
            "Manual status reporting overhead",
          ].map((point, i) => (
            <Typography
      component={motion.li}
      key={i}
      variant="body1"
      sx={{
        mb: 1,
      }}   
    >
      {point}
    </Typography>
          ))}
        </Typography>
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
    borderRadius: 4,
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
      <Typography
        component="ul"
        variant="body1"
        sx={{
          pl: "1.2em",
          mb: "1.5em",
          color: "rgba(255,255,255,0.85)",
        }}
      >
        {[
          "Automated task assignment and prioritization",
          "Real-time project tracking and updates",
          "AI-driven priority optimization",
          "Complete workload visibility",
          "Proactive deadline management",
          "Intelligent resource allocation",
        ].map((item, i) => (
          <Typography
      component={motion.li}
      key={i}
      variant="body1"
      sx={{
        mb: 1,
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
      {item}
    </Typography>        
        ))}
</Typography>

      <Box
        sx={{
          backgroundColor: "rgba(97, 195, 255, 0.07)",
          borderRadius: 3,
          p: 2.5,
          overflow: 'hidden',
        }}
      >
        <Typography fontWeight="bold" sx={{ mb: 1, color: "#7C3AED" }}>
          Achieved Improvements:
        </Typography>
        <Typography
        component="ul"
        variant="body1"
        sx={{
          pl: "1.2em",
          color: "rgba(255,255,255,0.85)",
        }}
      >
          {[
            "95% on-time project delivery",
            "Complete team capacity visibility",
            "Optimized task distribution",
            "Automated status reporting",
          ].map((point, i) => (
            <Typography
      component={motion.li}
      key={i}
      variant="body1"
      sx={{
        mb: 1,
      }}   
    >
      {point}
    </Typography>
          ))}
        </Typography>
      </Box>
    </Paper>
    </motion.div>
  </Grid>
</Grid>
      </Container>

    <Container maxWidth="lg" sx={{ mt: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
      <Box
        sx={{
          mt: 10,
          py: { xs: 6, md: 10 },
          px: 4,
          background: "linear-gradient(to left bottom, #f359de, #d74edf, #b947e0, #9541e0, #6a3edf)",
          textAlign: "center",
          borderRadius: 3,
          overflow: 'hidden',
          position: "relative",
          zIndex: 2, 
        }}
      >
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{
              color: "white",
              mb: 1,
              fontSize: { xs: "1.6rem", md: "2rem" },
            }}
          >
            Ready to Transform Your Workflow?
          </Typography>
      
          <Typography
            variant="body1"
            sx={{
              color: "white",
              mb: 4,
              fontSize: { xs: "0.95rem", md: "1.05rem" },
            }}
          >
            Join thousands of teams already using our platform to achieve more.
          </Typography>
      
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Box
              component="button"
              sx={{
                px: 3,
                py: 2,
                fontWeight: "bold",
                fontSize: "0.95rem",
                color: "white",
                background: "linear-gradient(90deg, #4E36FF 0%, #900BFF 100%)",
                borderRadius: 2,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                transition: "transform 0.3s ease, background 0.3s ease",
                "&:hover": {
                  background: "linear-gradient(90deg, #5f48ff 0%, #a040ff 100%)",
                  transform: "translateY(-3px)",                 
                },
              }}
            >
              Get Started Today
            </Box>
      
            <Box
              component="button"
              sx={{
                px: 3,
                py: 2,
                fontWeight: "bold",
                fontSize: "0.95rem",
                backgroundColor: "white",
                color: "#1e1e2f",
                borderRadius: 2,
                border: "1px solid #ddd",
                cursor: "pointer",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease,  background-color 0.3s ease",
                "&:hover": {
                  backgroundColor: "#f4f4f4",
                  transform: "translateY(-3px)",                
                },
              }}
              onClick={() => setDemoOpen(true)}
            >
              Schedule Demo
            </Box>
          </Box>
      </Box>
      </motion.div>
      </Container>
    </Box>

        <ScheduleDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  )
}

export default ComparisonSection