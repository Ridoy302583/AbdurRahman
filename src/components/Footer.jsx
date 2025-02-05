import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Abdur Rahman</h3>
            <p className="text-gray-400">Digital Marketing Expert</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className="bi bi-linkedin text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className="bi bi-twitter text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className="bi bi-facebook text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className="bi bi-instagram text-xl"></i>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2023 Abdur Rahman. All rights reserved.</p>
          <p className="mt-2">Designed by WebSparks AI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
