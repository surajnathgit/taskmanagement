"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

const impactData = [
  {
    title: "Team Productivity",
    subtitle: "Higher output and better organization",
    stat: "40% increase in task completion rate",
  },
  {
    title: "Project Delivery",
    subtitle: "Improved project success rates",
    stat: "60% reduction in missed deadlines",
  },
  {
    title: "Resource Optimization",
    subtitle: "Balanced workloads and efficiency",
    stat: "50% better resource allocation",
  },
  {
    title: "Management Efficiency",
    subtitle: "Real-time visibility and updates",
    stat: "55% reduction in status meetings",
  },
];

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
            sx={{
              background: "linear-gradient(90deg, #4E36FF 0%, #900BFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "1.8rem", sm: "2.4rem", md: "2.75rem" }
            }}
          >
            Why Choose Task Master?
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
            Task Master stands out by merging intelligent automation with
            intuitive design. Unlike traditional tools, it adapts to your team’s
            working style — ensuring productivity stays high without adding
            complexity.
          </Typography>
        </motion.div>

          <Grid container spacing={3}>
            {[
              "AI-powered task recommendations tailored to workload",
              "Real-time collaboration with seamless file sharing",
              "Predictive deadline engine to avoid project delays",
              "Robust analytics to track performance and productivity",
              "Scalable for startups, agencies, and enterprises alike",
              "Smart notifications and reminders to keep teams aligned",
            ].map((point, index) => (
              <Grid item xs={12} sm={6} key={index} sx={{display: 'flex'}}>
                <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            style={{ width: "100%" }}
          >
                <Card
                  sx={{
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: 3,
                    px: 2,
                    height: "100%",
                    width:"100%",
                    borderLeft: "5px solid #4E36FF",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    textAlign: "left",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateX(6px)",
                      boxShadow: "0 8px 20px rgba(127, 91, 255, 0.2)", 
                      background: "rgba(255, 255, 255, 0.07)",         
                      borderLeft: "5px solid #7F5BFF",                 
                    },
                  }}
                >
                   <CardContent sx={{flexGrow: 1}}>
                  <Typography variant="body1" sx={{ color: "white" }}>
                    {point}
                  </Typography>
                  </CardContent>
                </Card>
            </motion.div>
              </Grid>
            ))}
          </Grid>

        {/* Efficiency Gains & Impact */}
        <Box sx={{ mt: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: "white", mb: 3 }}
            >
              Efficiency Gains & Impact
            </Typography>
          </motion.div>

          <Grid container spacing={2} justifyContent="center">
            {impactData.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: "flex" }}>
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.2,
                    ease: "easeOut",
                  }}
                  style={{ width: "100%" }}
                >
                  <Card
                    sx={{
                      background: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                      borderRadius: 3,
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      px: 1,
                      pt: 1,
                      pb: 1,
                      position: "relative",
                      textAlign: "center",
                      color: "white",
                      boxShadow: `0 4px 16px rgba(0,0,0,0.25), 0 0 10px ${theme.palette.primary.main}15`,
                      overflow: "hidden",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: `0 10px 30px rgba(0,0,0,0.3), 0 0 20px ${theme.palette.primary.main}55`
                      },
                      // Animated left border using ::before
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "4px",
                        height: 0,
                        background: "linear-gradient(180deg, #4E36FF, #FF6B6B)",
                        transition: "height 0.5s ease-in-out",
                        borderTopLeftRadius: 8,
                        borderBottomLeftRadius: 8,
                        zIndex: 1
                      },
                      "&:hover::before": {
                        height: "100%",
                      },
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      {/* Stat */}
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        sx={{
                          color: "#B39DFF",
                          mb: 2,
                          lineHeight: 1.2,
                          textAlign: "center",
                        }}
                      >
                        {item.stat}
                      </Typography>

                      {/* Title */}
                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        sx={{
                          fontSize: "1.05rem", 
                          mb: 0.5,
                          lineHeight: 1.4,
                          textAlign: "center",
                        }}
                      >
                        {item.title}
                      </Typography>

                      {/* Subtitle */}
                      <Typography
                        variant="body2"
                        sx={{
                          opacity: 0.85,
                          color: "#E0E0E0", 
                          lineHeight: 1.5,
                          textAlign: "center",
                        }}
                      >
                        {item.subtitle}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

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
                sx={{ mb: 2, mt: 2, textAlign: "center", color: "white" }}
              >
                "Task Master transformed how we manage projects. The AI-driven
                deadlines alone saved us countless hours!"
              </Typography>
            </Card>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default WhyChooseSection;
