
import React from 'react';

const InternshipStructure: React.FC = () => {
  return (
    <section id="structure" className="bg-campusBlue-50 section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Internship Structure
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 text-center card-shadow">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-campusBlue-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-campusBlue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Duration</h3>
            <p className="text-gray-700 text-lg">3 Months</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-center card-shadow">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-campusBlue-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-campusBlue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Mode</h3>
            <p className="text-gray-700 text-lg">Hybrid</p>
            <p className="text-sm text-gray-500">(Field Visits + Online Reporting)</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-center card-shadow">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-campusBlue-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-campusBlue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Stipend</h3>
            <p className="text-gray-700 text-lg">₹5,000 – ₹10,000/month</p>
            <p className="text-sm text-gray-500">(Performance-based)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipStructure;
