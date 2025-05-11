
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-campusBlue-50 to-campusBlue-100 section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-campusBlue-900 leading-tight">
              Campus Bankers Internship Program
            </h1>
            <p className="text-xl md:text-2xl mt-6 text-gray-700">
              Work on-ground with small businesses and drive financial inclusion.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="btn-primary text-lg">Apply Now</Button>
              <Button variant="outline" className="btn-outline text-lg">Learn More</Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                  alt="Students in an internship program" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-campusGreen-50 p-3 rounded-lg mb-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-campusGreen-500 text-white text-xs rounded-md font-medium">
                    Applications Open
                  </span>
                  <p className="text-sm text-gray-700">Apply before June 30th</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-semibold">3 Months</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Stipend</p>
                  <p className="font-semibold">₹5,000 – ₹10,000/month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
