import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/ab7b4d1c-3706-43cc-bdbd-18d5461fb1f0.png" 
                alt="Campus Bankers Logo" 
                className="h-16 w-auto bg-white rounded-lg p-1"
              />
            </div>
            <p className="text-gray-400">
              A program dedicated to provide real-world banking experience to college students.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="#about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="#responsibilities" className="text-gray-400 hover:text-white transition-colors">Responsibilities</Link></li>
              <li><Link to="#structure" className="text-gray-400 hover:text-white transition-colors">Structure</Link></li>
              <li><Link to="#eligibility" className="text-gray-400 hover:text-white transition-colors">Eligibility</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="mailto:info@campusbankers.com" className="text-gray-400 hover:text-white transition-colors">info@campusbankers.com</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Partner</h3>
            <ul className="space-y-2">
              <li><a href="https://secunderabadbank.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">SecunderabadBank.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500">
            A program by CampusBankers in collaboration with The Secunderabad Co-operative Urban Bank Ltd.
          </p>
          <p className="text-gray-600 mt-2 text-sm">
            © {new Date().getFullYear()} Campus Bankers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
