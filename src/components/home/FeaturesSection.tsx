// "use client";
// import {
//   Box,
//   Container,
//   Grid,
//   Typography,
//   Paper,
//   Card,
//   CardContent,
//   useTheme,
// } from "@mui/material";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import GroupsIcon from "@mui/icons-material/Groups";
// import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// import HubIcon from "@mui/icons-material/Hub";
// import SyncIcon from "@mui/icons-material/Sync";
// import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
// import { motion } from "framer-motion";

// const features = [
//   {
//     icon: <AutoAwesomeIcon sx={{fontSize:"40"}} />,
//     title: "AI-Powered Prioritization",
//     description: "Ranks tasks based on urgency, deadlines, and workload.",
//   },
//   {
//     icon: <IntegrationInstructionsIcon sx={{fontSize:"40"}} />,
//     title: "Integrations",
//     description: "Connect with tools like Google Drive, and more.",
//   },
//   {
//     icon: <GroupsIcon sx={{fontSize:"40"}} />,
//     title: "Seamless Collaboration",
//     description: "Communicate with chat and file sharing in-app.",
//   },
//   {
//     icon: <TrendingUpIcon sx={{fontSize:"40"}}/>,
//     title: "Progress Tracking",
//     description: "Visualize milestones and task progress easily.",
//   },

//   {
//     icon: <HubIcon sx={{fontSize:"40"}} />,
//     title: "Custom Workflows",
//     description: "Build and automate flows to fit team's process.",
//   },
//   {
//     icon: <SyncIcon sx={{fontSize:"40"}} />,
//     title: "Real-Time Sync",
//     description: "All updates are synced across team instantly.",
//   },
// ];

// const commonGradients = [
//   "linear-gradient(135deg, #4E36FF 0%, #7C3AED 100%)",
//   "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)",
//   "linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)",
//   "linear-gradient(135deg, #45B7D1 0%, #2196F3 100%)",
//   "linear-gradient(135deg, #F7931E 0%, #FF9800 100%)",
//   "linear-gradient(135deg, #96CEB4 0%, #4CAF50 100%)",
//   "linear-gradient(135deg, #D63384 0%, #E91E63 100%)",
//   "linear-gradient(135deg, #20C997 0%, #17A2B8 100%)",
// ];

// const KeyFeaturesSection = () => {
//   const theme = useTheme();

//   const floatingBubblesVariants = {
//     animate: {
//       y: [0, -15, 0],
//       transition: { duration: 5, ease: "easeInOut", repeat: Infinity },
//     },
//   };

//   return (
//     <Box
//       sx={{
//         py: { xs: 8, md: 12 },
//         background: "linear-gradient(135deg, #1a1a40 0%, #2d1b69 100%)",
//         color: "white",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Animated Background Elements */}
//       <Box
//         sx={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           pointerEvents: "none",
//           zIndex: 0,
//         }}
//       >
//         {[...Array(15)].map((_, i) => (
//           <motion.div
//             key={i}
//             style={{
//               position: "absolute",
//               width: Math.random() * 8 + 4,
//               height: Math.random() * 8 + 4,
//               borderRadius: "50%",
//               background: commonGradients[i % commonGradients.length],
//               opacity: 0.3,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               x: [0, Math.random() * 200 - 100],
//               y: [0, Math.random() * 200 - 100],
//               scale: [1, Math.random() + 0.5, 1],
//             }}
//             transition={{
//               duration: 10 + Math.random() * 20,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </Box>

//       {/* Existing Animated Background Elements */}
//       <Box
//         sx={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           zIndex: 0,
//           overflow: "hidden",
//         }}
//       >
//         {[...Array(6)].map((_, i) => (
//           <motion.div
//             key={i}
//             variants={floatingBubblesVariants}
//             animate="animate"
//             custom={i}
//             style={{
//               position: "absolute",
//               width: `${30 + Math.random() * 70}px`,
//               height: `${30 + Math.random() * 70}px`,
//               borderRadius: "50%",
//               background: "rgba(78, 54, 255, 0.05)",
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               zIndex: 0,
//             }}
//           />
//         ))}
//       </Box>

//       <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
//         <Box sx={{ textAlign: "center", mb: 8 }}>
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             viewport={{ once: true }}
//           >
//             <Typography
//               variant="h3"
//               fontWeight="bold"
//               sx={{
//                 mb: 3,
//                 color: theme.palette.primary.main,
//               }}
//             >
//               Key Features
//             </Typography>
//           </motion.div>
//         </Box>

//         <Grid container spacing={4}>
//           {features.map((feature, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', flexDirection: 'column'  }}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1, duration: 0.6 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5 }}
//               >
//                 <Paper
//                   elevation={1}
//                   sx={{
//                     p: 4,
//                     background: "rgba(255,255,255,0.06)",
//                     borderRadius: 3,
//                     // height: 220, // <-- FIXED height here
//                     height: "100%",
//                     display: "flex",
//                     flexDirection: "column",
//                     backdropFilter: "blur(10px)",
//                     transition: "transform 0.3s",
//                     overflow: "hidden",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: 'center',
//                       // alignItems: "flex-start",
//                       mb: 2,
//                       gap: 2,
//                       flexGrow: 1
//                       // color: 'primary.main'
//                     }}
//                   >
//                     <Box sx={{ color: theme.palette.primary.main}}>
//                       {feature.icon}
//                     </Box>
//                     <Typography
//                       variant="subtitle1"
//                       fontWeight="bold"
//                       gutterBottom
//                       sx={{ color: "white" }}
//                     >
//                       {feature.title}
//                     </Typography>
//                   </Box>

//                   <Box sx={{ flexGrow: 1 }}>
//                   <Typography
//                     variant="body1"
//                     sx={{ opacity: 0.85, color: "white" }}
//                   >
//                     {feature.description}
//                   </Typography>
//                   </Box>
//                 </Paper>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default KeyFeaturesSection;

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
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupsIcon from "@mui/icons-material/Groups";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import HubIcon from "@mui/icons-material/Hub";
import SyncIcon from "@mui/icons-material/Sync";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import { motion } from "framer-motion";

const features = [
  {
    icon: <AutoAwesomeIcon sx={{fontSize:"40"}} />,
    title: "AI-Powered Prioritization",
    description: "Ranks tasks based on urgency, deadlines, and workload.",
  },
  {
    icon: <IntegrationInstructionsIcon sx={{fontSize:"40"}} />,
    title: "Integrations",
    description: "Connect with tools like Google Drive, and more.",
  },
  {
    icon: <GroupsIcon sx={{fontSize:"40"}} />,
    title: "Seamless Collaboration",
    description: "Communicate with chat and file sharing in-app.",
  },
  {
    icon: <TrendingUpIcon sx={{fontSize:"40"}}/>,
    title: "Progress Tracking",
    description: "Visualize milestones and task progress easily.",
  },

  {
    icon: <HubIcon sx={{fontSize:"40"}} />,
    title: "Custom Workflows",
    description: "Build and automate flows to fit team's process.",
  },
  {
    icon: <SyncIcon sx={{fontSize:"40"}} />,
    title: "Real-Time Sync",
    description: "All updates are synced across team instantly.",
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                mb: 3,
                color: theme.palette.primary.main,
              }}
            >
              Key Features
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                style={{ width: '100%'}}
              >
                <Card
                  elevation={1}
                  sx={{
                    p: 2,
                    background: "rgba(255,255,255,0.06)",
                    borderRadius: 3,
                    width: '100%',
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backdropFilter: "blur(10px)",
                    transition: "transform 0.3s",
                    overflow: "hidden",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: 'center',
                      mb: 1,
                      gap: 2,
                    }}
                  >
                    <Box sx={{ color: theme.palette.primary.main}}>
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ color: "white", mb:2 }}
                    >
                      {feature.title}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{ opacity: 0.85, color: "white" }}
                  >
                    {feature.description}
                  </Typography>
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
