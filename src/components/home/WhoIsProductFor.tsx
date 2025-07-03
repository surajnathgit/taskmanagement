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

const WhoIsProductFor = () => {
  const theme = useTheme();

    const segments = [
    {
  title: "Startups & Growing Teams",
  desc: "Keeps teams organized, on time, and scaling fast.",
},
{
  title: "Agencies & Creative Firms",
  desc: "Simplifies collaboration, sharing, and project tracking.",
},
{
  title: "Enterprise Project Managers",
  desc: "Manages workflows and automates tasks at scale.",
},
{
  title: "Remote & Hybrid Teams",
  desc: "Enables real-time collaboration across time zones.",
},
{
  title: "Freelancers & Consultants",
  desc: "All-in-one space for client work and deadlines.",
},
{
  title: "Community Groups",
  desc: "Helps organize volunteers and track impact.",
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
            sx={{ color: theme.palette.primary.main}}
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
            Task Master is built for modern teams of all shapes and sizes — from individual
            freelancers to enterprise-scale operations. Here’s who benefits most:
          </Typography>

          <Grid container spacing={4}>
            {segments.map((segment, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <motion.div
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8 }}
                          viewport={{ once: true }}
                        >
                  <Card
                    sx={{
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: 3,
                      minHeight: 140,
                      display: "flex",
                      // flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ color: "#A78BFA" }}
                      >
                        {segment.title}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9, color: "white" }}>
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