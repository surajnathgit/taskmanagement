"use client"
import React, { use } from 'react'
import { Box, Container, Typography, Grid, Card, CardContent, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const AboutSection = () => {
    const theme = useTheme();
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #1a1a40 0%, #2d1b69 100%)",
        color: "white",
        py: { xs: 8, md: 20 },
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            gutterBottom
            sx={{ color: theme.palette.primary.main }}
          >
            About Task Master
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, opacity: 0.9, textAlign: "justify" }}>
            Task Master is a modern project management platform built for high-performing
            teams. It empowers users to organize work, collaborate effectively, and deliver
            results on time — all through a smart, AI-enhanced interface. Whether you’re a
            startup or a growing enterprise, Task Master helps streamline operations without
            adding complexity.
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    background:
                      "linear-gradient(135deg, #4E36FF 0%, #7C3AED 100%)",
                    color: "white",
                    borderRadius: 4,
                    boxShadow: "0 8px 30px rgba(78, 54, 255, 0.4)",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      gutterBottom
                    >
                      Our Mission
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.95, textAlign: "justify" }}>
                      To simplify project management by providing teams with
                      intelligent, intuitive tools that drive clarity, focus,
                      and collaboration — so they can spend less time organizing
                      work and more time creating impact.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    background:
                      "linear-gradient(135deg, #4E36FF 0%, #7C3AED 100%)",
                    color: "white",
                    borderRadius: 4,
                    boxShadow: "0 8px 30px rgba(124, 58, 237, 0.4)",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      gutterBottom
                    >
                      Our Vision
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.95, textAlign: "justify" }}>
                      We envision a world where teams operate in perfect sync-
                      where technology fades into the background & managing
                      tasks becomes effortless. Task Master is our step toward
                      building that future.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  )
}

export default AboutSection;
