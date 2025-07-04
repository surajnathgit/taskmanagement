"use client"
import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  useTheme
} from "@mui/material";
import { motion } from "framer-motion";

const WhyChooseSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #2d1b69 0%, #1a1a40 100%)",
        color: "white",
        py: { xs: 8, md: 12 },
        textAlign: "center",
        overflow: "hidden",

      }}
    >
      <Container maxWidth="md">
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
            sx={{ color: theme.palette.primary.main,}}

          >
            Why Choose Our Product
          </Typography>

          <Typography
            variant="body1"
            sx={{
              opacity: 0.9,
              mb: 4,
              textAlign: "center",
              maxWidth: 700,
              mx: "auto",
            }}
          >
            Task Master stands out by merging intelligent automation with intuitive design.
            Unlike traditional tools, it adapts to your team’s working style — ensuring
            productivity stays high without adding complexity.
          </Typography>
          </motion.div>

          <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Grid container spacing={3}>
            {[
              "AI-powered task recommendations tailored to workload",
              "Real-time collaboration with seamless file sharing",
              "Predictive deadline engine to avoid project delays",
              "Robust analytics to track performance and productivity",
              "Scalable for startups, agencies, and enterprises alike",
              "Smart notifications and reminders to keep teams aligned",
            ].map((point, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card
                  sx={{
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: 3,
                    px: 2,
                    py: 2.5,
                    height: "100%",
                    borderLeft: "5px solid #4E36FF", 
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    textAlign: "left",
                  }}
                >
                  <Typography variant="body1" sx={{ color: "white" }}>
                    {point}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
          </motion.div>
          
          {/*Testimonial */}
          <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Box mt={8}>
            <Card
              sx={{
                background: "rgba(255,255,255,0.06)",
                borderLeft: "5px solid #7C3AED",
                borderRadius: 3,
                px: 4,
                py: 3,
                maxWidth: 700,
                mx: "auto",
              }}
            >
              <Typography
                variant="body1"
                fontStyle="italic"
                sx={{ mb: 2, textAlign: "center", color: "white" }}
              >
                "Task Master transformed how we manage projects. The AI-driven deadlines
                alone saved us countless hours!"
              </Typography>
              <Box
                sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <Avatar sx={{ width: 40, height: 40, mr: 2 }} />
                <Box>
                  <Typography variant="subtitle2" sx={{color: "white"}}>Ritika M.</Typography>
                  <Typography variant="caption" sx={{color: "white"}}>Project Lead, Innovex Solutions</Typography>
                </Box>
              </Box>
            </Card>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

export default WhyChooseSection