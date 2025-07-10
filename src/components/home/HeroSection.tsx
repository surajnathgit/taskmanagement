"use client";
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Stack,
  Paper,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import ParticleBackground from "../animations/ParticleBackground";
import BoltIcon from "@mui/icons-material/Bolt"; 
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupsIcon from '@mui/icons-material/Groups';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LoopIcon from '@mui/icons-material/Loop';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import PublicIcon from "@mui/icons-material/Public";
import SecurityIcon from "@mui/icons-material/Security";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import WorkIcon from "@mui/icons-material/Work";
import FavoriteIcon from "@mui/icons-material/Favorite";

const HeroSection = () => {
  const theme = useTheme();

  const features = [
    {
      icon: <TipsAndUpdatesIcon sx={{ fontSize: 24, color: theme.palette.primary.main }} />,
      title: "AI Prioritization",
      description: "Rank tasks smartly.",
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 24, color: theme.palette.secondary.main }} />,
      title: "Smart Deadlines",
      description: "Auto-suggest due dates.",
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 24, color: "#7F5BFF" }} />,
      title: "Collaboration",
      description: "Work as one team.",
    },
  ];

    const animatedCards = [
    {
      icon: <CheckCircleOutlineIcon sx={{ fontSize: 20, color: "#02b8fa", fontWeight:'bold' }} />,
      label: "Tasks Completed",
      style: { top: 40, right: 25, background: "linear-gradient(135deg, #0be9b6, #0cbcf2)" },
    },
    {
      icon: <HourglassEmptyIcon sx={{ fontSize: 20, color: "#d1521b" }} />,
      label: "Pending Approvals",
      style: { bottom: 60, left: 70, background: "linear-gradient(135deg, #FF7E5F, #FFB199)" },
    },
    {
      icon: <LoopIcon sx={{ fontSize: 20, color: "#4515ed" }} />,
      label: "Auto-Scheduled",
      style: { top: "40%", left: 35, background: "linear-gradient(135deg, #6E8EFB, #A777E3)" },
    },
  ];

  return (
    <Box
      sx={{
        minHeight: { xs: "60vh", sm: "70vh", md: "100vh" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: { xs: 2, sm: 3, md: 4 },
        pt: { xs: 8, sm: 6, md: 10 },
        pb: { xs: 6, sm: 6, md: 10 },
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #0a0a23 0%, #1a1a40 50%, #2d1b69 100%)",
      }}
    >
      {/* Animated background */}
      <ParticleBackground
        count={30}
        colors={[
          theme.palette.primary.main,
          theme.palette.primary.light,
          theme.palette.secondary.main,
          theme.palette.secondary.light,
        ]}
        speed={0.3}
        minSize={1}
        maxSize={3}
        style={{ opacity: 0.5 }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
<Grid container spacing={4} sx={{mt:2}} >
  {/* Left Text Content */}
  <Grid item xs={12} md={7}>
    <motion.div
      initial={{ opacity: 0, scale: 1.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
      viewport={{ once: true }}
    >

<Box
  sx={{
    display: "inline-flex",
    alignItems: "center",
    gap: 1,
    px: 2,
    py: 0.6,
    borderRadius: "50px",
    fontSize: "0.9rem",
    fontWeight: 600,
    background: "rgba(60, 54, 187, 0.18)",
    // border: "1px solid white",
    border: "0.5px solid rgb(22, 13, 91)",
    color: "#C2C2FF",
    // letterSpacing: "0.7px",
    // boxShadow: "0 0 8px rgba(127, 91, 255, 0.1)",
    // backdropFilter: "blur(5px)",
    width: "fit-content",
    mx: "auto",
    mb:2,
  }}
>
  <BoltIcon sx={{ fontSize: 18, color: "#A666FF" }} />
  AI-Powered Task Management
</Box>


      <Typography
        variant="h2"
        sx={{
          fontWeight: 800,
          fontSize: { xs: "3rem", md: "3.5rem" },
          mb: 3,
          background: "linear-gradient(90deg, #4E36FF, #FF6B6B)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Elevate Task Management with the Power of Task Master
      </Typography>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
    >
      <Typography
        variant="h6"
        color="white"
        sx={{
          fontWeight: 400,
          fontSize: { xs: "1rem", md: "1.1rem" },
          mb: 4,
          opacity: 0.9,
          textAlign: "left",
          maxWidth: { xs: "90%", sm: "80%", md: "90%" },
          // mx: "auto",
        }}
      >
        Streamline your team’s productivity with Task Master — featuring intelligent task prioritization, smart deadline suggestions, and real-time collaboration tools, all in one powerful platform.
      </Typography>
    </motion.div>

    {/* Buttons */}
    <Stack
      direction="row"
      spacing={2}
      // justifyContent="center"
      sx={{ mt: 2 }}
    >
          <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
    >
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{
          py: 1.5,
          px: 4,
          borderRadius: '30px',
          background: "linear-gradient(90deg, #4E36FF, #900BFF)",
          color: "white",
          fontSize: '1.1rem',
          transition: "transform 0.3s ease",
          "&:hover":{
            transform: 'scale(1.06)'
          }
        }}
      >
        Book a Free Demo
      </Button>
      </motion.div>

          <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
    >
      <Button
        variant="outlined"
        size="large"
        sx={{
          py: 1.5,
          px: 4,
          color: "white",
          fontSize: '1.1rem',
          borderColor: "rgba(255,255,255,0.3)",
          borderRadius: '30px',
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.06)",
            borderColor: "white",
            bgcolor: "rgba(255,255,255,0.05)",
          },
        }}
      >
        Learn More →
      </Button>
      </motion.div>
    </Stack>

    {/* Cards */}
    {/* <Grid
      container
      spacing={3}
      // justifyContent="center"
      mt={2}
    >
      {features.map((feature, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} sx={{display: 'flex'}}>
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
            elevation={4}
            sx={{
              p: 1,
              // py:1,  
              // px:2,
              borderRadius: 3,
              height: '100%',
              // minHeight: '120px',
              // maxHeight: '140px',
              width: '100%',
              display:'flex',
              flexDirection:'column',
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.06)",
              backdropFilter: "blur(10px)",
              color: "white",
              transition: "all 0.3s ease",
              cursor: "pointer",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 8px 24px rgbrgba(19, 18, 23, 0.3)",
                // background: "rgba(255, 255, 255, 0.04)",
                borderColor: "rgba(255, 255, 255, 0.15)",
              },
            }}
          >
            <CardContent sx={{flexGrow:1}}>
            <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          // mb: 2.5,
                        }}
                      >
            <Box>{feature.icon}</Box>
            <Typography variant="body1" fontWeight={600}>
              {feature.title}
            </Typography>
            </Box>
            <Typography variant="body2" sx={{ opacity: 0.8, lineHeight: 1 }}>
              {feature.description}
            </Typography>
            </CardContent>
          </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid> */}

    {/* Trusted Companies Section */}
<Box sx={{ mt: 4 }}>
  <Typography
    variant="subtitle1"
    sx={{
      color: "white",
      fontWeight: 500,
      mb: 3,
      fontSize: "1rem",
      textAlign: {xs: 'center', sx:'left', md:'left'},
      position: "relative",
      // pl: 1,
    }}
  >
    Trusted by 5,000+ teams across industries
  </Typography>

  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      gap: 4,
      justifyContent: { xs: "center", sm: "center", md: "flex-start" },
      alignItems: "center",
    }}
  >
    {[
      { name: "GlobalTech", icon: <PublicIcon /> },
      { name: "SecureNet", icon: <SecurityIcon /> },
      { name: "DataFlow", icon: <FlashOnIcon /> },
      { name: "BusinessPro", icon: <WorkIcon /> },
      { name: "HealthFirst", icon: <FavoriteIcon /> },
    ].map((company, index) => (
      <Box
        key={index}
        sx={{
          minWidth: 100,
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            backdropFilter: "blur(6px)",
            borderRadius: "50%",
            p: 1.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 1,
            width: 40,
            height: 40,
          }}
        >
          <Box sx= {{ color: "#C2C2FF", fontSize: 28 }}>
            {company.icon}
          </Box>
        </Box>
        <Typography
          variant="body2"
          sx={{ color: "white", opacity: 0.8, textAlign: "center", fontSize: "0.85rem" }}
        >
          {company.name}
        </Typography>
      </Box>
    ))}
  </Box>
</Box>

  </Grid>

  {/* Right Image Content */}
  <Grid item xs={12} md={5} sx={{ position: "relative" }}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      viewport={{ once: true }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src="/images/hero-img.png" 
        alt="Task Master Preview"
        sx={{
          width: "100%",
          // maxWidth: "500px",
          // borderRadius: 4,
          // boxShadow: "0 0 40px rgba(0,0,0,0.5)",
        }}
      />

      {/* {animatedCards.map((card, index) => (
                <motion.div
                  key={index}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2 + index, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    padding: "12px 10px",
                    borderRadius: "12px",
                    color: "white",
                    fontSize: "0.74rem",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    boxShadow: "0 0 12px rgba(255,255,255,0.2)",
                    backdropFilter: "blur(6px)",
                    zIndex: 2,
                    ...card.style,
                  }}
                >
                  {card.icon} {card.label}
                </motion.div>
              ))} */}
    </motion.div>
  </Grid>
</Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
