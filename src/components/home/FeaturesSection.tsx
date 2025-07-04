"use client";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupsIcon from "@mui/icons-material/Groups";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import HubIcon from "@mui/icons-material/Hub";
import SyncIcon from "@mui/icons-material/Sync";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import { motion } from "framer-motion";

import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import DeviceHubOutlinedIcon from '@mui/icons-material/DeviceHubOutlined';
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined';
import ViewKanbanOutlinedIcon from '@mui/icons-material/ViewKanbanOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

const features = [
  {
    icon: <BorderColorOutlinedIcon sx={{fontSize: '45px'}} />,
    title: "Intuitive Task Creation with rich descriptions",
    description:
      "Quickly create tasks with detailed context using rich text, attachments, and tagging.",
  },
  {
    icon: <GroupAddOutlinedIcon sx={{fontSize: '45px' }}/>,
    title: "Task Assignment & Delegation with notifications",
    description:
      "Assign tasks to team members with real-time notifications and role clarity.",
  },
  {
    icon: <TrendingUpOutlinedIcon sx={{fontSize: '45px'}} />,
    title: "Progress Tracking with visual indicators",
    description:
      "Monitor task and project status through dynamic progress bars and visual cues.",
  },
  {
    icon: <NotificationsActiveOutlinedIcon sx={{fontSize: '45px'}}/>,
    title: "Automated Reminders & Notifications",
    description:
      "Never miss a deadline with intelligent, customizable reminders and alerts.",
  },
  {
     icon: <DeviceHubOutlinedIcon sx={{fontSize: '45px'}}  />,
    title: "Dependencies Management with critical path",
    description:
      "Define and manage task dependencies while tracking the critical path impact.",
  },
  {
    icon: <GradingOutlinedIcon sx={{fontSize: '45px'}} />,
    title: "Subtasks & Checklists for complex work",
    description:
      "Break down complex tasks into subtasks and actionable checklists for better control.",
  },
  {
    icon: <ViewKanbanOutlinedIcon  sx={{fontSize: '45px'}}/>,
    title: "Kanban Boards/List Views for visualization",
    description:
      "Visualize workflows with drag-and-drop Kanban boards and flexible list views.",
  },
  {
     icon: <AccessTimeOutlinedIcon sx={{fontSize: '45px'}} />,
    title: "Time Tracking with detailed logs",
    description:
      "Track time spent on tasks with precision and generate detailed time logs.",
  },
  {
     icon: <ExtensionOutlinedIcon  sx={{fontSize: '45px'}}/>,
    title: "Project Integration capabilities",
    description:
      "Seamlessly integrate with popular tools to streamline your project ecosystem.",
  },
  {
     icon: <TipsAndUpdatesOutlinedIcon sx={{fontSize: '45px'}}/>,
    title: "AI-Powered Prioritization based on deadlines",
    description:
      "Let AI intelligently reorder tasks based on urgency, workload, and deadlines.",
  },
  {
     icon: <EventAvailableOutlinedIcon sx={{fontSize: '45px'}}/>,
    title: "AI-Driven Deadline Prediction",
    description:
      "Get smart deadline forecasts powered by past trends and team productivity.",
  },
  {
    icon: <GroupsOutlinedIcon sx={{fontSize: '45px'}}/>,
    title: "Team Workload Balancing",
    description:
      "Automatically balance tasks across the team to optimize efficiency and avoid overload.",
  },
];

const commonGradients = [
  "linear-gradient(135deg, #4E36FF 0%, #7C3AED 100%)",
  "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)",
  "linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)",
  "linear-gradient(135deg, #45B7D1 0%, #2196F3 100%)",
  "linear-gradient(135deg, #F7931E 0%, #FF9800 100%)",
  "linear-gradient(135deg, #96CEB4 0%, #4CAF50 100%)",
  "linear-gradient(135deg, #D63384 0%, #E91E63 100%)",
  "linear-gradient(135deg, #20C997 0%, #17A2B8 100%)",
];

const KeyFeaturesSection = () => {
  const theme = useTheme();

  const floatingBubblesVariants = {
    animate: {
      y: [0, -15, 0],
      transition: { duration: 5, ease: "easeInOut", repeat: Infinity },
    },
  };

  return (
    
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(135deg, #1a1a40 0%, #2d1b69 100%)",
        color: "white",
        position: "relative",
        overflow: "hidden",
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
              background: commonGradients[i % commonGradients.length],
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

      {/* Existing Animated Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            variants={floatingBubblesVariants}
            animate="animate"
            custom={i}
            style={{
              position: "absolute",
              width: `${30 + Math.random() * 70}px`,
              height: `${30 + Math.random() * 70}px`,
              borderRadius: "50%",
              background: "rgba(78, 54, 255, 0.05)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              zIndex: 0,
            }}
          />
        ))}
      </Box>
      
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h1"
              fontWeight="bold"
              sx={{
                mb: 1,
                fontSize: { xs: '2.8rem', sm: '3.2rem', md: '3.5rem' },
                background: "linear-gradient(90deg, #4E36FF, #FF6B6B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Key Features
            </Typography>
            <Box 
              sx={{ 
              width: 80, 
              height: 3, 
              background: 'linear-gradient(90deg, #4E36FF, #FF6B6B)',
              mx: 'auto',
              borderRadius: '10px',
              mb: 3
            }} 
            />
            <Typography
              variant="body1"
              sx={{
                // maxWidth: 580,
                mx: "auto",
                fontSize: { xs: '1rem', sm: '1.3rem', md: '1.4rem'},
                fontWeight: 600,
                lineHeight: 1.5,
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              Built to streamline tasks, boost productivity, and support your team's goals
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                style={{ width: "100%" }}
              >
                <Card
                  elevation={1}
                  sx={{
                    px: 1,
                    background: "rgba(255,255,255,0.06)",
                    borderRadius: 3,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backdropFilter: "blur(10px)",
                    transition: "transform 0.3s, box-shadow 0.3s, border 0.3s",
                    overflow: "hidden",
                    border: "2px solid transparent",
                    '&:hover': {
                      border: '2px solid rgb(54, 38, 181)',
                      boxShadow: '0 0 20px rgba(78, 54, 255, 0.35)',
                      transform: 'translateY(-4px)',
                    },                  
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ mb: 1 }}>
                      <motion.div
                        animate={{
                          y: [0, -2, 0], 
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  mb: 2,
                  color: theme.palette.primary.main,
                  transition: "transform 0.3s ease",
                  transformOrigin: "center",
                }}
              >
                {feature.icon}
              </Box>
              </motion.div>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{ color: "white", mb: 1 }}
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ opacity: 0.85, color: "white", textAlign: "justify" }}
              >
                {feature.description}
              </Typography>
            </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default KeyFeaturesSection;
