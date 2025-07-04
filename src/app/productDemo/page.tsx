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

const features = [
  {
    title: "AI-Powered Task Prioritization",
    desc: "Automatically organizes tasks based on urgency, dependencies, and workload — so your team always knows what to focus on.",
  },
  {
    title: "Smart Deadline Suggestions",
    desc: "Uses real-time data to suggest achievable deadlines for each task, improving delivery rates and reducing deadline stress.",
  },
  {
    title: "Real-Time Collaboration",
    desc: "Built-in chat, mentions, file sharing, and task comments ensure your team communicates clearly within the platform.",
  },
  {
    title: "Milestone & Goal Tracking",
    desc: "Design personalized workflows using automation rules like task assignments, reminders, and status changes.",
  },
  {
    title: "Predictive Progress Tracking",
    desc: "Get early warnings for delays or project slowdowns with AI-powered progress prediction.",
  },
  {
    title: "Integrated File Management",
    desc: "Upload, organize, and access project files directly within each task or discussion thread-no external tools needed."
  },
];

const ProductDemoPage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        background:
          "linear-gradient(135deg, #0a0a23 0%, #1a1a40 50%, #2d1b69 100%)",
        color: "white",
        overflow: "hidden",
        paddingTop: "60px",
      }}
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: Math.random() * 8 + 4,
              height: Math.random() * 8 + 4,
              borderRadius: "50%",
              background: `linear-gradient(135deg, #4E36FF 0%, #FF6B6B 100%)`,
              opacity: 0.3,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              scale: [1, Math.random() + 0.5, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </Box>

      <Box
        sx={{
          minHeight: "100vh",
          py: 4,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Container maxWidth="lg">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
                  background: "linear-gradient(90deg, #4E36FF, #FF6B6B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",

                }}
              >
                Explore Task Master
              </Typography>
            </Box>
          </motion.div>

          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Typography
              variant="body1"
              textAlign="center"
              sx={{ maxWidth: 900, mx: "auto", mb: 6 }}
            >
              Task Master is a powerful project management solution designed for
              modern teams. It combines AI-driven features with flexible
              workflows and real-time collaboration to streamline task execution
              and enhance productivity across any organization.
            </Typography>
          </motion.div>

          {/* Product Image Grid */}
          <Grid container spacing={4}>
            {/* First Image - Full Width */}
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Task Master Overview"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>

          {/* Second & Third Sections using Grid */}
          <Grid container spacing={4} sx={{ mt: 0, mb: 8 }}>
            {/* Second Section */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                style={{
                  background: "#1a1a40",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                }}
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1661700152890-931fb04588e6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Collaborate Seamlessly"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </motion.div>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box>
                <motion.div
                  initial={{ y: 60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Typography
                    variant="h4"
                    fontWeight={600}
                    color="#A78BFA"
                    gutterBottom
                  >
                    Collaborate Seamlessly
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ textAlign: "justify" }}
                  >
                    Keep everyone on the same page with real-time communication
                    and contextual file sharing. Task Master integrates chat,
                    mentions, and file uploads directly into tasks and
                    discussions, ensuring your team collaborates efficiently
                    without switching apps.
                  </Typography>
                </motion.div>
              </Box>
            </Grid>

            {/* Third Section - Reverse Layout */}
            <Grid
              item
              xs={12}
              md={6}
              order={{ xs: 2, md: 1 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box>
                <motion.div
                  initial={{ y: 60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Typography
                    variant="h4"
                    fontWeight={600}
                    color="#A78BFA"
                    gutterBottom
                  >
                    Track Progress Smartly
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ textAlign: "justify" }}
                  >
                    AI monitors progress trends and flags delays early — so you
                    stay in control. Task Master uses predictive analytics to
                    analyze task completion patterns, alerting you to potential
                    bottlenecks before they impact deadlines.
                  </Typography>
                </motion.div>
              </Box>
            </Grid>

            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                style={{
                  background: "#1a1a40",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1455133332007-a0956e4fde21?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Track Progress Smartly"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>

          {/* Video Demo Section */}
          <Box sx={{ mt: 10, mb: 8 }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                textAlign="center"
                mb={2}
                color="primary"
              >
                See Task Master in Action
              </Typography>
              <Typography
                variant="body1"
                textAlign="center"
                mb={4}
                sx={{ maxWidth: 700, mx: "auto" }}
              >
                Watch a quick overview of how Task Master boosts productivity,
                manages your workflows, and enhances collaboration through
                real-time AI insights.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  position: "relative",
                  paddingTop: "56.25%",
                  borderRadius: 2,
                  overflow: "hidden",
                  maxWidth: "900px",
                  mx: "auto",
                  boxShadow: 6,
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/O8ivm7403rk"
                  title="Task Master Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                ></iframe>
              </Box>
            </motion.div>
          </Box>

          {/* Key Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              textAlign="center"
              sx={{ color: theme.palette.primary.main, mb: 4 }}
            >
              Key Features
            </Typography>
          </motion.div>

          <Grid container spacing={4} sx={{ mb: 10 }}>
            {features.map((feature, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                sx={{ display: "flex" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  style={{ width: "100%" }}
                >
                  <Card
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: 3,
                      p: 2,
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{ color: "#A78BFA", mb: 1 }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ opacity: 0.9, color: "white" }}
                      >
                        {feature.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* What Makes Us Different */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              textAlign="center"
              sx={{ color: theme.palette.primary.main, mb: 4 }}
            >
              What Makes Task Master Different?
            </Typography>
          </motion.div>

          <Box sx={{ maxWidth: 900, mx: "auto" }}>
            {[
              "While other tools help you organize tasks, Task Master thinks ahead — using AI to suggest priorities, predict risks, and optimize deadlines.",
              "Chat, share files, assign tasks, automate workflows — all in one seamless interface. Say goodbye to app-switching.",
              "Whether you're a freelancer or an enterprise, you can build custom workflows using intuitive, no-code automation rules.",
              "Get proactive alerts about potential delays before they happen. Task Master analyzes progress trends so you can act early.",
              "Designed with simplicity in mind, your team can hit the ground running — no lengthy training sessions or steep learning curves required.",
            ].map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <Box
                  key={index}
                  sx={{
                    background: "rgba(255,255,255,0.06)",
                    borderRadius: 2,
                    p: 3,
                    mb: 3,
                    overflow: "hidden",
                    borderLeft: "5px solid #4E36FF", 
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 4px 20px rgba(78, 54, 255, 0.2)',
                    },
                  }}
                >
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {item}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ProductDemoPage;
