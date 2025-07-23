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
import {
  TipsAndUpdates,
  AutoAwesome,
  Settings,
  Alarm,
  RocketLaunch,
  AutoGraph,
} from "@mui/icons-material";
import {
  AutoAwesomeMotion,
  AccessTime,
  Forum,
  TrackChanges,
  Troubleshoot,
  FolderCopy,
} from "@mui/icons-material";
import {
  DashboardOutlined,
  AddTask,
  InsertChartOutlined,
} from "@mui/icons-material";
import {
  TaskAltRounded,
  GroupRounded,
  AutoAwesomeRounded,
  ChecklistRounded,
} from "@mui/icons-material";
import {
  CreateRounded,
  ManageSearchRounded,
  DateRangeRounded,
  NotesRounded,
} from "@mui/icons-material";
import {
  ArticleRounded,
  DonutLargeRounded,
  CategoryRounded,
  AutorenewRounded,
} from "@mui/icons-material";
import Image from "next/image";

const features = [
  {
    title: "Smart Prioritization",
    desc: "AI auto-ranks tasks by urgency and workload.",
    icon: <AutoAwesomeMotion />,
  },
  {
    title: "Deadline Insights",
    desc: "AI suggests realistic deadlines in real time.",
    icon: <AccessTime />,
  },
  {
    title: "Built-in Collaboration",
    desc: "Chat, comment, and share—all in one place.",
    icon: <Forum />,
  },
  {
    title: "Milestone Tracking",
    desc: "Stay aligned with clear goals and checkpoints.",
    icon: <TrackChanges />,
  },
  {
    title: "Predictive Progress",
    desc: "Get early warnings for delays or risks.",
    icon: <Troubleshoot />,
  },
  {
    title: "File Management",
    desc: "Upload and access files right in your tasks.",
    icon: <FolderCopy />,
  },
];

const steps = [
  {
    step: 1,
    heading: "Dashboard Overview",
    description:
      "Get a comprehensive view of all your tasks with our intuitive dashboard. See assigned tasks, received tasks, and track progress at a glance. Whether working solo or with a team, the dashboard keeps your tasks clear and organized. Navigate our clean, user-friendly interface built for seamless experience every step of the way.",
    features: [
      { text: "Unified Task View", icon: <TaskAltRounded /> },
      { text: "Team Collaboration", icon: <GroupRounded /> },
      { text: "Clean & Intuitive Interface", icon: <AutoAwesomeRounded /> },
      { text: "Task organization", icon: <ChecklistRounded /> },
    ],
    img: "/images/Dashboard-mockup.png",
    icon: <DashboardOutlined sx={{ color: "#fff", fontSize: 28 }} />,
    bg: "linear-gradient(to left bottom, #3f83ec, #1a70ef, #005cef, #0044ec, #1324e6)",
    boxShadow:
      "0 10px 30px rgba(0, 92, 239, 0.5), 0 4px 15px rgba(63, 131, 236, 0.35)",
    stepTextColor: "#5625f5",
  },
  {
    step: 2,
    heading: "Quick Task Creation",
    description:
      "Create new tasks with ease using our intuitive interface. Our streamlined task creation interface allows you to quickly add task details, assign team members, set deadlines, and include comprehensive multi-line descriptions. Designed for speed and clarity, our task creation process helps your team stay organized and take action faster.",
    features: [
      { text: "Effortless task input", icon: <CreateRounded /> },
      { text: "Employee search", icon: <ManageSearchRounded /> },
      { text: "Smart Due Date Picker", icon: <DateRangeRounded /> },
      { text: "Multi-line support", icon: <NotesRounded /> },
    ],
    img: "/images/Add-task-mockup.png",
    icon: <AddTask sx={{ color: "#fff", fontSize: 28 }} />,
    bg: "linear-gradient(to right top, #a666ff, #ac54e7, #af41ce, #ae2bb6, #ab0d9e)",
    boxShadow:
      "0 10px 30px rgba(171, 13, 158, 0.5), 0 4px 15px rgba(166, 102, 255, 0.35)",
    stepTextColor: "#AB0D9E",
  },
  {
    step: 3,
    heading: "Task Insights & Progress",
    description:
      "Stay on top of your workload with our detailed task views and organized tracking system. Effortlessly switch between pending, completed, and all tasks using intuitive tabs and visual indicators. Track task status, deadlines, and completion metrics in real time, with automatic updates providing clear insights into your progress and productivity.",
    features: [
      { text: "Detailed task cards", icon: <ArticleRounded /> },
      { text: "Status overview", icon: <DonutLargeRounded /> },
      { text: "Organized tabs", icon: <CategoryRounded /> },
      { text: "Efficient updates", icon: <AutorenewRounded /> },
    ],
    img: "/images/Task-status-mockup.png",
    icon: <InsertChartOutlined sx={{ color: "#fff", fontSize: 28 }} />,
    bg: "linear-gradient(to right top, #6b00ff, #7b27f7, #883bef, #924ce7, #9a5cdf)",
    boxShadow:
      "0 10px 30px rgba(123, 39, 247, 0.5), 0 4px 15px rgba(107, 0, 255, 0.3)",
    stepTextColor: "#9725f5",
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
          py: 6,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Container maxWidth="lg">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4 , ease: "easeOut"}}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: "center", mb: 2 }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  // mt: 2,
                  fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3.5rem" },
                  background: "linear-gradient(90deg, #4E36FF, #FF6B6B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Explore Task Master
              </Typography>
            </Box>

            {/* Overview */}
            <Typography
              variant="body1"
              textAlign="center"
              sx={{
                maxWidth: 900,
                mx: "auto",
                mb: 2,
                fontSize: {
                  xs: "0.9rem",
                  sm: "1rem",
                  md: "1rem",
                },
              }}
            >
              Explore how Task Master’s intuitive design and smart features help
              your team stay organized, meet deadlines, and work more
              efficiently—every step of the way.
            </Typography>
          </motion.div>
        </Container>

        <Box sx={{ py: { xs: 6, md: 6 } }}>
          <Container
            maxWidth={false}
            sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 } }}
          >
            {steps.map((step, index) => (
              <Grid
                key={index}
                container
                spacing={6}
                direction={{
                  xs: "column",
                  md: index % 2 === 0 ? "row" : "row-reverse",
                }}
                alignItems="center"
                mb={{
                  xs: 6,
                  md: index < steps.length - 1 ? 16 : 12,
                }}
              >
                {/* Text Section */}
                <Grid item xs={12} md={6} sx={{ pl: { md: 6 } }}>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: step.step === 1 ? 0.2 : 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      {/* Icon box */}
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: 3,
                          background: step.bg,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: step.boxShadow,
                          mr: 2.5,
                        }}
                      >
                        {step.icon}
                      </Box>

                      {/* Step Chip */}
                      <Box
                        sx={{
                          px: 2,
                          py: 0.5,
                          borderRadius: 999,
                          backgroundColor: "#7160f628",
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ color: step.stepTextColor, fontWeight: 700 }}
                        >
                          Step {step.step} of {steps.length}
                        </Typography>
                      </Box>
                    </Box>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: step.step === 1 ? 0.35 : 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                    >
                    <Typography
                      variant="h3"
                      fontWeight={800}
                      sx={{
                        mb: 2,
                        fontSize: {
                          xs: "1.5rem", 
                          sm: "1.75rem",
                          md: "2.25rem",
                        },
                      }}
                    >
                      {step.heading}
                    </Typography>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: step.step === 1 ? 0.45 : 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                    >
                    <Typography
                      variant="body1"
                      color="#ffffffd1"
                      sx={{
                        mb: 3,
                        fontSize: {
                          xs: "0.9rem",
                          sm: "1rem",
                          md: "1rem",
                        },
                      }}
                    >
                      {step.description}
                    </Typography>
                    </motion.div>

                    {/* Features */}
                    <Grid container spacing={2}>
                      {step.features.map((feature, i) => (
                        <Grid item xs={12} sm={6} key={i}>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: step.step === 1 ? 0.55 + i * 0.1 : i * 0.1}}
                            viewport={{ once: true, amount: 0.4 }}
                          >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 1.5,
                            }}
                          >
                            <Box
                              sx={{
                                width: 35,
                                height: 35,
                                minWidth: 35,
                                minHeight: 35,
                                flexShrink: 0,
                                borderRadius: 3,
                                background: step.bg,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              {feature.icon}
                            </Box>
                            <Typography
                              variant="body1"
                              sx={{
                                color: "#ffffff",
                                fontSize: {
                                  xs: "0.9rem",
                                  sm: "1rem",
                                },
                                fontWeight: 500,
                                mt: 0.8,
                                lineHeight: 1.3,
                              }}
                            >
                              {feature.text}
                            </Typography>
                          </Box>
                          </motion.div>
                        </Grid>
                      ))}
                    </Grid>
                </Grid>

                {/* Image Section */}
                <Grid item xs={12} md={6}>
                  <motion.div
                     initial={{
                     opacity: 0,
                     x: index === 1 ? -100 : 100, 
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.25,  ease: "easeOut" }}
                  >
                    <Box
                      sx={{
                        borderRadius: 4,
                        // overflow: "hidden",
                        width: "100%",
                        maxWidth: { xs: "100%", md: "1000px" },
                        mx: "auto",
                      }}
                    >
                      <Box sx={{ position: "relative" }}>
                        <Box
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "120%",
                            height: "120%",
                            borderRadius: "50%",
                            background:
                              "radial-gradient(circle, #4e36ff33, transparent 70%)",
                            filter: "blur(60px)",
                            zIndex: 0,
                          }}
                        />
                        <Box sx={{ position: "relative", zIndex: 1 }}>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            style={{ width: "100%" }}
                          >
                          <Image
                            src={step.img}
                            alt={step.heading}
                            width={3000}
                            height={1200}
                            quality={100}
                            priority
                            style={{
                              width: "100%",
                              height: "auto",
                              transform: "scale(1)",
                              transformOrigin: "center", // keep it centered
                              objectFit: "cover",
                            }}
                          />
                          </motion.div>
                        </Box>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              </Grid>
            ))}
          </Container>
        </Box>

        {/* Video Demo Section */}
        {/* <Container maxWidth="lg">
          <Box sx={{ mb: 12 }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h3"
                fontWeight="bold"
                textAlign="center"
                mb={2}
                sx={{
                  background:
                    "linear-gradient(90deg, #4E36FF 0%, #900BFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: {
                    xs: "1.75rem", 
                    sm: "2rem",    
                    md: "2.5rem",  
                  },
                }}
              >
                See Task Master in Action
              </Typography>
              <Typography
                variant="body1"
                textAlign="center"
                mb={4}
                sx={{ maxWidth: 600, mx: "auto",  fontSize: {
                  xs: "0.875rem", 
                  sm: "1rem",     
                } }}
              >
               Watch a quick overview of how Task Master boosts productivity and teamwork with AI-powered insights.
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
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: 'none'
                  }}
                ></iframe>
              </Box>
            </motion.div>
          </Box> */}

          {/* Key Features Section */}
          <Container maxWidth="lg">
          <Box sx={{ mb: 12 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h3"
                fontWeight="bold"
                textAlign="center"
                sx={{
                  background:
                    "linear-gradient(90deg, #4E36FF 0%, #900BFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 2,
                  fontSize: {
                    xs: "1.75rem", 
                    sm: "2rem",    
                    md: "2.5rem",  
                  },
                }}
              >
                Key Features
              </Typography>
              <Typography
                variant="body1"
                textAlign="center"
                mb={4}
                sx={{ maxWidth: 700, mx: "auto", fontSize: {
                  xs: "0.9rem", 
                  sm: "1rem",     
                }}}
              >
                Your solution to Smarter Task Management
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
                        p: 3,
                        "&:hover": {
                          boxShadow: "0 6px 24px rgba(13, 25, 184, 0.34)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          mb: 2.5,
                        }}
                      >
                        <Box
                          sx={{
                            background:
                              "linear-gradient(135deg, #4E36FF, #900BFF)",
                            width: 38,
                            height: 38,
                            borderRadius: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 4px 12px rgba(144, 11, 255, 0.35)",
                          }}
                        >
                          <Typography
                            sx={{ fontSize: 20, color: "#fff", mt: 1 }}
                          >
                            {feature.icon}
                          </Typography>
                        </Box>

                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          sx={{ color: "white" }}
                        >
                          {feature.title}
                        </Typography>
                      </Box>

                      {/* Description */}
                      <Typography
                        variant="body2"
                        sx={{ opacity: 0.9, color: "white" }}
                      >
                        {feature.desc}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* What Makes Us Different */}
          <Box sx={{ mt: 16, mb: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h3"
                fontWeight="bold"
                textAlign="center"
                sx={{
                  background:
                    "linear-gradient(90deg, #4E36FF 0%, #900BFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 2,
                  fontSize: {
                    xs: "1.75rem", 
                    sm: "2rem",    
                    md: "2.5rem",  
                  },
                }}
              >
                What Sets Task Master Apart?
              </Typography>
              <Typography
                variant="body1"
                textAlign="center"
                mb={4}
                sx={{ maxWidth: 700, mx: "auto", fontSize: {
                  xs: "0.875rem", 
                  sm: "1rem",     
                } }}
              >
                Discover how Task Master goes beyond basic task management to
                simplify, automate, and elevate your workflow.
              </Typography>
            </motion.div>

            <Box sx={{ maxWidth: 900, mx: "auto", mb: 4 }}>
              <Grid container spacing={3}>
                {[
                  {
                    icon: <TipsAndUpdates sx={{ fontSize: "30px" }} />,
                    title: "Thinks Ahead",
                    desc: "AI suggests priorities and predicts risks.",
                    bg: "linear-gradient(135deg, #D63384, #E91E63)",
                  },
                  {
                    icon: <AutoAwesome sx={{ fontSize: "30px" }} />,
                    title: "All-in-One",
                    desc: "Chat, share files, assign & automate tasks.",
                    bg: "linear-gradient(135deg, #96CEB4, #4CAF50)",
                  },
                  {
                    icon: <Settings sx={{ fontSize: "30px" }} />,
                    title: "No-Code Rules",
                    desc: "Create workflows without writing code.",
                    bg: "linear-gradient(135deg, #FF6B6B, #FF8E53)",
                  },
                  {
                    icon: <Alarm sx={{ fontSize: "30px" }} />,
                    title: "Risk Alerts",
                    desc: "Get notified of delays before they happen.",
                    bg: "linear-gradient(135deg,  #AB47BC, #8E24AA)",
                  },
                  {
                    icon: <RocketLaunch sx={{ fontSize: "30px" }} />,
                    title: "Easy Onboarding",
                    desc: "Start fast with zero learning curve.",
                    bg: "linear-gradient(135deg, #45B7D1, #2196F3)",
                  },
                  {
                    icon: <AutoGraph sx={{ fontSize: "30px" }} />,
                    title: "Scalable",
                    desc: "Grows with teams of any size.",
                    bg: "linear-gradient(135deg, #7B61FF, #FF47B6)",
                  },
                ].map((item, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    key={index}
                    sx={{ display: "flex" }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 40, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.2 + Math.floor(index / 3) * 0.2,
                        ease: "easeOut",
                      }}
                      whileHover={{ scale: 1.03 }}
                      style={{ width: "100%", transformOrigin: "center" }}
                    >
                      <Card
                        elevation={2}
                        sx={{
                          background: "rgba(255, 255, 255, 0.05)",
                          borderRadius: 5,
                          p: 1,
                          textAlign: "center",
                          height: "100%",
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          transition:
                            "transform 0.3s ease, box-shadow 0.3s ease",
                          "&:hover": {
                            boxShadow: "0 6px 24px rgba(10, 10, 10, 0.34)",
                          },
                          "&:hover .description": {
                            color: "white",
                          },
                        }}
                      >
                        <CardContent
                          sx={{
                            flexGrow: 1,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            textAlign: "center",
                          }}
                        >
                          <Box
                            sx={{
                              background: item.bg,
                              width: 50,
                              height: 50,
                              borderRadius: 2,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              mb: 2,
                              boxShadow: "0 4px 20px rgba(144, 11, 255, 0.35)",
                            }}
                          >
                            <Typography
                              mb={1}
                              sx={{
                                color: "white",
                                mt: 2,
                                transition: "all 0.3s ease",
                              }}
                            >
                              {item.icon}
                            </Typography>
                          </Box>
                          <Typography
                            variant="h6"
                            fontWeight="600"
                            color="white"
                            gutterBottom
                            sx={{ transition: "all 0.3s ease" }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            className="description"
                            variant="body2"
                            sx={{ color: "rgba(255,255,255,0.8)" }}
                          >
                            {item.desc}
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ProductDemoPage;
