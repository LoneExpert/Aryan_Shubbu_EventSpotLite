import React from "react";
import "../App.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer flex flex-col md:flex-row items-center md:justify-between p-6 bg-gray-800 text-white">
      <div className="footer-flex-1 mb-4 md:mb-0">
        <span className="opacity-50">&copy;</span> 2024 EventSpot Lite
      </div>
      
      <div className="mx-auto md:mx-0 mb-4 md:mb-0">
        <img src="/assets/footer_logo.png" className="w-24 h-24 md:w-40 md:h-40" alt="Logo" />
      </div>

      <div className="footer-flex-3">
        <div className="flex justify-center md:justify-end mt-4">
          <div className="grid grid-cols-4 gap-4">
            <a href="#" className="text-gray-400 hover:text-white text-2xl md:text-3xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl md:text-3xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl md:text-3xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl md:text-3xl">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
