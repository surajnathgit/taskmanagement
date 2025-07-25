"use client"
import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme
} from "@mui/material";
import { motion } from "framer-motion";
import {RocketLaunch, PhotoCameraBackOutlined, BusinessCenterOutlined, Public, HandshakeOutlined, Diversity3 } from "@mui/icons-material";

const WhoIsProductFor = () => {
  const theme = useTheme();

    const segments = [
    {
  title: "Startups & Growing Teams",
  desc: "Keeps teams organized, on time, and scaling fast.",
  icon: <RocketLaunch fontSize="medium" />,
},
{
  title: "Agencies & Creative Firms",
  desc: "Simplifies collaboration, sharing, and project tracking.",
    icon: <PhotoCameraBackOutlined fontSize="medium" />,
},
{
  title: "Enterprise Project Managers",
  desc: "Manages workflows and automates tasks at scale.",
    icon: <BusinessCenterOutlined fontSize="medium" />,
},
{
  title: "Remote & Hybrid Teams",
  desc: "Enables real-time collaboration across time zones.",
    icon: <Public fontSize="medium" />,
},
{
  title: "Freelancers & Consultants",
  desc: "All-in-one space for client work and deadlines.",
    icon: <HandshakeOutlined fontSize="medium" />,
},
{
  title: "Community Groups",
  desc: "Helps organize volunteers and track impact.",
    icon: <Diversity3 fontSize="medium" />,
}
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #2d1b69 0%, #1a1a40 100%)",
        color: "white",
        py: { xs: 8, md: 12 },
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            gutterBottom
            sx={{               background: "linear-gradient(90deg, #4E36FF 0%, #900BFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "1.8rem", sm: "2.4rem", md: "2.75rem" }
            }}
          >
            Who Is Our Product For?
          </Typography>

          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              maxWidth: 800,
              mx: "auto",
              mb: 6,
              opacity: 0.85,
            }}
          >
            Whether you're a startup founder, a project manager, or a remote team member — Task Master helps you stay focused, aligned, and in control.
          </Typography>

          <Grid container spacing={4}>
            {segments.map((segment, i) => (
              <Grid item xs={12} sm={6} md={4} key={i} sx={{display: "flex"}}>
                <motion.div
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8 }}
                          viewport={{ once: true }}
                          style={{width: '100%'}}
                        >
                  <Card
                    sx={{
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: 3,
                      height: '100%',
                      width: '100%',
                      display: "flex",
                      flexDirection: "column",
                      px: 1,
                      transition: "box-shadow 0.3 ease",
                      '&:hover': {
                        boxShadow: '0 6px 24px rgba(10, 10, 10, 0.34)',
                      },

                    }}
                  >
                    <CardContent sx={{flexGrow: 1}}>
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
                        mb:2
                      }}
                    >
                      <Typography sx={{ color: "white", mt:1 }}>{segment.icon}</Typography>
                    </Box>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ color: "white", textAlign: 'left' }}
                      >
                        {segment.title}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9, color: "white", textAlign:'left' }}>
                        {segment.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  )
}

export default WhoIsProductFor