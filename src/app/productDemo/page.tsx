"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SettingsIcon from '@mui/icons-material/Settings';
import AlarmIcon from '@mui/icons-material/Alarm';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import {AutoAwesomeMotion,AccessTime,Forum,TrackChanges,Troubleshoot,FolderCopy} from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";

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

const productSteps = [
  {
    step: "01",
    title: "Access Your Dashboard",
    description:
      "Get a full overview of your team's tasks, deadlines, and activity logs in one place. Task Master’s dashboard centralizes productivity insights with a clean, intuitive UI.",
    features: [
      "Real-time analytics",
      "Performance insights",
      "Cross-platform access",
      "Visual reporting"
    ],
    image: "/images/Dashboard mockup.png",          
    alt: "Dashboard Overview"
  },
  {
    step: "02",
    title: "Track Assigned and Received Tasks",
    description:
      "Easily view your assigned and received tasks in real-time, categorized for clarity. Get rid of clutter and focus on what matters most with personalized task streams.",
    features: [
      "Clear task segregation",
      "Interactive status tracking",
      "Quick communication tools",
      "Calendar-integrated view"
    ],
    image: "/images/Add task mockup222.png", 
    alt: "Assigned vs Received Tasks"
  }
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
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
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
                See Task Master in Action
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
              sx={{ maxWidth: 900, mx: "auto", mb: 4 }}
            >
              Explore our intuitive interface and discover how effortless task management can be. See how Task Master transforms your team's productivity and streamlines your workflow management.            
              </Typography>
          </motion.div>
          </Container>

      <Container maxWidth="xl">
      <Box
      sx={{
        // bgcolor: "#0d1028", 
        // py: { xs: 6, md: 10 },
        // px: { xs: 2, md: 0 },
      }}
    >
      {productSteps.map((step, index) => {
        const isEven = index % 2 === 0;
        return (
          <Box key={index} sx={{ px: { xs: 2, md: 6 } }}> 
          {/* <Card
      key={index}
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        background: "rgba(68, 30, 57, 0.58)", // subtle glass background
        backdropFilter: "blur(8px)",
        // border: "1px solid rgba(255, 255, 255, 0.06)",
        boxShadow: "0 8px 24px rgba(166, 102, 255, 0.15)",
        px: { xs: 2, md: 6 },
        // py: { xs: 6, md: 8 },
        mb: 8,
        // width: '1200px',
        // transition: "transform 0.3s ease",
        // "&:hover": {
        //   transform: "scale(1.01)",
        //   boxShadow: "0 8px 32px rgba(255, 107, 107, 0.2)",
        // }
      }}
    > */}
          <Grid
            container
            key={index}
            spacing={6}
            direction={isEven ? "row" : "row-reverse"}
            alignItems="center"
            sx={{
              // mb: 8,
              // px: { xs: 2, md: 8 }
            }}
          >
            {/* Content */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Box sx={{ mb: 2, display: "flex", alignItems: "center", gap: 2 }}>
                  <Chip
                    label={step.step}
                    sx={{
                      fontWeight: 700,
                      background: "linear-gradient(to right, #A666FF, #FF6B6B)",
                      color: "white",
                      fontSize: "1rem",
                      px: 2
                    }}
                  />
                  {/* <Chip
                    icon={<VisibilityIcon />}
                    label="View"
                    sx={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      color: "#C2C2FF"
                    }}
                  /> */}
                </Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, color: "white", mb: 2 }}
                >
                  {step.title}
                </Typography>
                <Typography
                  sx={{ color: "#C2C2FF", mb: 2, lineHeight: 1.6, textAlign: 'justify' }}
                >
                  {step.description}
                </Typography>
                <Typography
                  sx={{ fontWeight: 600, color: "white", mb: 1 }}
                >
                  Key Features:
                </Typography>
                <Grid container spacing={1}>
                  {step.features.map((feature, idx) => (
                    <Grid item xs={12} sm={6} key={idx}>
                      <Typography
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          color: "#6EF5A7",
                          fontWeight: 500
                        }}
                      >
                        ✅ &nbsp;
                        <span style={{ color: "#C2C2FF" }}>{feature}</span>
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </Grid>

            {/* Image */}
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {/* <Card
                  sx={{
                    // borderRadius: 4,
                    overflow: "hidden",
                    backgroundColor: "transparent",
                    // boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                    p: 1
                  }}
                >
                  <CardContent
                    sx={{
                      p: 0
                    }}
                  > */}
                  <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end", // pushes image to the right
        // pr: { xs: 0, sm: 2, md: 2 }, // optional extra spacing on the right
        ml: 2
      }}
    >
                    <Box
                      component="img"
                      src={step.image}
                      alt={step.alt}
                      sx={{
                        width: "100%", // make image fill available width responsively
    maxWidth: {
      xs: "95%",      // almost full width on extra-small screens
      sm: "90%",      // slightly reduced width on small screens
      md: "700px",    // fixed upper bounds on medium screens and up
      lg: "800px",
      xl: "1000px"
    },
                        height: "auto",
                        mx: "auto",
                        borderRadius: 2,
                        objectFit: "cover",
                        backgroundColor: "transparent",
                      }}
                    />
                  {/* </CardContent>
                </Card> */}
                </Box>
              </motion.div>
            </Grid>
          </Grid>
          {/* </Card> */}
          </Box>
        );
      })}
    </Box>
    </Container>

            {/* RIGHT IMAGE SIDE */}
        {/* <Grid item xs={12} md={6}>
          <Box
            sx={{
              maxWidth: 950,
              mx: "auto",
              // borderRadius: 2,
              overflow: "hidden",
              // boxShadow: 5,
              // border: "1px solid #1e293b",
            }}
          >
            <Image
              src="/images/task master dashboard.png"
              alt="Task Master Dashboard"
              width={900}
              height={900}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "8px",
              }}
            />
          </Box>
        </Grid> */}

          {/* Video Demo Section */}
          <Container maxWidth="lg">
          <Box sx={{ mt:12, mb: 12}}>
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
                sx={{background: "linear-gradient(90deg, #4E36FF 0%, #900BFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"}}
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
          <Box sx={{ mt:12, mb: 12}}>
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
              sx={{               background: "linear-gradient(90deg, #4E36FF 0%, #900BFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
               mb: 2 }}
            >
              Key Features
            </Typography>
            <Typography variant="body1"
                textAlign="center"
                mb={4}
                sx={{ maxWidth: 700, mx: "auto" }}>
                  Your solution to Smarter Task Management
                </Typography>
          </motion.div>

<Grid container spacing={4} sx={{ mb: 10 }}>
  {features.map((feature, index) => (
    <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
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
            '&:hover': {
            boxShadow: '0 6px 24px rgba(13, 25, 184, 0.34)',
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
                background: "linear-gradient(135deg, #4E36FF, #900BFF)",
                width: 38,
                height: 38,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(144, 11, 255, 0.35)",
              }}
            >
              <Typography sx={{fontSize: 20, color: "#fff", mt:1 }}>
              {feature.icon}
              </Typography>
            </Box>

            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: 'white' }}
            >
              {feature.title}
            </Typography>
          </Box>

          {/* Description */}
          <Typography variant="body2" sx={{ opacity: 0.9, color: "white" }}>
            {feature.desc}
          </Typography>
        </Card>
      </motion.div>
    </Grid>
  ))}
</Grid>
          </Box>

          {/* What Makes Us Different */}
          <Box sx={{ mt:12, mb: 6}}>
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
              sx={{background: "linear-gradient(90deg, #4E36FF 0%, #900BFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
               mb: 2 }}
            >
              What Sets Task Master Apart?
            </Typography>
            <Typography
                variant="body1"
                textAlign="center"
                mb={4}
                sx={{ maxWidth: 700, mx: "auto" }}
              >
                Discover how Task Master goes beyond basic task management to simplify, automate, and elevate your workflow.
            </Typography>
          </motion.div>

          <Box sx={{ maxWidth: 900, mx: "auto",mb:4 }}>
<Grid container spacing={3}>
  {[
    {
      icon: <TipsAndUpdatesIcon sx={{fontSize: '30px'}} />,
      title: "Thinks Ahead",
      desc: "AI suggests priorities and predicts risks.",
      bg: "linear-gradient(135deg, #D63384, #E91E63)"
    },
    {
      icon: <AutoAwesomeIcon sx={{fontSize: '30px'}}/>,
      title: "All-in-One",
      desc: "Chat, share files, assign & automate tasks.",
      bg: "linear-gradient(135deg, #96CEB4, #4CAF50)"
    },
    {
      icon: <SettingsIcon sx={{fontSize: '30px'}}/>,
      title: "No-Code Rules",
      desc: "Create workflows without writing code.",
      bg: "linear-gradient(135deg, #FF6B6B, #FF8E53)"
    },
    {
      icon: <AlarmIcon sx={{fontSize: '30px'}}/>,
      title: "Risk Alerts",
      desc: "Get notified of delays before they happen.",
      bg: "linear-gradient(135deg,  #AB47BC, #8E24AA)"
    },
    {
      icon: <RocketLaunchIcon sx={{fontSize: '30px'}}/>,
      title: "Easy Onboarding",
      desc: "Start fast with zero learning curve.",
      bg: "linear-gradient(135deg, #45B7D1, #2196F3)"
    },
    {
      icon: <AutoGraphIcon sx={{fontSize: '30px'}}/>,
      title: "Scalable",
      desc: "Grows with teams of any size.",
      bg: "linear-gradient(135deg, #7B61FF, #FF47B6)"
    },
  ].map((item, index) => (
    <Grid item xs={12} sm={6} md={4} key={index} sx={{display: 'flex'}}>
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
      style={{width: "100%", transformOrigin: "center"}}
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
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          '&:hover': {
            boxShadow: '0 6px 24px rgba(10, 10, 10, 0.34)',
          },
          '&:hover .description' : {
            color: "white"
          }
        }}
      >
        <CardContent sx={{flexGrow: 1, display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          textAlign: "center"}}>
        <Box sx={{
          background: item.bg,
          width: 50,
          height: 50,
          borderRadius: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2,
          boxShadow: '0 4px 20px rgba(144, 11, 255, 0.35)',}}>
        <Typography mb={1} sx={{color: 'white',mt:2,transition: "all 0.3s ease"}}>
          {item.icon}
        </Typography>
        </Box>
        <Typography variant="h6" fontWeight="600" color="white" gutterBottom sx={{transition:"all 0.3s ease"}}>
          {item.title}
        </Typography>
        <Typography className="description" variant="body2" sx={{ color: "rgba(255,255,255,0.8)" }}>
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
