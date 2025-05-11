
import React from 'react';
import { HandCoins, FileText, CalendarDays, Smartphone } from "lucide-react";

const ResponsibilitiesSection: React.FC = () => {
  const responsibilities = [
    {
      icon: <HandCoins className="w-6 h-6" />,
      title: "Business Outreach",
      description: "Visit small businesses to explain current account offerings and benefits"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Lead Generation",
      description: "Promote banking benefits and gather leads from interested businesses"
    },
    {
      icon: <CalendarDays className="w-6 h-6" />,
      title: "Daily Reporting",
      description: "Submit daily updates and feedback on business interactions"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Digital Tools",
      description: "Use digital tools like Google Forms and WhatsApp for reporting"
    }
  ];

  return (
    <section id="responsibilities" className="bg-white section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Day-to-Day Responsibilities
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {responsibilities.map((item, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-xl p-6 card-shadow">
              <div className="bg-campusBlue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-campusBlue-600">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResponsibilitiesSection;
