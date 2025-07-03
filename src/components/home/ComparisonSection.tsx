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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
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
        </motion.div>
      </Container>
    </Box>
  )
}

export default ComparisonSection