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
          
          {/* Efficiency Gains & Impact – Square Cards */}
{/* <Box sx={{ mt: 6 }}>
  <Typography
    variant="h5"
    fontWeight="bold"
    sx={{ color: theme.palette.primary.main, mb: 3 }}
  >
    Efficiency Gains & Impact
  </Typography>
  <Grid container spacing={2} justifyContent="center">
    {impactData.map((item, index) => (
      <Grid item xs={6} sm={3} key={index}>
        <Card
          sx={{
            background: "rgba(255,255,255,0.04)",
            borderRadius: 2,
            // borderLeft: "4px solid #4CAF50",
            height: 180,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            px: 2,
            // py: 1.5,
            textAlign: "left",
            color: "white",
            transition: "transform 0.3s ease",
            '&:hover': {
              transform: "translateY(-5px)"
            },
          }}
        >
          <Typography
            variant="caption"
            fontWeight="bold"
            sx={{
              mt: "auto",
              color: "#4CAF50",
              backgroundColor: "rgba(76,175,80,0.15)",
              px: 1.5,
              py: 0.5,
              borderRadius: "999px",
            }}
          >
            {item.stat}
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{ mb: 0.5 }}
          >
            {item.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ opacity: 0.8, mb: 1 }}
          >
            {item.subtitle}
          </Typography>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box> */}

          {/* Efficiency Gains & Impact – Square Cards */}
          <Box sx={{ mt: 8 }}>
            <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                      >
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: 'white', mb: 3 }}
            >
              Efficiency Gains & Impact
            </Typography>
            </motion.div>

            <Grid container spacing={2} justifyContent="center">
              {impactData.map((item, index) => (
                <Grid item xs={6} sm={3} key={index} sx={{ display: 'flex' }}>
                  <motion.div
        key={index}
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.2 + index * 0.2, 
          ease: "easeOut"
        }}
        style={{ width: '100%' }}
      >
                  <Card
                    sx={{
                      background: "rgba(255, 255, 255, 0.05)",        
backdropFilter: "blur(6px)",                    
WebkitBackdropFilter: "blur(6px)", 
                      borderRadius: 3,
                      width: '100%',
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      px: 1,
                      pt: 1,
                      pb: 1,
                      position: "relative",
                      textAlign: "left",
                      color: "white",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                      overflow: "hidden",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      '&:hover': {
                        transform: "translateY(-5px)",
                        boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
                      },
                      // Animated left border using ::before
                      '&::before': {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "4px",
                        height: 0,
                        backgroundColor: theme.palette.primary.main,
                        transition: "height 0.5s ease-in-out",
                        borderTopLeftRadius: 8,
                        borderBottomLeftRadius: 8,
                      },
                      '&:hover::before': {
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
                        color: "#B39DFF", // light violet text
                        mb: 2,
                        lineHeight: 1.2,
                        textAlign: 'center'
                      }}>
                    {item.stat}
                    </Typography>

                    {/* Title */}
                    <Typography variant="subtitle1" fontWeight="bold" sx={{  fontSize: "1.05rem",                     // Line 1
    mb: 0.5,
    lineHeight: 1.4, textAlign: 'center'  }}>
                      {item.title}
                    </Typography>

                    {/* Subtitle */}
                    <Typography variant="body2" sx={{ opacity: 0.85,
    color: "#E0E0E0",                          // Line 1 (instead of default white)
    lineHeight: 1.5, textAlign:'center' }}>
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