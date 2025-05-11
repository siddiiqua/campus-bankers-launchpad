
import React from 'react';

const BankSection: React.FC = () => {
  return (
    <section className="bg-campusBlue-50 section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/3">
            <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center justify-center h-full">
              <div className="w-24 h-24 bg-campusBlue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-campusBlue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="8" width="18" height="12" rx="2" />
                  <path d="M7 8v-.805C7 4.428 9.428 2 12.195 2h.61C15.572 2 18 4.428 18 7.195V8" />
                  <path d="M12 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-semibold mb-2">Established 1998</h3>
              <p className="text-center text-gray-500">Secunderabad, Hyderabad</p>
              
              <div className="mt-6">
                <a href="https://secunderabadbank.com" target="_blank" rel="noopener noreferrer" 
                   className="text-campusBlue-600 hover:text-campusBlue-700 underline">
                  secunderabadbank.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Offered by The Secunderabad Co-operative Urban Bank Ltd.
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              The Secunderabad Co-operative Urban Bank Ltd. is a trusted financial institution serving the local 
              community since its establishment in 1998. Headquartered in Secunderabad, the bank offers a wide 
              range of services including:
            </p>
            
            <ul className="grid grid-cols-2 gap-3 mb-6">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-campusBlue-500 rounded-full"></span>
                <span>Savings Accounts</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-campusBlue-500 rounded-full"></span>
                <span>Current Accounts</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-campusBlue-500 rounded-full"></span>
                <span>Fixed Deposits</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-campusBlue-500 rounded-full"></span>
                <span>Loans</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-campusBlue-500 rounded-full"></span>
                <span>Locker Facilities</span>
              </li>
            </ul>
            
            <p className="text-gray-700">
              Known for its transparent operations and community-driven approach, the bank plays a vital role in 
              supporting small businesses, salaried individuals, and the cooperative sector.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankSection;
