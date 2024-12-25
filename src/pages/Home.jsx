import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const HomePage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imagePath] = useState('/src/assets/demoimage.jpeg');

  const [secondImageLoaded, setSecondImageLoaded] = useState(false);
  const [secondImagePath] = useState('/src/assets/secondimage.jpeg');

  useEffect(() => {
    const img = new Image();
    img.src = imagePath;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(false);
  }, [imagePath]);

  useEffect(() => {
    const img = new Image();
    img.src = secondImagePath;
    img.onload = () => setSecondImageLoaded(true);
    img.onerror = () => setSecondImageLoaded(false);
  }, [secondImagePath]);

  return (
    <div className="min-h-screen">
      {/* Navbar - Moved outside sections for consistent positioning */}
      <Navbar />
      
      {/* First Section */}
      <div className="relative min-h-screen">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/src/assets/homebg1.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="container mx-auto px-4 pt-20">
            <div className="flex flex-col items-center">
              {/* Conditional rendering for image/placeholder */}
              {imageLoaded ? (
                <div className="w-full max-w-3xl aspect-video rounded-lg shadow-lg mb-12 overflow-hidden my-10">
                  <img 
                    src={imagePath}
                    alt="Demo content"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-full max-w-4xl aspect-video bg-white rounded-lg shadow-lg mb-12">
                  {/* Empty placeholder */}
                </div>
              )}
              {/* Welcome text */}
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
                Welcome to GameCraftor
              </h1>
              {/* Download button */}
              <button className="bg-pink-500 hover:bg-pink-600 text-white text-xl px-12 py-3 rounded-full transition-colors my-6">
                Download Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section with Blue Gradient */}
      <div className="relative min-h-screen">
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(-171deg, #5AC4FF 75%, white 75%)'
          }}
        />
        <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-24 flex items-center justify-center min-h-screen"> {/* Added pt-24 for top spacing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="w-full flex justify-center">
              {secondImageLoaded ? (
                <div className="bg-white aspect-square w-full max-w-md rounded-lg shadow-lg">
                  <img 
                    src={secondImagePath} 
                    alt="Second Demo content" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ) : (
                <div className="bg-white aspect-square w-full max-w-md rounded-lg shadow-lg"></div>
              )}
            </div>
            
            {/* Text content */}
            <div className="text-white space-y-6 ">
              <h2 className="text-4xl font-bold mb-6 ">What is GameCraftor?</h2>
              <p className="text-lg text-justify leading-relaxed">
                GameCraftor is an innovative board game design application that enables users to create, modify, and test their game ideas seamlessly. With an intuitive interface and powerful features, GameCraftor streamlines the entire process from ideation to production.
              </p>
              <p className="text-lg text-justify leading-relaxed">
                With GameCraftor, you can dive right into designing new games from scratch, edit and fine-tune existing ones, or rigorously test your ideas through immersive simulations. We're here to make sure your creative journey from concept to physical production is smooth and satisfying.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;