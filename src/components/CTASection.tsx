
import React from 'react';
import { Button } from "@/components/ui/button";

const CTASection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-campusBlue-600 to-campusBlue-800 section-padding text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Ready to Make an Impact?
        </h2>
        
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join the Campus Bankers Internship Program and kickstart your career in the banking sector.
        </p>
        
        <Button className="bg-white hover:bg-gray-100 text-campusBlue-700 text-lg px-8 py-6 h-auto rounded-lg">
          Apply Now
        </Button>
        
        <p className="mt-6 text-campusBlue-100">
          Limited seats. Apply today and start your journey with a trusted banking institution.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
