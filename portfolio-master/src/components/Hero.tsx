import React from 'react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-screen flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">Tharun J P</h1>
        <h2 className="text-3xl mb-6">Full Stack Developer</h2>
        <button
          className="bg-white text-purple-500 px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          View My Work
        </button>
      </div>
    </div>
  );
};

export default Hero;

