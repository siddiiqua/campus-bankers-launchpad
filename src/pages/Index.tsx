
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import BankSection from '@/components/BankSection';
import ResponsibilitiesSection from '@/components/ResponsibilitiesSection';
import InternshipStructure from '@/components/InternshipStructure';
import EligibilitySection from '@/components/EligibilitySections';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <BankSection />
        <ResponsibilitiesSection />
        <InternshipStructure />
        <EligibilitySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
