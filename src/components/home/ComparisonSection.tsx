"use client"
import React from "react";
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
  Paper,
  useTheme
} from "@mui/material";
import { motion } from "framer-motion";

const ComparisonSection = () => {
    const theme = useTheme();
    
    const data = [
    {
    feature: "AI task prioritization",
    taskMaster:
        "Ranks tasks using AI based on urgency, deadlines, and workload.",
      comp1:
        "Manual prioritization only.",
      comp2:
        "Some automation, no real-time AI.",
  },
  {
    feature: "Smart deadlines",
    taskMaster: "Suggests deadlines based on workload and team capacity.",
    comp1: "Manual deadline entry.",
    comp2: "No dynamic suggestions.",
  },
  {
    feature: "Workflow automation",
    taskMaster: "Fully customizable workflows with automation rules.",
    comp1: "Limited templates, low flexibility.",
    comp2: "Basic workflows, no advanced automation.",
  },
  {
    feature: "Team collaboration",
    taskMaster: "Built-in chat, file sharing, and comments.",
    comp1: "Requires third-party tools.",
    comp2: "Limited sharing and poor integration.",
  },
  {
    feature: "Progress tracking",
     taskMaster: "Forecasts delays using predictive analytics.",
    comp1: "Manual tracking only.",
    comp2: "No predictive insights.",
  },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #1a1a40 0%, #2d1b69 100%)",
        color: "white",
        py: { xs: 8, md: 12 },
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            gutterBottom
            sx={{ color: theme.palette.primary.main,}}
          >
            How Task Master Compares
          </Typography>

          <Typography
            variant="body1"
            sx={{
              opacity: 0.85,
              mb: 4,
              textAlign: "center",
              maxWidth: 800,
              mx: "auto",
            }}
          >
            See how Task Master stacks up against the competition. With built-in intelligence,
            flexible automation, and unmatched usability — it's the smart choice for modern teams.
          </Typography>
          </motion.div>
          
          <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
          <TableContainer
            component={Paper}
            sx={{
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: 3,
              overflowX: "auto",
            }}
          >
            <Table>
              <TableHead sx={{ backgroundColor: "#381e5e"}}>
                <TableRow  >
                  <TableCell sx={{ color: "white", fontWeight: "bold",fontSize: "16px", width: "20%", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.1)", }}>Feature</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold",fontSize: "16px", width: "25%", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.1)", }}>
                    Task Master
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold",fontSize: "16px", width: "25%", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.1)", }}>Competitor 1</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold",fontSize: "16px", width: "25%", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.1)", }}>Competitor 2</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow key={index} sx={{
                      "&:hover": {
                        backgroundColor: "rgba(78, 54, 255, 0.05)",
                      },
                      transition: "background 0.3s ease",
                    }}>
                    <TableCell sx={{ color: "white", textAlign: "center",fontWeight: "bold", borderRight: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.1)", }}>{row.feature}</TableCell>
                    <TableCell sx={{ color: "white", borderRight: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.1)", }}>{row.taskMaster}</TableCell>
                    <TableCell sx={{ color: "white", borderRight: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.1)", }}>{row.comp1}</TableCell>
                    <TableCell sx={{ color: "white", height: "100%", borderBottom: "1px solid rgba(255,255,255,0.1)", }}>{row.comp2}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </motion.div> */}

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
            sx={{ color: theme.palette.primary.main,}}
          >
             Transformation With Task Master
          </Typography>

          <Typography
            variant="body1"
            sx={{
              opacity: 0.85,
              mb: 4,
              textAlign: "center",
              maxWidth: 800,
              mx: "auto",
            }}
          >
          An enterprise-ready solution that goes beyond task tracking — optimized for productivity and clarity.
          </Typography>
          </motion.div>
          
          <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
<Grid container spacing={4}>
  {/* Before Implementation */}
  <Grid item xs={12} md={6}>
    <Paper
      sx={{
        bgcolor: 'rgba(211, 47, 47, 0.05)',
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 3,
        p: 4,
        height: "100%",
        boxShadow: "0 0 10px rgba(255, 0, 0, 0.1)",
                textAlign: "left"
      }}
    >
      <Typography variant="h6" fontWeight="bold" sx={{ color: "#ff4c4c", mb: 1 }}>
        ⚠️ Before Implementation
      </Typography>
      <Typography variant="subtitle2" sx={{ mb: 2, color: "rgba(255,255,255,0.7)" }}>
        Manual Project Coordination
      </Typography>

      <Typography fontWeight="bold" sx={{ color: "white", mb: 1 }}>
        Current Challenges:
      </Typography>
      <ul style={{ color: "rgba(255,255,255,0.9)", paddingLeft: "1.4em", marginBottom: "1.5em" }}>
        {[
          "Email-based task assignments",
          "Spreadsheet project tracking",
          "Unclear task priorities",
          "Poor visibility into workloads",
          "Missed deadlines and deliverables",
          "Inefficient resource allocation",
        ].map((item, i) => (
          <li key={i} style={{ marginBottom: 6 }}>{item}</li>
        ))}
      </ul>

      <Box sx={{
        backgroundColor: "rgba(255, 0, 0, 0.08)",
        borderRadius: 2,
        p: 2.5,
      }}>
        <Typography fontWeight="bold" sx={{ color: "#ff4c4c", mb: 1 }}>
          Key Pain Points:
        </Typography>
        <ul style={{ color: "rgba(255,255,255,0.9)", paddingLeft: "1.4em" }}>
          {[
            "30% of projects miss deadlines",
            "Limited visibility into team capacity",
            "Frequent task conflicts and overlaps",
            "Manual status reporting overhead",
          ].map((point, i) => (
            <li key={i} style={{ marginBottom: 6 }}>{point}</li>
          ))}
        </ul>
      </Box>
    </Paper>
  </Grid>

  {/* After Implementation */}
  <Grid item xs={12} md={6}>
    <Paper
      sx={{
        bgcolor: 'rgba(18, 21, 63, 0.05)',
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 3,
        p: 4,
        height: "100%",
        boxShadow: "0 0 10px rgba(0, 255, 100, 0.08)",
        textAlign: "left"
      }}
    >
      <Typography variant="h6" fontWeight="bold" sx={{ color: "#00e676", mb: 1 }}>
        ✅ After Implementation
      </Typography>
      <Typography variant="subtitle2" sx={{ mb: 2, color: "rgba(255,255,255,0.7)" }}>
        AI-Optimized Task Management
      </Typography>

      <Typography fontWeight="bold" sx={{ color: "white", mb: 1 }}>
        New Capabilities:
      </Typography>
      <ul style={{ color: "rgba(255,255,255,0.9)", paddingLeft: "1.4em", marginBottom: "1.5em" }}>
        {[
          "Automated task assignment and prioritization",
          "Real-time project tracking and updates",
          "AI-driven priority optimization",
          "Complete workload visibility",
          "Proactive deadline management",
          "Intelligent resource allocation",
        ].map((item, i) => (
          <li key={i} style={{ marginBottom: 6 }}>{item}</li>
        ))}
      </ul>

      <Box sx={{
        backgroundColor: "rgba(0, 255, 100, 0.06)",
        borderRadius: 2,
        p: 2.5,
      }}>
        <Typography fontWeight="bold" sx={{ color: "#00e676", mb: 1 }}>
          Achieved Improvements:
        </Typography>
        <ul style={{ color: "rgba(255,255,255,0.9)", paddingLeft: "1.4em" }}>
          {[
            "95% on-time project delivery",
            "Complete team capacity visibility",
            "Optimized task distribution",
            "Automated status reporting",
          ].map((point, i) => (
            <li key={i} style={{ marginBottom: 6 }}>{point}</li>
          ))}
        </ul>
      </Box>
    </Paper>
  </Grid>
</Grid>
        </motion.div>
      </Container>
    </Box>
  )
}

export default ComparisonSection