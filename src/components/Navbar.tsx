
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-10">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/ab7b4d1c-3706-43cc-bdbd-18d5461fb1f0.png" 
            alt="Campus Bankers Logo" 
            className="h-28 w-auto"
          />
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="#about" className="text-gray-700 hover:text-campusBlue-600 transition-colors">About</Link>
          <Link to="#responsibilities" className="text-gray-700 hover:text-campusBlue-600 transition-colors">Responsibilities</Link>
          <Link to="#structure" className="text-gray-700 hover:text-campusBlue-600 transition-colors">Structure</Link>
          <Link to="#eligibility" className="text-gray-700 hover:text-campusBlue-600 transition-colors">Eligibility</Link>
        </nav>
        <Button className="btn-primary">Apply Now</Button>
      </div>
    </header>
  );
};

export default Navbar;
