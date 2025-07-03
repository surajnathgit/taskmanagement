"use client";
import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Stack,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import ParticleBackground from "../animations/ParticleBackground";

const HeroSection = () => {
  const theme = useTheme();
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsVisible(true);
  //   }, 500);
  //   return () => clearTimeout(timer);
  // }, []);

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
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "3rem", md: "3.8rem" },
                  mb: 3,
                  color: "#4E36FF",
                }}
              >
                Task Master
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "1.6rem", md: "2rem" },
                  mb: 5,
                  color: "white",
                }}
              >
                Manage Smarter. Collaborate Faster.
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
                  fontSize: { xs: "1.1rem", md: "1.3rem" },
                  mb: 4,
                  opacity: 0.9,
                  textAlign: "center",
                  maxWidth: { xs: "90%", sm: "80%", md: "80%" },
                  mx: "auto",
                }}
              >
                Streamline your team’s productivity with intelligent task
                prioritization, smart deadline suggestions, and real-time
                collaboration tools — all in one powerful platform.
              </Typography>
            </motion.div>

            {/* <Stack >
              <motion.div
                variants={itemVariants}
                style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent:"center", alignItems:"center" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    py: 1.5,
                    px: 4,
                    borderRadius: 2,
                  }}
                >
                  Book Demo
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  sx={{
                    py: 1.5,
                    px: 4,
                    color: "white",
                    borderColor: "rgba(255,255,255,0.3)",
                    borderWidth: 2,
                    borderRadius: 2,
                    "&:hover": {
                      borderColor: "white",
                      bgcolor: "rgba(255,255,255,0.05)",
                    },
                  }}
                >
                  Learn More
                </Button>
              </motion.div>
              </Stack> */}
          </Grid>
        </Grid>
        {/* </motion.div> */}
      </Container>
    </Box>
  );
};

export default HeroSection;
