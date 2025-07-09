// "use client"
// import React, { use } from 'react'
// import { Box, Container, Typography, Grid, Card, CardContent, useTheme } from "@mui/material";
// import { motion } from "framer-motion";

// const AboutSection = () => {
//     const theme = useTheme();
//   return (
//     <Box
//       id="about"
//       sx={{
//         background: "linear-gradient(135deg, #1a1a40 0%, #2d1b69 100%)",
//         color: "white",
//         py: { xs: 8, md: 22 },
//         textAlign: "center",
//         overflow: "hidden",
//       }}
//     >
//       <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3 } }}>
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay:0.2, ease: "easeOut" }}
//           viewport={{ once: true }}
//         >
//           <Typography
//             variant="h2"
//             fontWeight="bold"
//             sx={{
//               background: "linear-gradient(90deg, #4E36FF 0%, #900BFF 100%)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               mb: 4
//             }}
//            >
//             About Task Master
//           </Typography>

//           <Typography variant="body1" sx={{ mb: 6, opacity: 0.9, wordBreak: "break-word", }}>
//             Task Master is a modern project management platform built for high-performing
//             teams. It empowers users to organize work, collaborate effectively, and deliver
//             results on time — all through a smart, AI-enhanced interface. Whether you’re a
//             startup or a growing enterprise, Task Master helps streamline operations without
//             adding complexity.
//           </Typography>
//           </motion.div>

//           <Grid container spacing={4}>
//             <Grid item xs={12} md={6}>
//               <motion.div
//                               initial={{ x: -100, opacity: 0 }}
//                               whileInView={{ x: 0, opacity: 1 }}
//                               whileHover={{ scale: 1.03 }}
//                               transition={{ duration: 0.6, ease: "easeOut" }}
//                               viewport={{ once: true }}                           
//                             >
//                 <Card
//                   sx={{
//                     background:
//                       "linear-gradient(135deg, #4E36FF 0%, #7C3AED 100%)",
//                     color: "white",
//                     borderRadius: 4,
//                     boxShadow: "0 8px 30px rgba(78, 54, 255, 0.4)",
//                   }}
//                 >
//                   <CardContent>
//                     <Typography
//                       variant="h5"
//                       fontWeight="bold"
//                       gutterBottom
//                     >
//                       Our Mission
//                     </Typography>
//                     <Typography variant="body1" sx={{ opacity: 0.95, textAlign: "justify" }}>
//                       To simplify project management by providing teams with
//                       intelligent, intuitive tools that drive clarity, focus,
//                       and collaboration — so they can spend less time organizing
//                       work and more time creating impact.
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>

//             <Grid item xs={12} md={6}>
//               <motion.div
//                               initial={{ x: 100, opacity: 0 }}
//                               whileInView={{ x: 0, opacity: 1 }}
//                               whileHover={{ scale: 1.03 }}
//                               transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
//                               viewport={{ once: true }}                           
//                             >
//                 <Card
//                   sx={{
//                     background:
//                       "linear-gradient(135deg, #4E36FF 0%, #7C3AED 100%)",
//                     color: "white",
//                     borderRadius: 4,
//                     boxShadow: "0 8px 30px rgba(124, 58, 237, 0.4)",
//                   }}
//                 >
//                   <CardContent>
//                     <Typography
//                       variant="h5"
//                       fontWeight="bold"
//                       gutterBottom
//                     >
//                       Our Vision
//                     </Typography>
//                     <Typography variant="body1" sx={{ opacity: 0.95, textAlign: "justify" }}>
//                       We envision a world where teams operate in perfect sync-
//                       where technology fades into the background & managing
//                       tasks becomes effortless. Task Master is our step toward
//                       building that future.
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           </Grid>
//       </Container>
//     </Box>
//   )
// }

// export default AboutSection;

// "use client";
// import React from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   useTheme,
// } from "@mui/material";
// import { motion } from "framer-motion";

// const AboutSection = () => {
//   const theme = useTheme();

//   return (
//     <Box
//       id="about"
//       sx={{
//         position: "relative",
//         background: "linear-gradient(135deg, #1a1a40 0%, #2d1b69 100%)",
//         color: "white",
//         py: { xs: 8, md: 22 },
//         overflow: "hidden",
//       }}
//     >
//       {/* Abstract Background Blur Elements */}
//       <Box
//         sx={{
//           position: "absolute",
//           width: 300,
//           height: 300,
//           top: -50,
//           left: -80,
//           bgcolor: "#4E36FF",
//           opacity: 0.15,
//           filter: "blur(120px)",
//           zIndex: 0,
//         }}
//       />
//       <Box
//         sx={{
//           position: "absolute",
//           width: 300,
//           height: 300,
//           bottom: -60,
//           right: -100,
//           bgcolor: "#900BFF",
//           opacity: 0.15,
//           filter: "blur(120px)",
//           zIndex: 0,
//         }}
//       />

//       <Container
//         maxWidth="md"
//         sx={{ position: "relative", zIndex: 1, px: { xs: 2, sm: 3 } }}
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//           viewport={{ once: true }}
//         >
//           <Typography
//             variant="h2"
//             fontWeight="bold"
//             sx={{
//               background: "linear-gradient(90deg, #4E36FF 0%, #900BFF 100%)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               mb: 4,
//               position: "relative",
//               display: "inline-block",
//               "&::after": {
//                 content: '""',
//                 position: "absolute",
//                 left: "50%",
//                 bottom: -8,
//                 width: 60,
//                 height: 4,
//                 background: "linear-gradient(90deg, #4E36FF, #900BFF)",
//                 borderRadius: 2,
//                 transform: "translateX(-50%)",
//               },
//             }}
//           >
//             About Task Master
//           </Typography>

//           <Typography
//             variant="body1"
//             sx={{
//               mb: 6,
//               opacity: 0.9,
//               textAlign: "center",
//               maxWidth: 720,
//               mx: "auto",
//               fontSize: "1.1rem",
//               lineHeight: 1.8,
//             }}
//           >
//             Task Master is a cutting-edge project management platform crafted
//             for agile and high-performing teams. Organize, prioritize, and
//             execute with clarity — powered by intelligent automation and a
//             beautiful user interface. Whether you're scaling a startup or
//             leading enterprise initiatives, Task Master transforms workflows
//             without the chaos.
//           </Typography>
//         </motion.div>

//         <Grid container spacing={4}>
//           {/* Mission Card */}
//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ x: -100, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.6, ease: "easeOut" }}
//               viewport={{ once: true }}
//             >
//               <Card
//                 sx={{
//                   background: "rgba(78, 54, 255, 0.12)",
//                   borderRadius: 4,
//                   border: "1px solid rgba(124, 58, 237, 0.3)",
//                   backdropFilter: "blur(15px)",
//                   color: "white",
//                   boxShadow: "0 8px 40px rgba(78, 54, 255, 0.3)",
//                 }}
//               >
//                 <CardContent>
//                   <Typography variant="h5" fontWeight="bold" gutterBottom>
//                     Our Mission
//                   </Typography>
//                   <Typography
//                     variant="body1"
//                     sx={{ opacity: 0.95, textAlign: "justify" }}
//                   >
//                     To simplify project management by providing teams with
//                     intelligent, intuitive tools that drive clarity, focus,
//                     and collaboration — so they can spend less time organizing
//                     work and more time creating impact.
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </Grid>

//           {/* Vision Card */}
//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ x: 100, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               <Card
//                 sx={{
//                   background: "rgba(78, 54, 255, 0.12)",
//                   borderRadius: 4,
//                   border: "1px solid rgba(124, 58, 237, 0.3)",
//                   backdropFilter: "blur(15px)",
//                   color: "white",
//                   boxShadow: "0 8px 40px rgba(124, 58, 237, 0.3)",
//                 }}
//               >
//                 <CardContent>
//                   <Typography variant="h5" fontWeight="bold" gutterBottom>
//                     Our Vision
//                   </Typography>
//                   <Typography
//                     variant="body1"
//                     sx={{ opacity: 0.95, textAlign: "justify" }}
//                   >
//                     We envision a world where teams operate in perfect sync —
//                     where technology fades into the background & managing
//                     tasks becomes effortless. Task Master is our step toward
//                     building that future.
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default AboutSection;


// "use client";
// import React from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   useTheme,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import GroupsIcon from "@mui/icons-material/Groups";
// import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
// import SmartToyIcon from "@mui/icons-material/SmartToy";

// const AboutSection = () => {
//   const theme = useTheme();

//   const stats = [
//     {
//       icon: <GroupsIcon sx={{ fontSize: 40 }} />,
//       value: "20K+",
//       label: "Teams Empowered",
//     },
//     {
//       icon: <RocketLaunchIcon sx={{ fontSize: 40 }} />,
//       value: "45%",
//       label: "Productivity Boost",
//     },
//     {
//       icon: <SmartToyIcon sx={{ fontSize: 40 }} />,
//       value: "1M+",
//       label: "Tasks Automated by AI",
//     },
//   ];

//   return (
//     <Box
//       id="about"
//       sx={{
//         position: "relative",
//         background: "linear-gradient(135deg, #1a1a40 0%, #2d1b69 100%)",
//         color: "white",
//         py: { xs: 8, md: 22 },
//         overflow: "hidden",
//       }}
//     >
//       {/* Blurred Background Shapes */}
//       <Box
//         sx={{
//           position: "absolute",
//           width: 300,
//           height: 300,
//           top: -50,
//           left: -80,
//           bgcolor: "#4E36FF",
//           opacity: 0.15,
//           filter: "blur(120px)",
//           zIndex: 0,
//         }}
//       />
//       <Box
//         sx={{
//           position: "absolute",
//           width: 300,
//           height: 300,
//           bottom: -60,
//           right: -100,
//           bgcolor: "#900BFF",
//           opacity: 0.15,
//           filter: "blur(120px)",
//           zIndex: 0,
//         }}
//       />

//       <Container
//         maxWidth="md"
//         sx={{ position: "relative", zIndex: 1, px: { xs: 2, sm: 3 } }}
//       >
//         {/* Title + Description */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//           viewport={{ once: true }}
//         >
//           <Typography
//             variant="h2"
//             fontWeight="bold"
//             sx={{
//               background: "linear-gradient(90deg, #4E36FF 0%, #900BFF 100%)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               mb: 4,
//               position: "relative",
//               display: "inline-block",
//               "&::after": {
//                 content: '""',
//                 position: "absolute",
//                 left: "50%",
//                 bottom: -8,
//                 width: 60,
//                 height: 4,
//                 background: "linear-gradient(90deg, #4E36FF, #900BFF)",
//                 borderRadius: 2,
//                 transform: "translateX(-50%)",
//               },
//             }}
//           >
//             About Task Master
//           </Typography>

//           <Typography
//             variant="body1"
//             sx={{
//               mb: 6,
//               opacity: 0.9,
//               textAlign: "center",
//               maxWidth: 720,
//               mx: "auto",
//               fontSize: "1.1rem",
//               lineHeight: 1.8,
//             }}
//           >
//             Task Master is a cutting-edge project management platform crafted
//             for agile and high-performing teams. Organize, prioritize, and
//             execute with clarity — powered by intelligent automation and a
//             beautiful user interface. Whether you're scaling a startup or
//             leading enterprise initiatives, Task Master transforms workflows
//             without the chaos.
//           </Typography>
//         </motion.div>

//         {/* Mission & Vision Cards */}
//         <Grid container spacing={4}>
//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ x: -100, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.6, ease: "easeOut" }}
//               viewport={{ once: true }}
//             >
//               <Card
//                 sx={{
//                   background: "rgba(78, 54, 255, 0.12)",
//                   borderRadius: 4,
//                   border: "1px solid rgba(124, 58, 237, 0.3)",
//                   backdropFilter: "blur(15px)",
//                   color: "white",
//                   boxShadow: "0 8px 40px rgba(78, 54, 255, 0.3)",
//                 }}
//               >
//                 <CardContent>
//                   <Typography variant="h5" fontWeight="bold" gutterBottom>
//                     Our Mission
//                   </Typography>
//                   <Typography variant="body1" sx={{ opacity: 0.95, textAlign: "justify" }}>
                    // To simplify project management by providing teams with
                    // intelligent, intuitive tools that drive clarity, focus,
                    // and collaboration — so they can spend less time organizing
                    // work and more time creating impact.
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </Grid>

//           <Grid item xs={12} md={6}>
//             <motion.div
//               initial={{ x: 100, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               <Card
//                 sx={{
//                   background: "rgba(78, 54, 255, 0.12)",
//                   borderRadius: 4,
//                   border: "1px solid rgba(124, 58, 237, 0.3)",
//                   backdropFilter: "blur(15px)",
//                   color: "white",
//                   boxShadow: "0 8px 40px rgba(124, 58, 237, 0.3)",
//                 }}
//               >
//                 <CardContent>
//                   <Typography variant="h5" fontWeight="bold" gutterBottom>
//                     Our Vision
//                   </Typography>
//                   <Typography variant="body1" sx={{ opacity: 0.95, textAlign: "justify" }}>
                    // We envision a world where teams operate in perfect sync —
                    // where technology fades into the background & managing
                    // tasks becomes effortless. Task Master is our step toward
                    // building that future.
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </Grid>
//         </Grid>

//         {/* Supremacy Stats */}
//         <Box sx={{ mt: 10, textAlign: "center" }}>
//           <Typography
//             variant="h5"
//             sx={{
//               mb: 4,
//               fontWeight: 600,
//               color: "white",
//               opacity: 0.9,
//               letterSpacing: 1,
//               textTransform: "uppercase",
//             }}
//           >
//             Why Task Master?
//           </Typography>

//           <Grid container spacing={4} justifyContent="center">
//             {stats.map((item, i) => (
//               <Grid item xs={12} sm={4} key={item.label}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.2 + i * 0.2 }}
//                   viewport={{ once: true }}
//                 >
//                   <Card
//                     sx={{
//                       background: "rgba(255, 255, 255, 0.05)",
//                       borderRadius: 4,
//                       textAlign: "center",
//                       p: 4,
//                       backdropFilter: "blur(10px)",
//                       border: "1px solid rgba(255,255,255,0.1)",
//                       boxShadow: "0 4px 20px rgba(255, 255, 255, 0.05)",
//                       color: "white",
//                     }}
//                   >
//                     <Box mb={2}>{item.icon}</Box>
//                     <Typography variant="h4" fontWeight="bold">
//                       {item.value}
//                     </Typography>
//                     <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
//                       {item.label}
//                     </Typography>
//                   </Card>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default AboutSection;

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
                      color: "white",
                      borderRadius: 4,
                      border: "1px solid rgba(255,255,255,0.1)",
                      boxShadow: "0 8px 30px rgba(255, 255, 255, 0.08)",
                      p:2
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
                    building that future.                      </Typography>
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

