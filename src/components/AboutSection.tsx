
import React from 'react';
import { Award, Briefcase, Users } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-white section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About the Internship</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-700">
            The Campus Bankers Internship Program offers a dynamic 3-month opportunity to work as a marketing and outreach intern. 
            Interns will help promote current account openings among small businesses in Hyderabad while developing essential skills 
            in communication, digital marketing, and customer engagement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="feature-card">
            <div className="feature-icon">
              <Briefcase className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Marketing</h3>
            <p className="text-gray-600">Gain hands-on experience in promoting banking products to local businesses</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <Award className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Skill Development</h3>
            <p className="text-gray-600">Build communication, sales, and customer relationship management skills</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <Users className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Impact</h3>
            <p className="text-gray-600">Help local businesses access banking services and drive financial inclusion</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
