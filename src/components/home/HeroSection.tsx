"use client";
import React, {useState}  from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Stack,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { motion } from "framer-motion";
import {Bolt, Work, Security, FlashOn, Public, Favorite } from "@mui/icons-material";
import ParticleBackground from "../animations/ParticleBackground";
import ScheduleDemoModal from "../common/ScheduleDemoModal";

const HeroSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [demoOpen, setDemoOpen] = useState(false);
  
  return (
    <>
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
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
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
                    py: { xs: 0.4, sm: 0.5 },
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
                    boxShadow: `0 4px 12px #4E36FF22`, 
                  }}
                >
                  <Bolt
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
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
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
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
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
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    py: { xs: 1.1, sm: 1.2, md: 1.5 },
                    px: { xs: 2.5, sm: 3.5, md: 4 },
                    fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                    background: "linear-gradient(90deg, #4E36FF, #900BFF)",
                    color: "white",
                    borderRadius: "30px",
                    boxShadow: "0 4px 14px rgba(78, 54, 255, 0.4)",
                    transition: "transform 0.3s ease, box-shadow 0.3 ease",
                    "&:hover": {
                      transform: "scale(1.06)",
                      boxShadow: "0 6px 20px rgba(78, 54, 255, 0.6)",
                    },
                  }}
                  onClick={() => setDemoOpen(true)}
                >
                  Book a Free Demo
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  sx={{
                    py: { xs: 1.1, sm: 1.2, md: 1.5 },
                    px: { xs: 2.5, sm: 3.5, md: 4 },
                    fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                    color: "white",
                    borderRadius: "30px",
                    borderColor: "rgba(255,255,255,0.3)",
                    transition: "transform 0.3s ease, border-color 0.3s ease, background-color 0.3s ease",
                    transformOrigin: "center",
                    willChange: "transform",
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
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
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
                  { name: "BusinessPro", icon: Work, color: "#02B8FA" },
                  { name: "SecureNet", icon: Security, color: "#AB0D9E" },
                  { name: "DataFlow", icon: FlashOn, color: "#A666FF" },
                  { name: "HealthFirst", icon: Favorite, color: "#FF6B81" },
                  { name: "GlobalTech", icon: Public, color: "#4545DE" },
                    ].map((company, index) => (
                    <motion.div
                       key={index}
                       initial={{ opacity: 0, y: 40, scale: 0.9 }}
                       whileInView={{ opacity: 1, y: 0, scale: 1 }}
                       viewport={{ once: true }}
                       transition={{
                       duration: 0.6,
                       delay: 0.7 + index * 0.1,
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
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: `0 4px 12px ${company.color}44`, 
                        mx: "auto",
                        mb: 1,
                        width: 48,    
                        height: 48,
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        transformOrigin: "center",
                        willChange: "transform",
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
          <Grid item xs={12} md={5} sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: { xs: 3, sm: 4, md: 0 },
          }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9,  delay: isSmallScreen ? 1.8 : 0.8 }}
              viewport={{ once: true }}             
            >
              <Box
                component={motion.div}
                animate={{
                  y: [0, -12, 0],
                  rotateZ: [0, 0.8, 0, -0.8, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                sx={{
                  width: "100%",
                  maxWidth: { xs: 320, sm: 400, md: 560 },
                  height: "auto",
                  mx: "auto",
                }}
              >
              <Box
                component="img"
                src="/images/hero-img.png"
                alt="Task Master Preview"
                sx={{
                  width: "100%",
                  height: "auto",
                   objectFit: "contain"
                }}
              />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>

    <ScheduleDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
};

export default HeroSection;