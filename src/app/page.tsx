"use client";
import { Box } from '@mui/material';
import { useEffect } from "react";

import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import WorkforceShiftSection from '@/components/home/WorkforceShiftSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import ComparisonSection from '@/components/home/ComparisonSection';
import WhoIsProductFor from '@/components/home/WhoIsProductFor';

export default function Home() {

  useEffect(() => {
    // Disable browser scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <Box component="main">
      <HeroSection />
      <AboutSection />
      <WorkforceShiftSection/>      
      <FeaturesSection />
      <WhyChooseSection/>
      <ComparisonSection />
      <WhoIsProductFor />
    </Box>
  );
}

