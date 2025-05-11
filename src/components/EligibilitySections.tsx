
import React from 'react';
import { Check } from "lucide-react";

const EligibilitySection: React.FC = () => {
  const eligibilityRequirements = [
    "Available part-time between June–August",
    "Based in Hyderabad",
    "Studying or graduated in commerce, business, law, or related fields",
    "Proactive and comfortable with fieldwork",
    "Strong communication and interpersonal skills"
  ];

  const otherRequirements = [
    "Must have a smartphone",
    "Familiarity with tools like Google Forms & WhatsApp",
    "Having a personal vehicle (bike/scooter) is a plus"
  ];

  return (
    <section id="eligibility" className="bg-white section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Who Can Apply</h2>
            
            <ul className="space-y-4">
              {eligibilityRequirements.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-campusGreen-100 flex items-center justify-center text-campusGreen-600 mt-0.5">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Other Requirements</h2>
            
            <ul className="space-y-4">
              {otherRequirements.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-campusBlue-100 flex items-center justify-center text-campusBlue-600 mt-0.5">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 p-4 bg-campusBlue-50 rounded-lg border border-campusBlue-100">
              <p className="text-campusBlue-700 text-sm">
                <strong>Note:</strong> Selected candidates will undergo a brief orientation session before starting their fieldwork.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
