"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  Divider,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import Link from "next/link";
import { motion } from "framer-motion";
import ScheduleDemoModal from "./ScheduleDemoModal";

const navItems = [
  { name: "Home", href: "/" },
  // { name: "About", href: "/#about" },
  { name: "Product Demo", href: "/productDemo" },
  // { name: "Contact Us", href: "/contact" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 960 && mobileOpen) {
      setMobileOpen(false);
    }
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, [mobileOpen]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
    
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled
            ? "linear-gradient(135deg, rgba(30, 25, 72, 0.95) 0%, rgba(45, 35, 95, 0.9) 100%)"
            : "transparent",
          backdropFilter: scrolled ? "blur(15px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(78, 54, 255, 0.3)" : "none",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          color: scrolled ? "white" : "rgba(255, 255, 255, 0.8)",
          zIndex: 1200,
        }}
      >
        <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
    >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ py: 1, display: "flex", justifyContent: "space-between" }}
          >
            <Link
              href="/"
              passHref
              style={{ textDecoration: "none", color: "white" }}
            >
              <Box sx={{ display: "flex", mr: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Task Master
                </Typography>
              </Box>
            </Link>

            {/* <Box sx={{ flexGrow: 1 }} /> */}

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexGrow: 1,
                justifyContent: "center",
              }}
            >
              {navItems.map((item) => (
                <Link href={item.href} key={item.name} passHref>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      sx={{
                        mx: 1,
                        color: scrolled ? "white" : "white",
                        "&:hover": {
                          background: "transparent",
                          color: scrolled
                            ? "primary.main"
                            : "rgba(255,255,255,0.8)",
                        },
                      }}
                    >
                      {item.name}
                    </Button>
                  </motion.div>
                </Link>
              ))}
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    // ml: 1,
                    boxShadow: "0 4px 14px rgba(78, 54, 255, 0.4)",
                    "&:hover": {
                      boxShadow: "0 6px 20px rgba(78, 54, 255, 0.6)",
                    },
                  }}
                >
                  Login
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    ml: 1,
                    boxShadow: "0 4px 14px rgba(78, 54, 255, 0.4)",
                    "&:hover": {
                      boxShadow: "0 6px 20px rgba(78, 54, 255, 0.6)",
                    },
                  }}
                  onClick={() => setDemoOpen(true)}
                >
                  Schedule Demo
                </Button>
              </motion.div>
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgba(78, 54, 255, 0.1)",
                    color: "primary.main",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </motion.div>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            maxWidth: 320,
            background:
              "linear-gradient(135deg, #0a0a23 0%, #1a1a40 50%, #2d1b69 100%)",
            color: "white",
            position: "relative",
            overflow: "hidden",
          },
        }}
      >
        <Box sx={{p:3, display: 'flex', justifyContent: 'space-between', alignItems: 'center',}}>
        <Box sx={{display: "flex",justifyContent: "flex-start"}}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "white", textAlign: 'left' }}>
            Task Master
          </Typography>
        </Box>
        <IconButton 
              onClick={handleDrawerToggle} 
              sx={{ 
                color: 'white',
                background: 'rgba(78, 54, 255, 0.1)',
                '&:hover': {
                  background: 'rgba(78, 54, 255, 0.2)',
                  color: 'primary.main'
                }
              }}
            >
              <CloseIcon />
            </IconButton>
        </Box>

        <Divider sx={{ borderColor: "rgba(78, 54, 255, 0.2)" }} />

        {/* Navigation Items */}
        <List sx={{ pt: 2, position: "relative", zIndex: 1 }}>
          {navItems.map((item, index) => (
            <ListItem key={item.name} disablePadding sx={{ mb: 0.5 }}>
              <motion.div
                custom={index + 1}
                initial="hidden"
                animate="visible"
                style={{ width: "100%", padding: "0 16px" }}
              >
                <Link
                  href={item.href}
                  passHref
                  style={{ width: "100%", textDecoration: "none" }}
                >
                  <motion.div
                    whileHover={{
                      x: 8,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.98 }}
                    style={{ width: "100%" }}
                  >
                    <Button
                      fullWidth
                      onClick={handleDrawerToggle}
                      sx={{
                        py: 2,
                        justifyContent: "flex-start",
                        pl: 3,
                        color: "rgba(255, 255, 255, 0.9)",
                        fontWeight: "500",
                        borderRadius: "8px",
                        fontSize: "1rem",
                        "&:hover": {
                          background: "rgba(78, 54, 255, 0.1)",
                          color: "white",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            left: 0,
                            top: "50%",
                            transform: "translateY(-50%)",
                            width: "3px",
                            height: "60%",
                            background:
                              "linear-gradient(to bottom, #4E36FF, #7C3AED)",
                            borderRadius: "0 2px 2px 0",
                          },
                        },
                        position: "relative",
                      }}
                    >
                      {item.name}
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </ListItem>
          ))}

          <Divider sx={{ borderColor: "rgba(78, 54, 255, 0.2)", my: 3 }} />

          <ListItem disablePadding sx={{ mt: 2 }}>
            <motion.div
              custom={navItems.length + 2}
              initial="hidden"
              animate="visible"
              style={{ width: "100%", padding: "0 16px" }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ width: "100%" }}
              >
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    py: 1,
                    mb: 2,
                    borderRadius: "12px",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    background:
                      "linear-gradient(135deg, #4E36FF 0%, #7C3AED 100%)",
                    boxShadow: "0 8px 25px rgba(78, 54, 255, 0.4)",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #5d47ff 0%, #8b46f0 100%)",
                      boxShadow: "0 12px 35px rgba(78, 54, 255, 0.6)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Login
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ width: "100%" }}
              >
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    py: 1,
                    borderRadius: "12px",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    background:
                      "linear-gradient(135deg, #4E36FF 0%, #7C3AED 100%)",
                    boxShadow: "0 8px 25px rgba(78, 54, 255, 0.4)",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #5d47ff 0%, #8b46f0 100%)",
                      boxShadow: "0 12px 35px rgba(78, 54, 255, 0.6)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                  onClick={() => {
                    handleDrawerToggle();
                    setDemoOpen(true);
                  }}
                >
                  Schedule Demo
                </Button>
              </motion.div>
            </motion.div>
          </ListItem>
        </List>
      </Drawer>

      <ScheduleDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
}

export default Navbar;
