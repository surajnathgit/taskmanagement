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
import GroupsIcon from "@mui/icons-material/Groups";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const AboutSection = () => {
  const theme = useTheme();

  const stats = [
    {
      icon: <GroupsIcon sx={{ fontSize: 32 }} />,
      value: "20K+",
      label: "Teams Empowered",
    },
    {
      icon: <RocketLaunchIcon sx={{ fontSize: 32 }} />,
      value: "45%",
      label: "Productivity Boost",
    },
    {
      icon: <SmartToyIcon sx={{ fontSize: 32 }} />,
      value: "1M+",
      label: "Tasks Automated by AI",
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        position: "relative",
        background: "linear-gradient(135deg, #1a1a40 0%, #2d1b69 100%)",
        color: "white",
        py: { xs: 10, md: 18 },
        overflow: "hidden",
      }}
    >
      {/* Background Glows */}
      <Box
        sx={{
          position: "absolute",
          width: 280,
          height: 280,
          top: -50,
          left: -80,
          bgcolor: "#4E36FF",
          opacity: 0.15,
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 280,
          height: 280,
          bottom: -60,
          right: -100,
          bgcolor: "#900BFF",
          opacity: 0.15,
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={7} alignItems="flex-start">
          {/* Left: Title + Description + Stats */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Typography 
                variant="h6" 
                fontWeight="bold"
                sx={{background: "linear-gradient(90deg, #4E36FF 0%, #900BFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent", mb:2}}
              >
                ABOUT US
              </Typography>
              <Typography
                variant="h2"
                fontWeight="bold"
                sx={{
                  background: "linear-gradient(90deg, #4E36FF, #FF6B6B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 3,
                }}
              >
                Reimagining the Way Teams Work
              </Typography>
              
              <Typography 
                variant="body1" 
                fontWeight="bold"
                color="white"
                sx={{fontSize: "1.1rem",}}
              >
                Manage Smarter. Collaborate Faster
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  opacity: 0.9,
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  mb: 4,
                  color: 'white',
                  textAlign:'justify'
                }}
              >
               Task Master isn’t just a tool — it’s a mindset shift for modern teams. With AI-powered suggestions, smart deadlines, and real-time coordination, it cuts through complexity to keep your projects aligned, your teams focused, and your goals on track — all in one intelligent platform.
              </Typography>

              <Grid container spacing={3}>
                {stats.map((item, i) => (
                  <Grid item xs={12} sm={4} key={item.label} sx={{display:'flex'}}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.2 }}
                      viewport={{ once: true }}
                      style={{width:'100%'}}
                    >
                      <Card
                        sx={{
                          background: "rgba(255, 255, 255, 0.05)",
                          backdropFilter: "blur(10px)",
                          borderRadius: 3,
                          width:'100%',
                          height:'100%',
                          textAlign: "center",
                          border: "1px solid rgba(255,255,255,0.1)",
                          boxShadow: "0 4px 20px rgba(255, 255, 255, 0.05)",
                          color: "white",
                        }}
                      >
                        <CardContent sx={{flexGrow: 1}}>
                        <Box sx={{color: theme.palette.primary.main}}>{item.icon}</Box>
                        <Typography variant="h5" fontWeight="bold">
                          {item.value}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{ opacity: 0.8, fontSize: "0.85rem" }}
                        >
                          {item.label}
                        </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>

          {/* Right: Mission and Vision cards */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={4} sx={{ mt: { xs:2, md:4} }}>
              <Grid item xs={12}>
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <Card
                  elevation={2}
                    sx={{
                      background: "linear-gradient(135deg, #5B2EFF, #A349FF)",
                      color: "white",
                      borderRadius: 4,
                      boxShadow: "0 8px 30px rgba(144, 11, 255, 0.4)",
                      p:2
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold" sx={{mb:2}}>
                        Our Mission
                      </Typography>
                      <Typography variant="body1">
                      To simplify project management by providing teams with intelligent, intuitive tools that drive clarity, focus, and collaboration — so they can spend less time organizing work and more time creating impact.                      
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>

              <Grid item xs={12}>
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      background: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(10px)",
                      color: "white",
                      borderRadius: 4,
                      border: "1px solid rgba(255,255,255,0.1)",
                      boxShadow: "0 8px 30px rgba(255, 255, 255, 0.08)",
                      p:2,
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold" sx={{mb:2}}>
                        Our Vision
                      </Typography>
                      <Typography variant="body1">
                      We envision a world where teams operate in perfect sync —
                    where technology fades into the background & managing
                    tasks becomes effortless. Task Master is our step toward
                    building that future.                      
                    </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;

