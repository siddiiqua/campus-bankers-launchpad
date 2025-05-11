
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
              <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-campusBlue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8a2 2 0 0 1 0 4 2 2 0 0 1 0-4zm0 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM6 15a2 2 0 0 1 0 4 2 2 0 0 1 0-4zm0 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 0 1 0 4 2 2 0 0 1 0-4zm0 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-7a2 2 0 0 1 0 4 2 2 0 0 1 0-4zm0 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                </svg>
              </div>
              <div className="bg-campusGreen-50 p-3 rounded-lg mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-campusGreen-500 rounded-full"></span>
                  <p className="text-sm text-gray-700">Applications Open</p>
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
