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
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {/* Left Text Content */}
          <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
              <Box
                sx={{
                  display: { xs: "flex", sm: "block", md: "block" },
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    px: { xs: 1.5, sm: 2 },
                    py: { xs: 0.4, sm: 0.6 },
                    borderRadius: "50px",
                    fontSize: { xs: "0.72rem", sm: "0.82rem", md: "0.9rem" },
                    fontWeight: 600,
                    background: "rgba(60, 54, 187, 0.18)",
                    border: "0.5px solid rgb(22, 13, 91)",
                    color: "#C2C2FF",
                    width: { xs: "225px", sm: "fit-content" },
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    mb: 2,
                  }}
                >
                  <BoltIcon
                    sx={{ fontSize: 18, color: "#A666FF", flexShrink: 0 }}
                  />
                  <Box
                    component="span"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      display: "inline-block",
                    }}
                  >
                    AI-Powered Task Management
                  </Box>
                </Box>
              </Box>
              </motion.div>
              
              <motion.div
              initial={{ opacity: 0, scale: 1.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "2.2rem", sm: "2.6rem", md: "3.5rem" },
                  textAlign: { xs: "center", sm: "left", md: "left" },
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
                  fontWeight: "bold",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  mb: 4,
                  opacity: 0.9,
                  textAlign: { xs: "center", sm:"left", md: "left" },
                  maxWidth: { xs: "100%", sm: "80%", md: "90%" },
                  // mx: "auto",
                }}
              >
                Streamline your team’s productivity with Task Master — featuring
                intelligent task prioritization, smart deadline suggestions, and
                real-time collaboration tools, all in one powerful platform.
              </Typography>
            </motion.div>

            {/* Buttons */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              justifyContent={{
                xs: "center",
                sm: "flex-start",
                md: "flex-start",
              }}
              alignItems={{ xs: "center", sm: "flex-start", md: "flex-start" }}
              sx={{ mt: 2 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    py: 1.5,
                    px: 4,
                    borderRadius: "30px",
                    background: "linear-gradient(90deg, #4E36FF, #900BFF)",
                    color: "white",
                    fontSize: "1.1rem",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.06)",
                    },
                  }}
                >
                  Book a Free Demo
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
              >
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    py: 1.5,
                    px: 4,
                    color: "white",
                    fontSize: "1.1rem",
                    borderColor: "rgba(255,255,255,0.3)",
                    borderRadius: "30px",
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

            {/* Trusted Companies Section */}
            <Box sx={{ mt: 4 }}>
              <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
  viewport={{ once: true }}
>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "white",
                  fontWeight: 500,
                  mb: 3,
                  fontSize: "1rem",
                  textAlign: { xs: "center", sm: "left", md: "left" },
                  // position: "relative",
                  // pl: 1,
                }}
              >
                Trusted by 5,000+ teams across industries
              </Typography>
              </motion.div>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  justifyContent: {
                    xs: "center",
                    sm: "left",
                    md: "flex-start",
                  },
                  alignItems: "center",
                }}
              >
                {[
                  { name: "BusinessPro", icon: WorkIcon, color: "#02B8FA" },
  { name: "SecureNet", icon: SecurityIcon, color: "#AB0D9E" },
  { name: "DataFlow", icon: FlashOnIcon, color: "#A666FF" },
  { name: "HealthFirst", icon: FavoriteIcon, color: "#FF6B81" },
  { name: "GlobalTech", icon: PublicIcon, color: "#4545DE" },
                ].map((company, index) => (
                  <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                      duration: 0.6,
                                      delay: 1.2 + index * 0.2,
                                      ease: "easeOut",
                                    }}
                                  >
                  <Box
                    key={index}
                    sx={{
                      minWidth: 100,
                      textAlign: "center",
                      "&:hover .icon-box": {
                      transform: "translateY(-4px) scale(1.2)",
                      boxShadow: `0 6px 20px ${company.color}55`, 
                    },
                    }}
                  >
                    <Box
                      className="icon-box"
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
                        transition: "all 0.3s ease",
                      }}
                    >
                      <company.icon sx={{ color: company.color, fontSize: 28 }} />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "white",
                        opacity: 0.8,
                        textAlign: "center",
                        fontSize: "0.85rem",
                      }}
                    >
                      {company.name}
                    </Typography>
                  </Box>
                  </motion.div>
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
  component={motion.div}
  animate={{
    y: [0, -6, 0],
    rotateZ: [0, 0.8, 0, -0.8, 0],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  sx={{
    position: "relative",
    width: "100%",
    maxWidth: { xs: 320, sm: 400, md: 600 },
    height: "auto",
    mx: "auto",
    aspectRatio: "4 / 3",
  }}
>
              <Box
                component="img"
                src="/images/hero-img.png"
                alt="Task Master Preview"
                sx={{
                  width: "100%",
                  height: "auto",
                }}
              />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;