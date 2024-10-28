import React from "react";
import "../App.css";

const Hero_Section = () => {
  return (
    <div className="flex flex-col items-center mt-64 p-4">
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl text-center fade-in">
        Discover vibrant <span className="highlight">local events </span>and connect
      </h1>
      <h2 className="text-white text-3xl sm:text-4xl md:text-5xl text-center fade-in">
        with your city's pulse, all in one spot!
      </h2>
      <p className="text-lg text-white mt-5 opacity-75 text-center fade-in">
        <span className="font-extrabold highlight">EventSpot Lite </span>lets you easily discover local events, from concerts to festivals, with a sleek,
      </p>
      <p className="text-lg text-white opacity-75 text-center fade-in">
        responsive design. Explore your city's vibe in just a few taps and never miss a moment!
      </p>
      <div className="flex flex-col sm:flex-row justify-center mt-8 gap-4">
        <button className="text-white effect animate button1 p-2 rounded-lg flex items-center w-full sm:w-40">
          <span className="text-lg pl-2">Explore Now</span>
          <svg className="w-5 h-5 pl-2 transform rotate-[35deg]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path fill="#ffffff" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/>
          </svg>
        </button>
        <button className="text-white effect animate button2 p-2 flex items-center w-full sm:w-40">
          <span className="text-lg pl-2">Stay with us</span>
          <svg className="w-5 h-5 pl-2 transform rotate-[35deg]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path fill="#ffffff" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero_Section;
