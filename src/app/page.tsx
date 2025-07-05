import { Box } from '@mui/material';
import dynamic from 'next/dynamic';

// Non-SSR components
const HeroSection = dynamic(() => import('@/components/home/HeroSection'), { ssr: false });
const AboutSection = dynamic(() => import('@/components/home/AboutSection'), { ssr: false });
const WorkforceShiftSection = dynamic(() => import('@/components/home/WorkforceShiftSection'), { ssr: false });
const FeaturesSection = dynamic(() => import('@/components/home/FeaturesSection'), { ssr: false });
const WhyChooseSection = dynamic(() => import('@/components/home/WhyChooseSection'), { ssr: false });
const ComparisonSection = dynamic(() => import('@/components/home/ComparisonSection'), { ssr: false });
const WhoIsProductFor = dynamic(() => import('@/components/home/WhoIsProductFor'), { ssr: false });

export default function Home() {
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
